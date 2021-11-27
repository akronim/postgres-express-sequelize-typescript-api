import supertest from 'supertest';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import fakerStatic from 'faker';
import sinon from 'sinon';
import app from '../app';
import * as envVars from '../settings';
import { getUserService, getUserRepository } from '../dependency';
import { hashPassword, comparePassword } from '../utils/auth';

import { IUserAttributes, IWhere, IDataRequestOptions } from '../types';
import UserService from '../services/user.service';
import { userRepository } from '../dependency';

chai.use(sinonChai);

export const { expect } = chai;
export { fakerStatic, sinon };
export { hashPassword, comparePassword };
export const server = supertest.agent(app);
export const { BASE_URL } = envVars;
export { getUserService, getUserRepository };
export {
  IUserAttributes,
  IWhere,
  IDataRequestOptions,
  UserService,
  userRepository
};
