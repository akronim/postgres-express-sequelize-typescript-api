// import { Model, DataTypes, Sequelize } from 'sequelize';
// import { IUser } from '../types';

// module.exports = (sequelize: Sequelize): any => {
//   class User extends Model<IUser> implements IUser {
//     user_id!: string;

//     email!: string;

//     first_name?: string | undefined;

//     last_name?: string | undefined;

//     password!: string;

//     is_admin?: boolean | undefined;

//     static associate(models: any) {
//       User.hasMany(models.Order, {
//         foreignKey: 'user_id',
//         as: 'orders'
//       });
//     }
//   }

//   User.init(
//     {
//       user_id: {
//         allowNull: false,
//         primaryKey: true,
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: {
//           name: 'uniqeEmail',
//           msg: 'Email address already in use!'
//         },
//         validate: {
//           isEmail: { msg: 'Must be a valid email address' }
//         }
//       },
//       first_name: DataTypes.STRING,
//       last_name: DataTypes.STRING,
//       password: { type: DataTypes.STRING, allowNull: false },
//       is_admin: DataTypes.BOOLEAN
//     },
//     {
//       sequelize,
//       underscored: true,
//       timestamps: true,
//       createdAt: 'created_at',
//       updatedAt: 'updated_at',
//       tableName: 'users',
//       modelName: 'User'
//     }
//   );

//   return User;
// };
