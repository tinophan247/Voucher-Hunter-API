'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate({Voucher}) {
      this.belongsTo(Voucher, { foreignKey : "voucherList", as: 'voucher'});
    }
  }
  Customer.init({
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    ward: DataTypes.INTEGER,
    district: DataTypes.INTEGER,
    province: DataTypes.INTEGER,
    birthday: DataTypes.DATE,
    voucherList: DataTypes.INTEGER,
    role:DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};