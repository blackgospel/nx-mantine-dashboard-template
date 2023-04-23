import * as Yup from 'yup'

/**
 * Defines a schema for register form validation
 * @typedef {object} RegisterSchema
 * @property {string} name - The name field in the form
 * @property {string} email - The email field in the form
 * @property {string} password - The password field in the form
 */

export const REGISTER_SCHEMA = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Email must be a valid email address'),
  password: Yup.string().required('Password is required'),
})

export type IRegisterSchema = Yup.InferType<typeof REGISTER_SCHEMA>
