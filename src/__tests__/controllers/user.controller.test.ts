import { User } from '../../models/user';
import {
  expect,
  server,
  BASE_URL,
  hashPassword,
  getUserService,
  IWhere,
  UserService
} from '../setup';

let userService: UserService;

before(async () => {
  userService = getUserService();
});

describe('UserController', () => {
  it('GET: count', async () => {
    await userService.create({
      first_name: 'Ed',
      last_name: 'Kelly',
      email: 'ed@kelly.com',
      password: 'eddy123'
    });

    const { token } = await userService.signInUser({
      email: 'ed@kelly.com',
      password: 'eddy123'
    });

    const res = await server
      .get(`${BASE_URL}/users/count`)
      .set('authorization', `Bearer ${token}`);

    expect(res.status).to.equal(200);
    expect(res.body.total_records).to.be.a('number');
    expect(res.body.total_records).to.be.greaterThan(50);
  });

  it('GET: count - forbidden', async () => {
    const token = 'abc123';

    const res = await server
      .get(`${BASE_URL}/users/count`)
      .set('authorization', `Bearer ${token}`);

    expect(res.status).to.equal(403);
  });

  it('GET: find', (done) => {
    server
      .get(`${BASE_URL}/users`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.users).to.be.instanceOf(Array);

        expect(res.body).to.have.property('totalItems');
        expect(res.body).to.not.have.property('totalPages');

        res.body.users.forEach((m: User) => {
          expect(m).to.have.property('email');
          expect(m).to.have.property('first_name');
        });
        done();
      });
  });

  it('GET: find + filtering', (done) => {
    const data: IWhere = {
      dataRequestOptions: {
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
      }
    };
    server
      .get(`${BASE_URL}/users`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.users).to.be.instanceOf(Array);

        expect(res.body).to.have.property('totalItems');

        res.body.users.forEach((m: User) => {
          expect(m).to.have.property('user_id');
          expect(m).to.have.property('email');
          expect(m).to.have.property('password');

          expect(m.is_admin).to.eq(true);
          expect(m.email).to.satisfy((x: string) => x.endsWith('m'));

          const createdAt = new Date(m.created_at);
          expect(createdAt).to.be.greaterThan(new Date('2018-02-15'));
        });
        done();
      });
  });

  it('GET: find + filtering + sorting', (done) => {
    const data: IWhere = {
      dataRequestOptions: {
        where: [
          {
            column: 'created_at',
            operation: 'gt',
            filterValue: '2018-02-15'
          }
        ],
        sort: {
          column: 'email',
          direction: 'desc'
        }
      }
    };
    server
      .get(`${BASE_URL}/users`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.users).to.be.instanceOf(Array);

        expect(res.body).to.have.property('totalItems');

        const emailsResponse = res.body.users.map((x: User) => x.email);
        const emailsDesc = res.body.users.map((x: User) => x.email);
        emailsDesc.sort().reverse();
        expect(emailsResponse).to.deep.equal(emailsDesc);

        res.body.users.forEach((m: User) => {
          expect(m).to.have.property('user_id');
          expect(m).to.have.property('email');
          expect(m).to.have.property('password');

          const createdAt = new Date(m.created_at);
          expect(createdAt).to.be.greaterThan(new Date('2018-02-15'));
        });
        done();
      });
  });

  it('GET: find + filtering + sorting + pagination', (done) => {
    const data: IWhere = {
      dataRequestOptions: {
        where: [
          {
            column: 'created_at',
            operation: 'gt',
            filterValue: '2010-01-01'
          }
        ],
        sort: {
          column: 'email',
          direction: 'desc'
        },
        pagination: {
          page: 2,
          limit: 10
        }
      }
    };
    server
      .get(`${BASE_URL}/users`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.users).to.be.instanceOf(Array);
        expect(res.body.users).to.have.length(10);

        expect(res.body).to.have.property('totalItems');
        expect(res.body).to.have.property('totalPages');
        expect(res.body).to.have.property('page');

        if (
          data.dataRequestOptions.pagination &&
          data.dataRequestOptions.pagination.limit
        ) {
          const totalPages = Math.ceil(
            res.body.totalItems / data.dataRequestOptions.pagination?.limit
          );
          expect(res.body.totalPages).to.be.eq(totalPages);
        }

        expect(res.body.page).to.be.eq(
          data.dataRequestOptions.pagination?.page
        );

        const emailsResponse = res.body.users.map((x: User) => x.email);
        const emailsDesc = res.body.users.map((x: User) => x.email);
        emailsDesc.sort().reverse();
        expect(emailsResponse).to.deep.equal(emailsDesc);

        res.body.users.forEach((m: User) => {
          expect(m).to.have.property('user_id');
          expect(m).to.have.property('email');
          expect(m).to.have.property('password');
        });
        done();
      });
  });

  it('GET: find + pagination', (done) => {
    const data: IWhere = {
      dataRequestOptions: {
        pagination: {
          page: 3,
          limit: 10
        }
      }
    };
    server
      .get(`${BASE_URL}/users`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.users).to.be.instanceOf(Array);
        expect(res.body.users).to.have.length(10);

        expect(res.body).to.have.property('totalItems');
        expect(res.body).to.have.property('totalPages');
        expect(res.body).to.have.property('page');

        if (
          data.dataRequestOptions.pagination &&
          data.dataRequestOptions.pagination.limit
        ) {
          const totalPages = Math.ceil(
            res.body.totalItems / data.dataRequestOptions.pagination?.limit
          );
          expect(res.body.totalPages).to.be.eq(totalPages);
        }

        expect(res.body.page).to.be.eq(
          data.dataRequestOptions.pagination?.page
        );

        res.body.users.forEach((m: User) => {
          expect(m).to.have.property('email');
          expect(m).to.have.property('password');
        });
        done();
      });
  });

  it('GET: findById', (done) => {
    server
      .get(`${BASE_URL}/users/8032f84b-958a-4eef-8112-1936b99fe291`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.user).to.be.instanceOf(Object);
        expect(res.body.user).to.have.property('user_id');
        done();
      });
  });

  it('GET: findUsersOrdesDetails', (done) => {
    server
      .get(
        `${BASE_URL}/users/7c0ed405-31ae-4642-99c4-1b0649410790/orders-items`
      )
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('user_orders_items');
        expect(res.body.user_orders_items[0]).to.have.property('items');
        expect(res.body.user_orders_items).to.be.instanceOf(Array);

        res.body.user_orders_items.forEach((x: any) => {
          const totalPrice = x.items.reduce(
            (acc: number, v: any) => acc + v.quantity * +v.unit_price,
            0
          );
          expect(totalPrice.toFixed(2)).to.be.eq(x.total_price);
        });
        done();
      });
  });

  it('POST: create', (done) => {
    const data = {
      email: 'john@email.com',
      first_name: 'John',
      last_name: 'Doe',
      password: 'johndoe123',
      is_admin: false
    };
    server
      .post(`${BASE_URL}/users`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);

        const { user } = res.body;

        expect(user).to.be.instanceOf(Object);
        expect(user).to.have.property('user_id');
        expect(user).to.have.property('email', data.email);
        expect(user).to.have.property('password', hashPassword(data.password));
        done();
      });
  });

  it('PATCH: updateById', (done) => {
    const data = {
      email: 'updated@user.com',
      first_name: 'Updated First Name',
      last_name: 'Updated Last Name',
      password: 'updatedpa$$',
      is_admin: false
    };
    server
      .patch(`${BASE_URL}/users/c7de92c1-15ae-4341-b390-03cfb76d38a7`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.user).to.be.instanceOf(Object);
        expect(res.body.user).to.have.property('user_id');
        expect(res.body.user).to.have.property('email', data.email);
        expect(res.body.user).to.have.property(
          'password',
          hashPassword(data.password)
        );
        done();
      });
  });

  it('DELETE: deleteById', (done) => {
    const userId = 'c7de92c1-15ae-4341-b390-03cfb76d38a7';
    server
      .delete(`${BASE_URL}/users/${userId}`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.deleted).to.be.a('number');
        expect(res.body.deleted).to.be.eq(1);
        done();
      });
  });

  it('POST: login', (done) => {
    const user = {
      first_name: 'Alex',
      last_name: 'Whiteside',
      email: 'alex@whiteside.com',
      password: 'alex123'
    };

    userService
      .create({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password
      })
      .then(() => {
        const data = {
          email: 'alex@whiteside.com',
          password: 'alex123'
        };
        server
          .post(`${BASE_URL}/users/login`)
          .send(data)
          .expect(200)
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('token');
            expect(res.body.token).length.greaterThan(100);
            done();
          });
      });
  });
});
