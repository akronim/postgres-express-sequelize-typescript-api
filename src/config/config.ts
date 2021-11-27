import dotenv from 'dotenv';
import { IConnectionString } from '../types';

dotenv.config();

const connectionString: IConnectionString = {
  development: {
    username: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_DEV_NAME as string,
    host: process.env.DB_HOST as string,
    dialect: 'postgres'
  },
  test: {
    username: process.env.DB_USER || 'test123user',
    password: process.env.DB_PASSWORD || 'test123userpass',
    database: process.env.DB_TEST_NAME || 'webshop_test',
    host: process.env.DB_TEST_HOST || '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_DEV_NAME as string,
    host: process.env.DB_HOST as string,
    dialect: 'postgres'
  }
};

export = connectionString;
