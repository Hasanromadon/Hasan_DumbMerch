const { product_reviews, transactions } = require('../../models');
const {
  handleErrorSever,
  handleErrorValidate,
} = require('../utils/handleError');
const Joi = require('joi');

// get all categories
exports.getAllReviews = async (req, res) => {
  try {
    const data = await product_reviews.findAll({
      attributes: {
        exclude: ['updatedAt'],
      },
    });

    res.send({
      status: 'success',
      data,
    });
  } catch (error) {
    console.log(error);
    handleErrorSever(res);
  }
};

// get all category
exports.getReview = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await product_reviews.findOne({
      where: {
        id,
      },
    });

    if (data !== null) {
      res.status(200).send({
        status: 'success',
        data,
      });
    } else {
      res.status(404).send({
        status: 'success',
        message: 'data not found',
      });
    }
  } catch (error) {
    console.log(error);
    handleErrorSever(res);
  }
};
exports.addReview = async (req, res) => {
  const { id } = req.user;
  const data = req.body;
  data.id_user = id;

  const schema = Joi.object({
    id_transaction: Joi.number().required(),
    id_product: Joi.number().required(),
    id_user: Joi.number().required(),
    rating: Joi.number().greater(0).less(6).required(),
    review: Joi.string().min(5).max(200).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return handleErrorValidate(error, res);

  try {
    const reviewData = await product_reviews.create(data);
    await transactions.update(
      {
        isReview: true,
      },
      {
        where: {
          id: req.body.id_transaction,
        },
      }
    );

    res.send({
      status: 'success',
      data: reviewData,
    });
  } catch (error) {
    console.log(error);
    handleErrorSever(res);
  }
};

exports.updateReview = async (req, res) => {
  const reviewId = req.params.id;
  const { id } = req.user;
  const schema = Joi.object({
    rating: Joi.number().greater(0).less(6).required(),
    review: Joi.string().min(5).max(200).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return handleErrorValidate(error, res);

  try {
    const data = await product_reviews.update(req.body, {
      where: {
        id: reviewId,
        id_user: id,
      },
    });

    res.send({
      status: 'success',
      data: req.body,
    });
  } catch (error) {
    console.log(error);
    handleErrorSever(res);
  }
};

exports.deleteReview = async (req, res) => {
  const reviewId = req.params.id;
  const { id } = req.user;

  try {
    await product_reviews.destroy({
      where: {
        id: reviewId,
        id_user: id,
      },
    });

    res.send({
      status: `success delete review : ${reviewId}`,
    });
  } catch (error) {
    console.log(error);
    handleErrorSever(res);
  }
};
