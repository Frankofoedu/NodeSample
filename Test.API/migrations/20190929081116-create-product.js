"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "ProductTypes",
          key: "id"
        }
      },
      Name: {
        type: Sequelize.STRING
      },
      Price: {
        type: Sequelize.DOUBLE
      },
      Description: {
        type: Sequelize.STRING
      },
      Image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Products");
  }
};
