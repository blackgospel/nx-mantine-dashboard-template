import { LoadingOverlay } from '@mantine/core'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { PATH_DASHBOARD } from '../../paths'
import { IGuestGuardProps } from './guest.types'

export const GuestGuard = ({ children }: IGuestGuardProps) => {
  const { push } = useRouter()
  const { data: session, status } = useSession()

  useEffect(() => {
    if (session) {
      push(PATH_DASHBOARD.root)
    }
  }, [session])

  if (status === 'loading') {
    return <LoadingOverlay visible={true} />
  }

  if (status === 'authenticated') {
    return null
  }

  return <> {children} </>
}
