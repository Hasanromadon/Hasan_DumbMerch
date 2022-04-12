'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasOne(models.profiles, {
        as: 'profile',
        foreignKey: {
          name: 'id_user',
        },
      });
    }
  }
  users.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: {
        type: DataTypes.STRING,
        defaultValue: 'user',
      },
    },
    {
      sequelize,
      modelName: 'users',
    }
  );
  return users;
};
