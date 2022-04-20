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
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Shamil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Abdul',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Yusuf',
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

    //эта строчка - для отката миграции
    await queryInterface.bulkDelete('People', null, {});
  }
};
