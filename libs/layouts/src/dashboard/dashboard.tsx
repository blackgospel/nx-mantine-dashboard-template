import { AppShell, useMantineTheme } from '@mantine/core'
import { AuthGuard } from '@omnidash/routes'
import { useState } from 'react'
import { IDashboardLayoutProps } from './dashboard.types'
import { DashboardHeader } from './header'
import { DashboardNavbar } from './navbar'

export const DashboardLayout: React.FC<IDashboardLayoutProps> = ({
  children,
}) => {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
  return (
    <AuthGuard>
      <AppShell
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        layout="alt"
        styles={{
          main: {
            background:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbar={<DashboardNavbar />}
        header={<DashboardHeader />}
      >
        {children}
      </AppShell>
    </AuthGuard>
  )
}
