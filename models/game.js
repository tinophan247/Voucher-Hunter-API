'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Event}) {
      this.hasMany(Event, {foreignKey: 'gameList', as: 'game'})
    }
  }
  Game.init({
    gameName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};