import { Request, Response } from 'express';
import { userService } from '../dependency';

const countUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const count = await userService.count(req.body.dataRequestOptions);
    res.status(200).json(count);
  } catch (err) {
    res.status(200).json({ ERROR: err.stack });
  }
};

const findUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await userService.find(req.body.dataRequestOptions);
    res.status(200).json(response);
  } catch (err) {
    res.status(200).json({ ERROR: err.stack });
  }
};

const findUsersOrdesDetails = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await userService.findUsersOrdesDetails(req.params.userId);
    res.status(200).json(result);
  } catch (err) {
    res.status(200).json({ ERROR: err.stack });
  }
};

const findUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userService.findById(req.params.userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(200).json({ ERROR: err.stack });
  }
};

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userService.create(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(200).json({ ERROR: err.stack });
  }
};

const updateUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userService.updateById(
      req.params.userId,
      'user_id',
      req.body
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(200).json({ ERROR: err.stack });
  }
};

const deleteUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedRows = await userService.deleteById(
      req.params.userId,
      'user_id'
    );
    res.status(200).json(deletedRows);
  } catch (err) {
    res.status(200).json({ ERROR: err.stack });
  }
};

const signInUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = await userService.signInUser(req.body);
    res.status(200).json(token);
  } catch (err) {
    res.status(200).json({ ERROR: err.stack });
  }
};

// POST /resources create
// GET /resources/count count where
// GET /resources find filter
// GET /resources/{id} findById
// PATCH /resources updateAll where
// PATCH /resources/{id} updateById
// PUT /resources/{id} replaceById
// DELETE /resources/{id} deleteById

const userController = {
  countUsers,
  findUsers,
  findUsersOrdesDetails,
  findUserById,
  createUser,
  updateUserById,
  deleteUserById,
  signInUser
};

export default userController;
