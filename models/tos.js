'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({model}) {
    }
  }
  ToS.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ToS',
  });
  return ToS;
};