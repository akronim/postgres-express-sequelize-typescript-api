import jwt, { VerifyErrors } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import { getUserService } from '../dependency';

dotenv.config();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const authenticateJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.sendStatus(401);
  }

  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  if (!process.env.TOKEN_SECRET) {
    return res.sendStatus(401);
  }

  jwt.verify(
    token,
    process.env.TOKEN_SECRET,
    async (err: VerifyErrors | null, decoded: any) => {
      if (err) return res.sendStatus(403);

      // TODO test
      const user = await getUserService().findById(decoded['user_id']);
      if (!user) {
        return {
          error: {
            status: 'fail',
            data: { message: 'Access Unauthorized' }
          }
        };
      }

      req.currentUser = decoded;

      next();
    }
  );
};

export default authenticateJWT;
