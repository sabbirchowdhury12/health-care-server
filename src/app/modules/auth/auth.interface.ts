import { Model } from 'mongoose'

export type IRole = 'customer' | 'admin' | 'super-admin'

export type IUser = {
  email: string
  password: string
  role: IRole
}

export type UserModel = Model<IUser>
