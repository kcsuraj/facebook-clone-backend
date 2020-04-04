import { Document } from 'mongoose';

export interface IUserDocument extends Document {
  email: string;
  //   firstName: string;
  password: string;
  //   lastName: string;
  //   userName: string;
}
