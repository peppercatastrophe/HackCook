'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addColumn('Recipes', 'CategoryId', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: 'Categories',
        key: 'id'
      }
    })
    queryInterface.addColumn('Recipes', 'UserId', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Recipes', 'CategoryId')
    queryInterface.removeColumn('Recipes', 'UserId')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
