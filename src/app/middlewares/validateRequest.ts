import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'

const validateRequest =
  (schema: z.ZodSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parseAsync({
        body: req.body,
        query: req.query,
        cookies: req.body,
        params: req.params,
      })
      return next()
    } catch (error) {
      next(error)
    }
  }

export default validateRequest
