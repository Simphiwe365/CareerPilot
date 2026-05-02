'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'bio', {
      type: Sequelize.TEXT
    });
    await queryInterface.addColumn('Users', 'current_role', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('Users', 'skills', {
      type: Sequelize.JSON
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'bio');
    await queryInterface.removeColumn('Users', 'current_role');
    await queryInterface.removeColumn('Users', 'skills');
  }
};