'use strict';

const InsertHelper = require('../helpers/insertHelper');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const categories = [
      {
        // 1
        name: "Goreng"
      },
      {
        // 2
        name: "Rebus"
      },
      {
        // 3
        name: "Bakar"
      }
    ]
    await queryInterface.bulkInsert('Categories', categories.map( InsertHelper.autoDate ))
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {})
  }
};
