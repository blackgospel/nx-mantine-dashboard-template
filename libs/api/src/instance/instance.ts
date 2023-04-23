import { HOST_API_ENDPOINT } from '@omnidash/config'
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: HOST_API_ENDPOINT,
})
