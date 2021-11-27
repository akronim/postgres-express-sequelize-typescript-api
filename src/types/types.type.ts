import { Dialect } from 'sequelize';

export interface IUserAttributes {
  user_id: string;
  email: string;
  first_name?: string | null;
  last_name?: string | null;
  password: string;
  is_admin?: boolean | null;
  created_at?: Date;
  updated_at?: Date;
}

export interface IItemAttributes {
  item_id: string;
  name: string | null;
  unit_price: number;
}

export interface IOrderAttributes {
  order_id: string;
  user_id: string;
  order_date: Date;
  total_price: number;
}

export interface IOrderItemAttributes {
  order_item_id: string;
  order_id: string;
  item_id: string;
  quantity: number | null;
}

// where options - BEGIN
export interface IWhere {
  dataRequestOptions: IDataRequestOptions;
}
export interface IDataRequestOptions {
  where?: Array<IWhereEntity> | null;
  sort?: ISort | null;
  pagination?: IPagination | null;
}
export interface IWhereEntity {
  column: string;
  operation: string;
  filterValue: boolean | string | Date;
}
export interface ISort {
  column: string;
  direction: string;
}
export interface IPagination {
  page: number;
  limit: number;
}
// where options - END

// pagination - BEGIN
export interface IPaginationQuery {
  offset: number;
  limit: number;
  page: number;
}
// pagination - END

// connection string - BEGIN
export interface IConnectionString {
  [key: string]: DevelopmentOrTestOrProduction;
}

export interface DevelopmentOrTestOrProduction {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: Dialect;
  use_env_variable?: string;
}
// connection string - END

export interface IBaseRepository<T> {
  count(
    options: IDataRequestOptions
  ): Promise<number | { [key: string]: number }>;
  find(options: IDataRequestOptions): Promise<{ count: number; rows: T[] }>;
  findById(id: string | number): Promise<T | null>;
  findOne(
    column: string,
    value: string | number | boolean | Date
  ): Promise<T | null>;
  create(entity: Record<string, unknown>): Promise<T>;
  updateById(
    idValue: string | number,
    idColumn: string,
    entity: T
  ): Promise<T | null>;
  deleteById(idValue: string | number, idColumn: string): Promise<number>;
  executeRawQuery(
    query: string,
    replacements: any,
    queryType: string
  ): Promise<any>;
}

// BaseRepository
// export type Constructor<T> = new (...args: any[]) => T;
// export type ModelType<T extends Model<T>> = Constructor<T> & typeof Model;

// new (...args: any[]) => any
// a function that accepts any number of arguments that are any type, returns any value, and can be invoked with new
