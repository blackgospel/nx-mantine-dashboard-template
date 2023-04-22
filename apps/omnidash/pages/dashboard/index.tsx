import { PATH_AFTER_LOGIN, PATH_DASHBOARD } from '@omnidash/routes'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function DashboardIndex() {
  const { pathname, replace, prefetch } = useRouter()

  useEffect(() => {
    if (pathname === PATH_DASHBOARD.root) {
      replace(PATH_AFTER_LOGIN)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    prefetch(PATH_AFTER_LOGIN)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return false
}
