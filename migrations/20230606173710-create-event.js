"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Events", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      eventName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      partnerName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tos: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      gameList: {
        type: Sequelize.INTEGER || Sequelize.STRING,
        references: {
          model: "games",
          key: "id",
        },
        get() {
          return this.getDataValue("gameList").split(";");
        },
        set(val) {
          this.setDataValue("gameList", val.join(";"));
        },
      },
      selectedVoucher: {
        type: Sequelize.STRING,
      },
      startDate: {
        type: Sequelize.DATE,
      },
      endDate: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Events");
  },
};
