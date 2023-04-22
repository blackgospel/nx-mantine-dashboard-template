import { Box } from '@mantine/core'
import { DashboardLayout } from '@omnidash/layouts'
import { ReactNode } from 'react'

export default function DashboardApp() {
  return <Box>App</Box>
}

DashboardApp.getLayout = (page: ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
)
