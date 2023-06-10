'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Game}) {
      this.belongsTo(Game, { foreignKey : "gameList", as: 'game'});
    }
  }

  Event.init({
    eventName: DataTypes.STRING,
    description: DataTypes.STRING,
    partnerName: DataTypes.STRING,
    tos: DataTypes.STRING,
    gameList: DataTypes.INTEGER || DataTypes.STRING  ,
    selectedVoucher: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};