// import fs from 'fs';
// import path from 'path';
// import { Sequelize, DataTypes } from 'sequelize';
// import connectionString from '../config/config';
// import { DevelopmentOrTestOrProduction } from '../types';

// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config: DevelopmentOrTestOrProduction = connectionString[env];
// const db: { [key: string]: any } = {};

// let sequelize: Sequelize = new Sequelize({ dialect: 'postgres' });

// if (config.use_env_variable) {
//   const useEnvVariable = process.env[config.use_env_variable];
//   if (useEnvVariable) {
//     sequelize = new Sequelize(useEnvVariable, config);
//   }
// } else {
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }

// const files = fs
//   .readdirSync(__dirname)
//   .filter(
//     (file: string) =>
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       (file.slice(-3) === '.ts' || file.slice(-3) === '.js')
//   );

// files.forEach((file: string) => {
//   if (!['pool.ts', 'pool.js'].includes(file)) {
//     const filePath = path.join(__dirname, file);

//     const model = require(filePath)(sequelize, DataTypes);

//     db[model.name] = model;
//   }
// });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default db;
