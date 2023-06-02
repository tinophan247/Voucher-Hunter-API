'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({model}) {
    }
  }
  Voucher.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    discount: DataTypes.STRING,
    img: DataTypes.STRING,
    code: DataTypes.STRING,
    condition1: DataTypes.STRING,
    condition2: DataTypes.STRING,
    tos: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Voucher',
  });
  return Voucher;
};