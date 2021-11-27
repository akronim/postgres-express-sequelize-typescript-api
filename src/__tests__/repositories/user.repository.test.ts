import Sequelize from 'sequelize';
import { User } from '../../models/user';
import {
  expect,
  fakerStatic,
  IDataRequestOptions,
  IUserAttributes,
  userRepository
} from '../setup';

describe('UserRepository', () => {
  const userToCreate: Omit<IUserAttributes, 'user_id'> = {
    first_name: fakerStatic.name.firstName(),
    last_name: fakerStatic.name.lastName(),
    email: fakerStatic.internet.email(),
    password: fakerStatic.internet.password(),
    is_admin: fakerStatic.datatype.boolean()
  };

  describe('count', () => {
    it('should return number of items', async () => {
      const count: number | { [key: string]: number } =
        await userRepository.count();

      expect(count).to.be.a('Number');
      expect(count).to.be.greaterThanOrEqual(100);
    });

    it('should return number of items + where', async () => {
      const dataRequestOptions: IDataRequestOptions = {
        where: [
          {
            column: 'is_admin',
            operation: 'eq',
            filterValue: true
          },
          {
            column: 'email',
            operation: 'endsWith',
            filterValue: 'm'
          },
          {
            column: 'created_at',
            operation: 'gt',
            filterValue: new Date('2018-02-15')
          }
        ]
      };

      const count: number | { [key: string]: number } =
        await userRepository.count(dataRequestOptions);

      expect(count).to.be.a('Number');
      expect(count).to.be.lessThan(20);
    });

    it('exists: should check if record(s) exist(s)', async () => {
      const dataRequestOptions: IDataRequestOptions = {
        where: [
          {
            column: 'is_admin',
            operation: 'eq',
            filterValue: true
          }
        ]
      };

      const exists: boolean | { [key: string]: number } =
        await userRepository.exists(dataRequestOptions);

      expect(exists).to.be.a('boolean');
      expect(exists).to.be.true;
    });
  });

  describe('find', () => {
    it('should retrive data from db', async () => {
      const response: { count: number; rows: User[] } =
        await userRepository.find();

      expect(response).to.not.be.undefined;

      expect(response).to.have.property('count');
      expect(response).to.have.property('rows');

      expect(response.count).to.be.greaterThanOrEqual(100);
      expect(response.rows).to.be.an('Array');

      expect(response.rows.shift()).to.have.property('user_id');
      expect(response.rows.shift()).to.be.instanceOf(User);
    });
  });

  describe('findById', () => {
    it('should retrive a record by id', async () => {
      const userId = '8032f84b-958a-4eef-8112-1936b99fe291';
      const res: User | null = await userRepository.findById(userId);

      expect(res).to.not.be.undefined;

      expect(res).to.be.instanceOf(User);
      expect(res).to.have.property('user_id');

      if (res) {
        expect(res.user_id).to.eq(userId);
      }
    });

    it('should not retrive a record by id', async () => {
      const res: User | null = await userRepository.findById(
        '1234abcd-958a-4eef-8112-1936b99fe291'
      );

      expect(res).to.be.null;
    });

    it('should not retrive a record by id - 2', async () => {
      const userId = '1234';
      await expect(userRepository.findById(userId)).to.be.rejectedWith(
        Sequelize.DatabaseError,
        'invalid input syntax for type uuid: "1234"'
      );
    });
  });

  describe('findOne', () => {
    it('should retrive a record from db', async () => {
      const email = 'sflorences@delicious.com';
      const res: User = await userRepository.findOne('email', email);

      expect(res).to.not.be.undefined;

      expect(res).to.be.instanceOf(User);
      expect(res).to.have.property('user_id');
      expect(res.email).to.eq(email);
    });

    it('should retrive a record from db + include', async () => {
      const email = 'mhandley2o@timesonline.co.uk';
      const res: User = await userRepository.findOne('email', email, [
        'orders'
      ]);

      expect(res).to.not.be.undefined;

      expect(res).to.be.instanceOf(User);
      expect(res).to.have.property('user_id');
      expect(res).to.have.property('orders');
      expect(res.email).to.eq(email);
    });
  });

  describe('create', () => {
    it('should add a new user to the db', async () => {
      const user: User = await userRepository.create(userToCreate);

      expect(user).to.have.property('user_id');
      expect(user.first_name).to.equal(userToCreate.first_name);
      expect(user.email).to.equal(userToCreate.email);
      expect(user.password).to.equal(userToCreate.password);
      expect(user).to.have.property('created_at');
      expect(user.created_at).to.be.a('Date');
    });
  });
});
