import { Request, Response, NextFunction } from 'express';
import Users from '../user/userModal';
import { generateAccessToken } from '../../utils/jwt';

export async function register(req: Request, res: Response, next: NextFunction) {
  console.log(req.body);

  const { email, password } = req.body;

  Users.findOne({ email })
    .then((user) => {
      if (user) {
        return res.status(401).json({ error: 'User with email already found' });
      } else {
        const newUser = new Users({
          email,
          password
        });
        newUser
          .save()
          .then((savedUser) => {
            return res.status(200).json({
              token: generateAccessToken({ password, email }),
              user: savedUser
            });
          })
          .catch((error) => next(error));
      }
    })
    .catch((error) => next(error));
}
