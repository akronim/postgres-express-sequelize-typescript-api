import { executeCtes } from '../db/queryFunctions';
// import db from '../src/models';

// async function truncate() {
//   const modelKeys = Object.keys(db.sequelize.models);

//   return Promise.all(
//     modelKeys.map(async (key) => db.sequelize.models[key].destroy({ where: {}, force: true }))
//   );
// }

before(async () => {
  if (process.env.NODE_ENV === 'test') {
    await executeCtes();
  }
});
