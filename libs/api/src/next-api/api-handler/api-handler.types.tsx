export interface INextAPIErrorResponse {
  error: {
    message: string
    err?: any // Sent for unhandled errors reulting in 500
  }
  status?: number // Sent for unhandled errors reulting in 500
}
