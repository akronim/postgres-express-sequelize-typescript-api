import { Model, DataTypes, Sequelize } from 'sequelize';
import { IUserAttributes } from '../types';

export class User extends Model<IUserAttributes> implements IUserAttributes {
  public user_id!: string;

  public email!: string;

  public first_name?: string | null;

  public last_name?: string | null;

  public password!: string;

  public is_admin?: boolean | null;

  public readonly created_at!: Date;

  public readonly updated_at!: Date;

  static associate(models: any): void {
    User.hasMany(models.Order, {
      foreignKey: 'user_id',
      as: 'orders'
    });
  }
}

export const UserFactory = (sequelize: Sequelize): typeof User => {
  User.init(
    {
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          name: 'uniqueEmail',
          msg: 'Email address already in use!'
        },
        validate: {
          isEmail: { msg: 'Must be a valid email address' }
        }
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      password: { type: DataTypes.STRING, allowNull: false },
      is_admin: DataTypes.BOOLEAN
    },
    {
      sequelize: sequelize,
      underscored: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      tableName: 'users',
      modelName: 'User'
    }
  );

  return User;
};
