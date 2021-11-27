import {
  CountOptions,
  DestroyOptions,
  FindOptions,
  Model,
  Order,
  QueryTypes,
  WhereOptions
} from 'sequelize';
import {
  buildFilterQuery,
  buildPaginationQuery,
  buildSortQuery
} from '../db/queryHelper';
import db from '../models';
import {
  IBaseRepository,
  IDataRequestOptions,
  IPaginationQuery
} from '../types';

class BaseRepository<T extends Model<T>> implements IBaseRepository<T> {
  // constructor(protected model: ModelCtor<T>) {}
  constructor(protected model: typeof Model & { new(): T }) { }

  async count(
    options?: IDataRequestOptions
  ): Promise<number | { [key: string]: number }> {
    let count = null;

    let query: CountOptions<T> | null = null;

    if (options) {
      query = buildFilterQuery(options);
    }

    count = await this.model.count({ where: query ?? undefined });

    return count;
  }

  async exists(options?: IDataRequestOptions): Promise<boolean> {
    let query: WhereOptions<T> | null = null;

    if (options) {
      query = buildFilterQuery(options) as WhereOptions<T>;
    }

    return this.model
      .count({
        where: query ?? undefined
      })
      .then((count) => count !== 0);
  }

  async find(
    options?: IDataRequestOptions
  ): Promise<{ count: number; rows: T[] }> {
    let data = null;

    let filterQuery: WhereOptions<T> | null = null;
    let sortQuery: Order | null = null;
    let paginationQuery: IPaginationQuery | null = null;

    if (options) {
      filterQuery = buildFilterQuery(options) as WhereOptions<T>;
      sortQuery = buildSortQuery(options) as Order;
      paginationQuery = buildPaginationQuery(options);
    }

    data = await this.model.findAndCountAll({
      where: filterQuery ?? undefined,
      order: sortQuery ?? undefined,
      limit: paginationQuery?.limit ?? undefined,
      offset: paginationQuery?.offset ?? undefined
    });

    return data;
  }

  async findById(id: string | number): Promise<T | null> {
    return this.model.findByPk<T>(id);
  }

  async findOne(
    column: string,
    value: string | number | boolean | Date,
    include?: string | string[]
  ): Promise<T | null> {
    const whereOptions: FindOptions<T> = { [column]: value };
    const record = await this.model.findOne({
      where: whereOptions,
      include: include
    });

    return record;
  }

  async create(entity: Record<string, unknown>): Promise<T> {
    const recordToCreate: T = entity as T;
    return this.model.create(recordToCreate);
  }

  async updateById(
    idValue: string | number,
    idColumn: string,
    entity: T
  ): Promise<T | null> {
    const whereOptions: FindOptions<T> = { [idColumn]: idValue };
    const recordToUpdate: T | null = await this.model.findOne({
      where: whereOptions
    });

    if (!recordToUpdate) {
      return null;
    }

    Object.entries(entity).forEach(([key, value] /* , index */) => {
      (recordToUpdate as Record<string, unknown>)[key] = value;
    });

    await recordToUpdate.save();

    return recordToUpdate;
  }

  async deleteById(
    idValue: string | number,
    idColumn: string
  ): Promise<number> {
    const whereOptions: DestroyOptions<T> = { [idColumn]: idValue };
    return this.model.destroy({ where: whereOptions });
  }

  async executeRawQuery(
    query: string,
    replacements: any,
    queryType: string
  ): Promise<any> {
    const enumVal: QueryTypes = (<any>QueryTypes)[queryType];
    return db.sequelize?.query(query, {
      replacements: replacements || null,
      type: QueryTypes[enumVal]
    });
  }
}

export default BaseRepository;
