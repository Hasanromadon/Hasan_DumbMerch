'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      transaction_details.belongsTo(models.products, {
        as: 'product_detail',
        foreignKey: {
          name: 'id_product',
        },
      });
    }
  }
  transaction_details.init(
    {
      id_order: DataTypes.INTEGER,
      id_product: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'transaction_details',
    }
  );
  return transaction_details;
};
