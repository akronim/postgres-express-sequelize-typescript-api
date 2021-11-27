import { QueryInterface } from 'sequelize';
import { seedOrdersTableQuery } from '../db/queries/orderQueries';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.sequelize.query(seedOrdersTableQuery);
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('orders', {});
  }
};
