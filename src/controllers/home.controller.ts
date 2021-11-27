import { Request, Response } from 'express';

const indexPage = async (_req: Request, res: Response): Promise<void> => {
  res.status(200).json({ message: 'HOME' });
};

export default indexPage;
