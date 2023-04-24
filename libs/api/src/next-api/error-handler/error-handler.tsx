import createHttpError from 'http-errors'
import { NextApiResponse } from 'next'
import { ValidationError } from 'yup'
import { INextAPIErrorResponse } from '../api-handler'

export const errorHandler = (
  err: unknown,
  res: NextApiResponse<INextAPIErrorResponse>
) => {
  // Errors with statusCode >= 500 are should not be exposed
  if (createHttpError.isHttpError(err) && err.expose) {
    // Handle all errors thrown by http-errors module
    return res.status(err.statusCode).json({ error: { message: err.message } })
  } else if (err instanceof ValidationError) {
    // Handle yup validation errors
    return res.status(400).json({ error: { message: err.errors.join(', ') } })
  } else {
    // default to 500 server error
    console.error(err)
    return res.status(500).json({
      error: { message: 'Internal Server Error', err: err },
      status: createHttpError.isHttpError(err) ? err.statusCode : 500,
    })
  }
}
