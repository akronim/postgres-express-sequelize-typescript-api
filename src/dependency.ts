import UserRepository from './repositories/user.repository';
import UserService from './services/user.service';
import db from './models';

export const userRepository = new UserRepository(db.User);
export const userService = new UserService(userRepository);

export const getUserRepository = (): UserRepository =>
  new UserRepository(db.User);

export const getUserService = (): UserService =>
  new UserService(new UserRepository(db.User));
