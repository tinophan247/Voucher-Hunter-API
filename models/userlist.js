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
    name: DataTypes.STRING,
    yob: DataTypes.STRING,
    score: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userList',
  });
  return userList;
};