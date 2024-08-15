import { Request, Response } from 'express'

const register = async (req: Request, res: Response) => {
  res.send('hi')
}

export const AuthController = { register }
