import { role } from './auth.constant'
import { IUser, UserModel } from './auth.interface'
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String, required: true },
    role: { type: String, enum: role, default: 'customer' },
  },

  { timestamps: true, versionKey: false },
)

export const User = mongoose.model<IUser, UserModel>('User', UserSchema)
