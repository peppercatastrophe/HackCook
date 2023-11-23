'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addColumn('Recipes', 'imgUrl', Sequelize.DataTypes.STRING)
    queryInterface.addColumn('Recipes', 'idYoutube', Sequelize.DataTypes.STRING)
    queryInterface.addColumn('Recipes', 'URL', Sequelize.DataTypes.STRING)
    queryInterface.changeColumn('Recipes', 'bahan', Sequelize.DataTypes.TEXT)


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeColumn('Recipes', 'imgUrl')
    queryInterface.removeColumn('Recipes', 'idYoutube')
    queryInterface.removeColumn('Recipes', 'URL')
    queryInterface.renameColumn('Recipes', ['title', 'name'])
    queryInterface.renameColumn('Recipes', ['bahan', 'description'])
  }
};
