import { QueryInterface } from 'sequelize';
import { seedItemsTableQuery } from '../db/queries/itemQueries';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.sequelize.query(seedItemsTableQuery);
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('items', {});
  }
};
