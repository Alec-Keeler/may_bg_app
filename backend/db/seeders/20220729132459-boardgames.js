'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('Boardgames', [
      { name: 'Gloomhaven', maxPlayers: 4, category: 'Adventure' },
      { name: 'Pandemic Legacy: Season 1', maxPlayers: 4, category: 'Cooperative' },
      { name: 'Brass: Birmingham', maxPlayers: 4, category: 'Economic' },
      { name: 'Terraforming Mars', maxPlayers: 5, category: 'Economic' },
      { name: 'Twilight Imperium: Fourth Edition', maxPlayers: 6, category: 'Strategy' },
      { name: 'Spirit Island', maxPlayers: 4, category: 'Cooperative' },
      { name: 'Mage Knight', maxPlayers: 4, category: 'Adventure' },
      { name: 'Rising Sun', maxPlayers: 5, category: 'Strategy' }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Boardgames', null, {});
  }
};
