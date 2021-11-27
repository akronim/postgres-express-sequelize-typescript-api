/* eslint-disable class-methods-use-this */
import { isEmpty, isValidEmail, validatePassword } from '../utils/validations';
import { getTotalPages } from '../db/queryHelper';
import {
  hashPassword,
  comparePassword,
  generateAccessToken
} from '../utils/auth';
import UserRepository from '../repositories/user.repository';
import { IDataRequestOptions, IUserAttributes } from '../types';
import { User } from '../models/user';

class UserService {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    if (!userRepository) {
      throw new Error('No userRepository provided to UserService!');
    }
    this.userRepository = userRepository;
  }

  async count(
    options: IDataRequestOptions
  ): Promise<Record<string, number | { [key: string]: number }>> {
    const response: number | { [key: string]: number } =
      await this.userRepository.count(options);

    return { total_records: response };
  }

  async find(options: IDataRequestOptions): Promise<Record<string, unknown>> {
    const data = await this.userRepository.find(options);

    if (options && options.pagination) {
      const totalPages = getTotalPages(data.count, options.pagination.limit);
      return {
        totalItems: data.count,
        users: data.rows,
        totalPages,
        page: options.pagination.page
      };
    }

    return {
      totalItems: data.count,
      users: data.rows
    };
  }

  async findUsersOrdesDetails(
    idValue: string | number
  ): Promise<Record<string, unknown>> {
    // const ordersItems = await this.userRepository.findById({
    //   value: idValue,
    //   column: 'user_id',
    //   include: { all: true, nested: true }
    // });
    // return { user_orders_items: ordersItems };

    const query = `
    SELECT orders.order_id, orders.total_price, orders_items.item_id, orders_items.quantity, items.name, items.unit_price
    FROM orders
    JOIN users USING (user_id)
    JOIN orders_items USING (order_id)
    JOIN items USING (item_id)
    WHERE user_id=?;`;

    const data = await this.userRepository.executeRawQuery(
      query,
      [idValue],
      'SELECT'
    );

    const ordersItems = [];

    for (let i = 0; i < data.length; i += 1) {
      const order = data[i];

      const o = ordersItems.find((x) => x.order_id === order.order_id);

      if (!o) {
        ordersItems.push({
          order_id: order.order_id,
          total_price: order.total_price,
          items: [
            {
              item_id: order.item_id,
              quantity: order.quantity,
              name: order.name,
              unit_price: order.unit_price
            }
          ]
        });
      } else {
        o.items.push({
          item_id: order.item_id,
          quantity: order.quantity,
          name: order.name,
          unit_price: order.unit_price
        });
      }
    }

    return { user_orders_items: ordersItems };
  }

  // TODO test
  async findById(
    idValue: string | number
  ): Promise<Record<string, User | null>> {
    const user = await this.userRepository.findById(idValue);
    return { user };
  }

  // TODO test
  async findOne(column: string, value: string | number | boolean | Date) {
    const user = await this.userRepository.findOne(column, value);
    return { user };
  }

  validateCreate(user: Omit<IUserAttributes, 'user_id'>) {
    const { email, password } = user;

    const messages = [];

    if (!user) {
      messages.push('No object is provided');
      this.throwValidationError(messages);
    }

    if (Object.keys(user).length === 0) {
      messages.push('Empty object');
      this.throwValidationError(messages);
    }

    const required1 = ['email', 'password', 'first_name', 'last_name'];
    const required2 = Object.keys(user).filter((key) =>
      required1.includes(key)
    );

    if (required1.length !== required2.length) {
      messages.push('Required values not supplied');
      this.throwValidationError(messages);
    }

    Object.entries(user).forEach(([key, value]) => {
      const v: any = value;

      if (isEmpty(v)) {
        messages.push(`No value for: ${key}`);
      }
    });

    this.throwValidationError(messages);

    if (!isValidEmail(email)) {
      messages.push('Invalid email');
    }

    if (!validatePassword(password)) {
      messages.push('Invalid password');
    }

    this.throwValidationError(messages);
  }

  throwValidationError(messages: string[]) {
    if (messages.length) {
      throw new Error(messages.join(', '));
    }
  }

  async create(user: Omit<IUserAttributes, 'user_id'>): Promise<{ [key: string]: User }> {
    this.validateCreate(user);

    user.password = hashPassword(user.password);

    const createdUser: User = await this.userRepository.create(user);

    return { user: createdUser };
  }

  async updateById(
    idValue: string | number,
    idColumn: string,
    entity: Omit<IUserAttributes, 'user_id'>
  ) {
    Object.entries(entity).forEach(([key]) => {
      if (key === 'password') {
        entity.password = hashPassword(entity.password);
      }
    });
    const user = await this.userRepository.updateById(
      idValue,
      idColumn,
      entity
    );
    return { user };
  }

  async deleteById(idValue: string | number, idColumn: string) {
    const numAffectedRows = await this.userRepository.deleteById(
      idValue,
      idColumn
    );
    return { deleted: numAffectedRows };
  }

  async executeRawQuery(query: string, replacements: any, queryType: string) {
    return this.userRepository.executeRawQuery(query, replacements, queryType);
  }

  async signInUser(options: {
    email: string;
    password: string;
  }): Promise<Record<string, string | null>> {
    let token = null;

    const { email, password } = options;
    const errorMsg = 'Invalid email and/or password';

    if (isEmpty(email) || isEmpty(password)) {
      this.throwValidationError([errorMsg]);
    }

    const query = 'SELECT * FROM users WHERE email=? LIMIT 1';

    const response = await this.userRepository.executeRawQuery(
      query,
      [email],
      'SELECT'
    );
    const user = response[0];

    if (!user) {
      this.throwValidationError([errorMsg]);
    }

    if (user) {
      if (!comparePassword(user.password, password)) {
        this.throwValidationError([errorMsg]);
      }

      token = generateAccessToken(user);
    }

    return { token };
  }
}

export default UserService;
