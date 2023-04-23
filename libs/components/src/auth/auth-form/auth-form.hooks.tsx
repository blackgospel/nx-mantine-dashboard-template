/* eslint-disable @typescript-eslint/ban-ts-comment */
import { hasLength, isEmail, useForm } from '@mantine/form'
import { useToggle } from '@mantine/hooks'
import { register } from '@omnidash/api'
import { to } from '@omnidash/config'
import { useLoading } from '@omnidash/hooks'
import { PATH_AFTER_LOGIN } from '@omnidash/routes'
import { IRegisterSchema } from '@omnidash/schema'
import { AxiosError } from 'axios'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import { errorNotification, successNotification } from '../../notifications'
import { AUTH_FORM_MAP } from './auth-form.constants'

export const useAuthForm = () => {
  const router = useRouter()
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
        signIn('credentials', {
          ...values,
          redirect: false,
        }).then(callback => {
          toggleLoading()
          if (callback?.ok) {
            successNotification({
              title: `Successful Login`,
              message: `Welcome back`,
            })

            setTimeout(() => {
              router.push(PATH_AFTER_LOGIN)
            }, 1000)
          }

          if (callback?.error) {
            errorNotification({
              title: `Network Error`,
              message: `Error occurred: ${callback?.error}`,
            })
          }
        })

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
