import pool from '../models/pool';
import sequelizeMetaTableQuery from './queries/sequelizeMeta';
import {
  dropUsersTableQuery,
  seedUsersTableQuery
} from './queries/userQueries';
import {
  dropItemsTableQuery,
  seedItemsTableQuery
} from './queries/itemQueries';
import {
  dropOrdersTableQuery,
  seedOrdersTableQuery
} from './queries/orderQueries';
import {
  dropOrdersItemsTableQuery,
  seedOrdersItemsTableQuery
} from './queries/orderItemQueries';
import {
  enableUuidOsspQuery,
  dropUuidOsspQuery
} from './queries/extensionQueries';
import pricesCTE from './queries/otherQueries';

export const executeQueryArray = async (arr: string[]): Promise<void> => {
  for (let i = 0; i < arr.length; i += 1) {
    try {
      // eslint-disable-next-line no-await-in-loop
      await pool.query(arr[i]);
    } catch (err) {
      // console.log(`>>>>>>>>>> ${JSON.stringify(err.message)}`);
      // console.log(`>>>>>>>>>> ${JSON.stringify(err.detail)}`);
      // console.log(`>>>>>>>>>> ${JSON.stringify(err.line)}`);
      // console.log(`>>>>>>>>>> ${JSON.stringify(err.stack)}`);
    }
  }
};

export const dropTables = async (): Promise<void> => {
  await executeQueryArray([
    sequelizeMetaTableQuery,
    dropOrdersItemsTableQuery,
    dropOrdersTableQuery,
    dropUsersTableQuery,
    dropItemsTableQuery
  ]);
};

export const dropExtensions = async (): Promise<void> => {
  await executeQueryArray([dropUuidOsspQuery]);
};

export const installExtensions = async (): Promise<void> => {
  await executeQueryArray([enableUuidOsspQuery]);
};

export const insertIntoTables = async (): Promise<void> => {
  await executeQueryArray([
    seedUsersTableQuery,
    seedItemsTableQuery,
    seedOrdersTableQuery,
    seedOrdersItemsTableQuery
  ]);
};

export const executeCtes = async (): Promise<void> => {
  await executeQueryArray([pricesCTE]);
};
