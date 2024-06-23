'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pets', [
      {
        id:"e7f31a6b-444c-45bd-ac29-098b3cfb347f",
        name: 'Firu',
        species: 'Dog',
        birthDate: '2020-01-01',
        gender: 'male',
        userId: "fed5ac56-5b69-44de-912d-a2668ede7cf5", 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "3b18c049-a80e-4325-927d-95b702f5fb10",
        name: 'Bigotes',
        species: 'Cat',
        birthDate: '2019-05-15',
        gender: 'female',
        userId: "fed5ac56-5b69-44de-912d-a2668ede7cf5", 
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('pets', null, {});
  }
};
