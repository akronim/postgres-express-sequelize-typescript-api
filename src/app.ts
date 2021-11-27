import logger from 'morgan';
import express, { Application, Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';
import createError from 'http-errors';
import dotenv from 'dotenv';
import { homeRouter, userRouter } from './routes';
import corsOptions from './utils/corsOptions';

dotenv.config();

let baseUrl = '';
if (!process.env.BASE_URL) {
  process.exit(1);
} else {
  baseUrl = process.env.BASE_URL;
}

const app: Application = express();

if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(baseUrl, [homeRouter, userRouter]);

// catch 404 and forward to error handler
// eslint-disable-next-line no-unused-vars
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404, '404'));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err: Error, req: Request, res: Response) => {
  res.status(400).json({ error: err.message });
});

export default app;
