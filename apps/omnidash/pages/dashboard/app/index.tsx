import { GlobalTabs } from '@omnidash/components'
import { DashboardLayout } from '@omnidash/layouts'
import { ReactNode } from 'react'

export default function DashboardApp() {
  return <GlobalTabs></GlobalTabs>
}

DashboardApp.getLayout = (page: ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
)
