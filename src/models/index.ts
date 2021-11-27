import { Sequelize } from 'sequelize';
import connectionString from '../config/config';
import { DevelopmentOrTestOrProduction } from '../types';
import { User, UserFactory } from './user';
import { Item, ItemFactory } from './item';
import { Order, OrderFactory } from './order';
import { OrderItem, OrderItemFactory } from './orderitem';
import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';

const config: DevelopmentOrTestOrProduction = connectionString[env];

const sequelize: Sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const user = UserFactory(sequelize);
const item = ItemFactory(sequelize);
const order = OrderFactory(sequelize);
const orderItem = OrderItemFactory(sequelize);

interface DB {
  [key: string]: any;
  // User: typeof user;
  // Item: typeof Item;
  // Order: typeof Order;
  // OrderItem: typeof OrderItem;
  // sequelize: Sequelize;
}

const db: DB = {
  User: user,
  Item: item,
  Order: order,
  OrderItem: orderItem
};

Object.keys(db).forEach((x: string): void => {
  if (db[x].associate) {
    db[x].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
