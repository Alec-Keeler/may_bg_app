'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
   await queryInterface.bulkInsert('Reviews', [
     { content: 'There is nothing I love more than escaping one pandemic for another, 10/10', gameId: 2, userId: 1, rating: 6 },
     { content: 'This game is far too long!', gameId: 5, userId: 1, rating: 10 }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
