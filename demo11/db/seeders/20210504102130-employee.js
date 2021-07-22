'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Employees', [{
          empno: 'H124',
          empname: 'Akshay',
          job: 'clerk',
          deptno: '$10',
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Employees', null, {});
  }
};
