import express from 'express';
import indexPage from '../controllers/home.controller';

const homeRouter = express.Router();

homeRouter.get('/', indexPage);

export default homeRouter;
