import { LoadingOverlay } from '@mantine/core'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { PATH_AUTH } from '../../paths'
import { IAuthGuardProps } from './auth.types'

export const AuthGuard = ({ children }: IAuthGuardProps) => {
  const { pathname, push } = useRouter()
  const { data: session, status } = useSession()

  useEffect(() => {
    if (!session) {
      push(
        { pathname: PATH_AUTH.root, query: { from: pathname } },
        PATH_AUTH.root
      )
    }
  }, [session])

  if (status === 'loading') {
    return <LoadingOverlay visible={true} />
  }

  if (status === 'unauthenticated') {
    return null
  }

  return <> {children} </>
}
