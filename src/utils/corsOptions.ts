import cors from 'cors';

const whitelist = ['http://localhost:3000'];

const corsOptions: cors.CorsOptions = {
  origin(origin: any, callback: any) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

export default corsOptions;

// curl -H "Origin: http://localhost:4000" --head http://localhost:5555/api/v1/users
