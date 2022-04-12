'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      transactions.hasMany(models.transaction_details, {
        as: 'order_detail',
        foreignKey: {
          name: 'id_order',
        },
      });
    }
  }
  transactions.init(
    {
      invoice_number: DataTypes.STRING,
      id_buyer: DataTypes.INTEGER,
      id_seller: DataTypes.INTEGER,
      tracking_number: DataTypes.STRING,
      status: DataTypes.STRING,
      isReview: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'transactions',
    }
  );
  return transactions;
};
