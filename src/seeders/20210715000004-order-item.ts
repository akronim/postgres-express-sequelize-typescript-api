import { QueryInterface } from 'sequelize';
import { seedOrdersItemsTableQuery } from '../db/queries/orderItemQueries';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.sequelize.query(seedOrdersItemsTableQuery);
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('orders_items', {});
  }
};
