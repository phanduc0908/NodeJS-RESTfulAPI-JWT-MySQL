'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert("movies",[
      {
        title : "Titanic",
        description : "Good story",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title : "Romeo and Juliet",
        description : "Sad story",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],{})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("movies",null,{});
  }
};
