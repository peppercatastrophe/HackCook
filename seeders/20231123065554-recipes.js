'use strict';

const InsertHelper = require('../helpers/insertHelper');

const fs = require('fs').promises

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
    const recipes = JSON.parse( await fs.readFile('./recipe.json', 'utf-8') )
    await queryInterface.bulkInsert('Recipes', recipes.map( InsertHelper.autoDate ))
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete('Recipes', null, {})
  }
};
