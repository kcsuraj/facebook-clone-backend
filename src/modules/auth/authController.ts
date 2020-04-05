import { Request, Response, NextFunction } from 'express';
import Users from '../user/userModal';
import { generateAccessToken } from '../../utils/jwt';

export function register(req: Request, res: Response, next: NextFunction) {
  console.log(req.body);

  const { email, password } = req.body;

  console.log('in register');

  Users.findOne({ email }, (error, existingUser) => {
    if (error) {
      console.log('error');
      return next(error);
    }

    if (existingUser) {
      console.log('USER already exists');
    }

    const user = new Users({
      email,
      password
    });

    user.save((err) => {
      if (err) return next(err);
      console.log('successfully saved');
    });
  });
}
