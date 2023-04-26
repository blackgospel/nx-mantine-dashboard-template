import { GlobalTabs } from '@omnidash/components'
import { DashboardLayout } from '@omnidash/layouts'
import { Page } from '@omnidash/ui'
import { useSession } from 'next-auth/react'
import { ReactNode } from 'react'

export default function DashboardMatchFinder() {
  const { data: session } = useSession()

  return (
    <Page title="General: Match Finder">
      <GlobalTabs></GlobalTabs>
    </Page>
  )
}

DashboardMatchFinder.getLayout = (page: ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
)
