import { IRegisterSchema } from '@omnidash/schema'
import { AxiosResponse } from 'axios'
import { User } from 'next-auth'
import { axiosInstance } from '../instance'

const ENDPOINT_ROOT = ''

const ENDPOINTS = {
  REGISTER: `${ENDPOINT_ROOT}/register`,
  GET_CURRENT_USER: `${ENDPOINT_ROOT}/auth/get-current-user`,
}

export const register = ({ name, email, password }: IRegisterSchema) =>
  axiosInstance.post(ENDPOINTS.REGISTER, {
    name,
    email,
    password,
  })

export const getCurrentUser = () =>
  axiosInstance.get<never, AxiosResponse<never, User>>(
    ENDPOINTS.GET_CURRENT_USER
  )
