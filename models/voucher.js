'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voucher extends Model {
    static associate({Customer}) {
      this.hasMany(Customer, { foreignKey : "voucherList", as: 'voucher'});
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