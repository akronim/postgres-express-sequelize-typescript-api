import Sequelize from 'sequelize';
import { IDataRequestOptions, IWhereEntity, IPaginationQuery } from '../types';

const { Op } = Sequelize;

export const buildCondition = (
  options: IWhereEntity
): Record<string, unknown> | null => {
  const { column, operation, filterValue } = options;

  const value = filterValue;

  let op = null;

  let condition: Record<string, unknown> | null = null;

  const generalOperations: Record<string, unknown> = {
    eq: { [Op.eq]: value },
    gt: { [Op.gt]: value },
    lt: { [Op.lt]: value },
    gte: { [Op.gte]: value },
    lte: { [Op.lte]: value }
  };

  const textOperations: Record<string, unknown> = {
    contains: { [Op.like]: `%${value}%` },
    startsWith: { [Op.startsWith]: value },
    endsWith: { [Op.endsWith]: value },
  };

  if (typeof filterValue === 'string') {
    if (textOperations[operation]) {
      op = textOperations[operation];
    }

    if (op) {
      condition = { [column]: op };
    }

    if (condition) {
      return condition;
    }
  }

  op = generalOperations[operation];

  if (op) {
    condition = { [column]: op };
  }

  return condition;
};

export const buildFilterQuery = (
  options: IDataRequestOptions
): Record<string, unknown> | null => {
  let filterQuery: Record<string, unknown> | null = null;

  if (options.where) {
    const conditions: Record<string, unknown>[] = [];

    options.where.forEach((filter: IWhereEntity) => {
      const condition = buildCondition(filter);
      if (condition) {
        conditions.push(condition);
      }
    });

    if (conditions.length > 1) {
      filterQuery = { [Op.and]: conditions };
    } else if (conditions.length === 1) {
      const condition = conditions.shift();
      if (condition) {
        filterQuery = condition;
      }
    }
  }

  return filterQuery;
};

export const buildSortQuery = (
  options: IDataRequestOptions
): Array<string[]> | null => {
  let sortQuery: Array<string[]> | null = null;

  if (options.sort) {
    const { column, direction } = options.sort;
    sortQuery = [[column, direction]];
  }

  return sortQuery;
};

const getOffset = (currentPage = 1, limit: number) => (currentPage - 1) * limit;

export const getTotalPages = (totalCount: number, limit: number): number =>
  Math.ceil(totalCount / limit);

export const buildPaginationQuery = (
  options: IDataRequestOptions
): IPaginationQuery | null => {
  let paginationQuery: IPaginationQuery | null = null;

  if (options.pagination) {
    const { page, limit } = options.pagination;

    const offset = getOffset(page, limit);

    paginationQuery = { offset, limit, page };
  }

  return paginationQuery;
};
