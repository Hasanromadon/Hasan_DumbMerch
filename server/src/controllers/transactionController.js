const { transactions, transaction_details, products } = require('../../models');
const { generateInvoiceNumber } = require('../utils/generateInvoiceNumber');

const {
  handleErrorSever,
  handleErrorValidate,
} = require('../utils/handleError');
const Joi = require('joi');
const { Op, literal, fn, col } = require('sequelize');
const { date } = require('joi');
const { generateDateRangeMonth } = require('../utils/generateDateRangeMonth');
exports.getTransactions = async (req, res) => {
  const { role, id } = req.user;

  try {
    let transactionsData;
    if (role === 'admin') {
      transactionsData = await transactions.findAll({
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt'],
        },
        include: {
          model: transaction_details,
          as: 'order_detail',
          include: [
            {
              model: products,
              as: 'product_detail',
              attributes: ['name'],
            },
          ],
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'id_order', 'id', 'id_product'],
          },
        },
      });
      res.send({
        status: 'success',
        data: transactionsData,
      });
    } else {
      console.log('my role', role);
      transactionsData = await transactions.findAll({
        where: {
          id_buyer: id,
        },
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt'],
        },
        include: {
          model: transaction_details,
          as: 'order_detail',
          include: [
            {
              model: products,
              as: 'product_detail',
              attributes: ['name'],
            },
          ],
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'id_order', 'id', 'id_product'],
          },
        },
      });
      res.send({
        status: 'success',
        data: transactionsData,
      });
    }
  } catch (error) {
    console.log(error);
    handleErrorSever(res);
  }
};
exports.getTransaction = async (req, res) => {
  const { role, id } = req.user;
  const transactionId = req.params.id;
  try {
    let transactionData;
    if (role === 'admin') {
      transactionData = await transactions.findOne({
        where: {
          id: transactionId,
        },
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt'],
        },
        include: {
          model: transaction_details,
          as: 'order_detail',
          include: [
            {
              model: products,
              as: 'product_detail',
              attributes: ['name'],
            },
          ],
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'id_order', 'id', 'id_product'],
          },
        },
      });
    } else {
      transactionData = await transactions.findOne({
        where: {
          id: transactionId,
          id_buyer: id,
        },
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt'],
        },
        include: {
          model: transaction_details,
          as: 'order_detail',
          include: [
            {
              model: products,
              as: 'product_detail',
              attributes: ['name'],
            },
          ],
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'id_order', 'id', 'id_product'],
          },
        },
      });
    }
    if (transactionData !== null) {
      res.send({
        status: 'success',
        data: transactionData,
      });
    } else {
      res.status(404).send({
        status: 'success',
        message: 'transaction not found',
      });
    }
  } catch (error) {
    console.log(error);
    handleErrorSever(res);
  }
};

exports.addTransaction = async (req, res) => {
  const { id } = req.user;
  const { id_seller, order_detail } = req.body;

  const schema = Joi.object({
    id_seller: Joi.number().required(),
    order_detail: Joi.array().items(
      Joi.object().keys({
        id_product: Joi.number().required(),
        qty: Joi.number().required(),
        price: Joi.number().required(),
      })
    ),
  });

  const { error } = schema.validate(req.body);
  if (error) return handleErrorValidate(error, res);

  try {
    const lastID =
      (await transactions.findOne({
        limit: 1,
        order: [['id', 'DESC']],
        attributes: ['id'],
      })) || 0;

    const invoice_number = generateInvoiceNumber(lastID.id);

    const dataTransaction = await transactions.create({
      invoice_number,
      id_buyer: id,
      id_seller,
    });

    const data_order_detail = order_detail.map((order) => {
      return {
        ...order,
        id_order: dataTransaction.id,
      };
    });

    await transaction_details.bulkCreate(data_order_detail);
    // update stock
    order_detail.map(async (order) => {
      await products.increment(
        {
          qty: -order.qty,
        },
        {
          where: {
            id: order.id_product,
          },
        }
      );
    });

    res.send({
      status: 'success',
      data: dataTransaction,
    });
  } catch (error) {
    console.log(error);
    handleErrorSever(res);
  }
};

exports.updateTransaction = async (req, res) => {
  const { id } = req.params;

  const schema = Joi.object({
    tracking_number: Joi.number().min(1),
    status: Joi.any().valid('on proccess', 'complete'),
  });
  const { error } = schema.validate(req.body);
  if (error) return handleErrorValidate(error, res);

  try {
    const dataTransaction = await transactions.update(req.body, {
      where: {
        id,
      },
    });

    res.send({
      status: 'success',
      message: 'transaction Updated',
    });
  } catch (error) {
    console.log(error);
    handleErrorSever(res);
  }
};

exports.deleteTransaction = async (req, res) => {
  const id = req.params.id;
  try {
    await transactions.destroy({
      where: {
        id,
      },
    });

    res.status(200).send({
      status: 'success',
      message: `deleted transaction id: ${id}`,
    });
  } catch (error) {
    console.log(error);
    handleErrorSever(res);
  }
};

exports.transactionReportCurrentMonth = async (req, res) => {
  try {
    const currentMonth = generateDateRangeMonth();

    const records = await transaction_details.findAll({
      where: {
        createdAt: {
          [Op.and]: {
            [Op.gt]: currentMonth.startedDate,
            [Op.lte]: currentMonth.endDate,
          },
        },
      },
      attributes: [[literal('SUM(qty * price)'), 'total_revenue']],
    });

    res.status(200).json({
      status: 'success',
      message: 'revenue current month',
      data: records,
    });
  } catch (error) {
    handleErrorSever(res);
  }
};
exports.transactionReportAll = async (req, res) => {
  try {
    const records = await transaction_details.findAll({
      attributes: [[literal('SUM(qty * price)'), 'Total']],
    });

    res.status(200).json({
      status: 'success',
      message: 'revenue current all the time',
      data: records,
    });
  } catch (error) {
    handleErrorSever(res);
  }
};
exports.transactionReportByMonth = async (req, res) => {
  try {
    const records = await transaction_details.findAll({
      attributes: [
        [fn('MONTH', col('createdAt')), 'month'],
        [literal('SUM(qty * price)'), 'total'],
      ],
      group: 'month',
    });

    res.status(200).json({
      status: 'success',
      data: records,
    });
  } catch (error) {
    handleErrorSever(res);
  }
};
