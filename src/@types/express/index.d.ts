import db from '../../models';

declare global {
  namespace Express {
    interface Request {
      currentUser: db.User;
    }
  }
}
