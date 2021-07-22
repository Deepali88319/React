'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    

    return queryInterface.bulkInsert('Employees', [{
        empno: 'J123',
        empname: 'Doe',
        job: 'Manager',
        deptno: 'S12',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Employees', null, {});
    
  }
};
