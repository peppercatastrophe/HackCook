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
    const users = [
      {
        username: 'peppercatastrophe',
        email: 'abyansetia@gmail.com',
        password: '12345',
        role: 'Admin'
      },
      {
        username: 'asdfasdf',
        email: 'asdfasdef@a.c',
        password: 'fdsfsdfsf',
        role: 'User'
      }
    ]
    await queryInterface.bulkInsert('Users', users.map( InsertHelper.autoDate ))
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};
