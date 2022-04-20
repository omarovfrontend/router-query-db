'use strict';

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
    await queryInterface.bulkInsert('Posts', [
      {
        title: 'My Brothers',
        body: 'best the best',
        userID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'My work',
        body: 'JS Developer',
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'My favorite sport',
        body: 'Judo',
        userID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Hello',
        body: 'qwerty',
        userID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
