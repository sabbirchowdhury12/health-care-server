/* eslint-disable @typescript-eslint/no-unused-expressions */
import { ErrorRequestHandler } from 'express'
import config from '../../config'
import { ZodError } from 'zod'
import { IGenericErrorMessage } from '../../interfaces/error'
import ApiError from '../../errors/apiError'
import handleCastError from '../../errors/handleCastError'
import handleValidationError from '../../errors/handleValidationError'
import handleZodError from '../../errors/handleZodError'

const globalErrorHandler: ErrorRequestHandler = (error, req, res) => {
  config.env === 'development'
    ? console.log('globalErrorHandler', error)
    : console.log('globalErrorHAndler', error)

  let statusCode = 500
  let message = 'somethig went wrong'
  let errorMessages: IGenericErrorMessage[] = []

  if (error?.name === 'validationError') {
    const simplifiedError = handleValidationError(error)
    statusCode = simplifiedError?.statusCode
    message = simplifiedError?.message
    errorMessages = simplifiedError?.errorMessages
  } else if (error.name === 'CastError') {
    const simplifiedError = handleCastError(error)
    statusCode = simplifiedError?.statusCode
    message = simplifiedError?.message
    errorMessages = simplifiedError?.errorMessages
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error)
    statusCode = simplifiedError?.statusCode
    message = simplifiedError?.message
    errorMessages = simplifiedError?.errorMessages
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,

    // if (err instanceof Error) {
    //   res.status(400).json({ error: err })
    // } else {
    //   res.status(500).json({ error: 'something went wrong' })
    // }
  })
}

export default globalErrorHandler
