import createHttpError from 'http-errors'

import { Method } from 'axios'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { errorHandler } from '../error-handler'
import { INextAPIErrorResponse } from './api-handler.types'

type ApiMethodHandlers = {
  [key in Uppercase<Method>]?: NextApiHandler
}

export function apiHandler(handler: ApiMethodHandlers) {
  return async (
    req: NextApiRequest,
    res: NextApiResponse<INextAPIErrorResponse>
  ) => {
    try {
      const method = req.method
        ? (req.method.toUpperCase() as keyof ApiMethodHandlers)
        : undefined

      // check if handler supports current HTTP method
      if (!method)
        throw new createHttpError.MethodNotAllowed(
          `No method specified on path ${req.url}!`
        )

      const methodHandler = handler[method]
      if (!methodHandler)
        throw new createHttpError.MethodNotAllowed(
          `Method ${req.method} Not Allowed on path ${req.url}!`
        )

      // call method handler
      await methodHandler(req, res)
    } catch (err) {
      // global error handler
      errorHandler(err, res)
    }
  }
}
