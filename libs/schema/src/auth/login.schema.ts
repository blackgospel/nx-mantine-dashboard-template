import * as Yup from 'yup'

/**
 * Login schema for Yup validation
 * @typedef {Object} LoginSchema
 * @property {string} email - User email (required)
 * @property {string} password - User password (required)
 */

export const LOGIN_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Email must be a valid email address'),
  password: Yup.string().required('Password is required'),
})

export type ILoginSchema = Yup.InferType<typeof LOGIN_SCHEMA>
