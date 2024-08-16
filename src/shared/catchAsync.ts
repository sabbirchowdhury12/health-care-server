import { NextFunction, Request, RequestHandler, Response } from 'express'

const catchAsync =
  (f: RequestHandler) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      f(req, res, next)
    } catch (error) {
      next(error)
    }
  }

export default catchAsync
