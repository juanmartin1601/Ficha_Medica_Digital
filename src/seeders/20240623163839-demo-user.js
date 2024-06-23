'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: "fed5ac56-5b69-44de-912d-a2668ede7cf5",
        name: 'Juan',
        dni: '12345678',
        address: '123 Main St',
        email: 'juan@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "84909880-65e3-4fb3-9470-7dc5085a0e31",
        name: 'Maria',
        dni: '87654321',
        address: '456 Elm St',
        email: 'maria@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
