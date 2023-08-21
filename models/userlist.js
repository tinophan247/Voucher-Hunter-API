'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userList.init({
    username: DataTypes.STRING,
    dob: DataTypes.DATE,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    feedback:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userList',
  });
  return userList;
};