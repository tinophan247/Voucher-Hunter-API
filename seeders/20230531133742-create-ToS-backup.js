"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ToS",
      [
        {
          id: 1,
          description: "Quán cà phê",
          createdAt: "2023-05-31 20:30:00",
          updatedAt: "2023-05-31 20:30:10",
        },
        {
          id: 2,
          description: "Nhà hàng",
          createdAt: "2023-05-31 20:30:00",
          updatedAt: "2023-05-31 20:30:10",
        },
        {
          id: 3,
          description: "Khách sạn",
          createdAt: "2023-05-31 20:30:00",
          updatedAt: "2023-05-31 20:30:10",
        },
        {
          id: 4,
          description: "Siêu thị",
          createdAt: "2023-05-31 20:30:00",
          updatedAt: "2023-05-31 20:30:10",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ToS', null, {});
  },
};
