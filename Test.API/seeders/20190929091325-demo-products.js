"use strict";

const faker = require("faker");
const times = require("lodash.times");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
    return queryInterface.bulkInsert(
      "ProductTypes",
      times(3, () => ({
        Name: faker.commerce.department(),
        createdAt: new Date(),
        updatedAt: new Date()
      })),
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
    return queryInterface.bulkDelete("ProductTypes", null, {});
  }
};
