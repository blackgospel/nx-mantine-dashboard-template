import { ILoginSchema, IRegisterSchema } from '@omnidash/schema'
import { axiosInstance } from '../instance'

const ENDPOINT_ROOT = ''

const ENDPOINTS = {
  LOGIN: `${ENDPOINT_ROOT}/login`,
  REGISTER: `${ENDPOINT_ROOT}/register`,
}

export const login = ({ email, password }: ILoginSchema) =>
  axiosInstance.post(ENDPOINTS.LOGIN, {
    email,
    password,
  })

export const register = ({ name, email, password }: IRegisterSchema) =>
  axiosInstance.post(ENDPOINTS.REGISTER, {
    name,
    email,
    password,
  })
