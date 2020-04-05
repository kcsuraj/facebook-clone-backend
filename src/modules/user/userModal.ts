import { Document, Schema, Model, model } from 'mongoose';
import { IUserDocument } from '../user/user';

export const UsersSchema: Schema = new Schema({
  email: {
    required: true,
    type: String,
    unique: true
  },
  // firstName: {
  //   required: true,
  //   type: String
  // },
  password: {
    required: true,
    type: String,
    unique: true
  }
  // lastName: {
  //   required: true,
  //   type: String
  // },
  // userName: {
  //   required: true,
  //   type: String
  // }
});

const Users = model<IUserDocument>('users', UsersSchema);

export default Users;
