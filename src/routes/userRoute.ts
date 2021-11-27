import express from 'express';
import userController from '../controllers/user.controller';
import authenticateJWT from '../middlewares/verifyAuth';

const userRouter = express.Router();

userRouter.get('/users/count', authenticateJWT, userController.countUsers);
userRouter.get('/users', userController.findUsers);
userRouter.get('/users/:userId', userController.findUserById);
userRouter.get(
  '/users/:userId/orders-items',
  userController.findUsersOrdesDetails
);
userRouter.post('/users', userController.createUser);
userRouter.patch('/users/:userId', userController.updateUserById);
userRouter.delete('/users/:userId', userController.deleteUserById);

userRouter.post('/users/login', userController.signInUser);

export default userRouter;
