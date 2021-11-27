import BaseRepository from './base.repository';
import db from '../models';
import { ModelCtor } from 'sequelize/types';
import { User } from '../models/user';

class UserRepository extends BaseRepository<typeof db.User> {
  constructor(model: ModelCtor<User>) {
    if (!model) {
      throw new Error('No model provided to UserRepository!');
    }

    super(model);
  }

  async findById(id: string | number): Promise<User | null> {
    return User.findByPk(id);
  }
}

export default UserRepository;
