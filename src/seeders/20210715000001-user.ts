import { QueryInterface } from 'sequelize';
import { seedUsersTableQuery } from '../db/queries/userQueries';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.sequelize.query(seedUsersTableQuery);
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  }
};
