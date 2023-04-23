import { LOGIN_SCHEMA, REGISTER_SCHEMA } from '@omnidash/schema'

export const AUTH_FORM_MAP = {
  LOGIN: 'login',
  REGISTER: 'register',
}

export const AUTH_FORM_SCHEMA_MAP = {
  [AUTH_FORM_MAP.LOGIN]: LOGIN_SCHEMA,
  [AUTH_FORM_MAP.REGISTER]: REGISTER_SCHEMA,
}
