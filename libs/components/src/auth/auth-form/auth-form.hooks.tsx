/* eslint-disable @typescript-eslint/ban-ts-comment */
import { hasLength, isEmail, useForm } from '@mantine/form'
import { useToggle } from '@mantine/hooks'
import { login, register } from '@omnidash/api'
import { to } from '@omnidash/config'
import { useLoading } from '@omnidash/hooks'
import { IRegisterSchema } from '@omnidash/schema'
import { AxiosError } from 'axios'
import { useCallback, useMemo } from 'react'
import { AUTH_FORM_MAP } from './auth-form.constants'

export const useAuthForm = () => {
  const [type, toggle] = useToggle(Object.values(AUTH_FORM_MAP))
  const [loading, { toggle: toggleLoading }] = useLoading()
  const isLogin = useMemo(() => type === AUTH_FORM_MAP.LOGIN, [type])

  const memoizedValidation = useMemo(
    () => ({
      ...(!isLogin && {
        name: hasLength(
          { min: 2, max: 50 },
          'Name must be 2-50 characters long'
        ),
      }),
      email: isEmail('Invalid email'),
      password: hasLength(
        { min: 2, max: 30 },
        'Name must be 2-10 characters long'
      ),
    }),
    [isLogin]
  )

  const form = useForm<IRegisterSchema>({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validate: memoizedValidation,
  })

  const handleSubmit = useCallback(
    async (values: IRegisterSchema) => {
      toggleLoading()

      if (isLogin) {
        const [error, response] = await to<unknown, AxiosError>(login(values))
        console.log({ login: { response, error } })
        toggleLoading()
        return
      }

      const [error, response] = await to<unknown, AxiosError>(register(values))
      console.log({ register: { response, error } })

      toggleLoading()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLogin]
  )

  return {
    type,
    toggle,
    form,
    handleSubmit,
    isLogin,
    loading,
  }
}
