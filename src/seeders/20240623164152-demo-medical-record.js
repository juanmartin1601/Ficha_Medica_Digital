'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('medicalRecords', [
      {
        id: "c734d2e1-06e0-4dfd-9797-784891fd90e8",
        title: 'Annual Checkup',
        category: 'General',
        description: 'Routine annual checkup',
        petId: "3b18c049-a80e-4325-927d-95b702f5fb10", 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:"9383c933-4dba-47e8-8f2a-30bd9fe56749",
        title: 'Vaccination',
        category: 'Vaccination',
        description: 'Rabies vaccination',
        petId: "e7f31a6b-444c-45bd-ac29-098b3cfb347f", 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "232f75df-f553-4c74-acfb-1a51b734bce6",
        title: 'Dewarming',
        category: 'Dewarming',
        description: 'Dewarming pill',
        petId: "e7f31a6b-444c-45bd-ac29-098b3cfb347f", 
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('medicalRecords', null, {});
  }
};
