import { AppShell, useMantineTheme } from '@mantine/core'
import { AuthGuard } from '@omnidash/routes'
import { IDashboardLayoutProps } from './dashboard.types'
import { DashboardHeader } from './header'
import { DashboardMain } from './main/main'
import { DashboardNavbar } from './navbar'

export const DashboardLayout: React.FC<IDashboardLayoutProps> = ({
  children,
}) => {
  const theme = useMantineTheme()

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
            overflow: 'hidden',
            height: '100vh',
            paddingTop: 'calc(var(--mantine-header-height, 0px) + 0px)',
            paddingBottom: 'calc(var(--mantine-footer-height, 0px) + 0px)',
            paddingLeft: 'calc(var(--mantine-navbar-width, 0px) + 0px)',
            paddingRight: 'calc(var(--mantine-aside-width, 0px) + 0px)',
          },
        }}
        navbar={<DashboardNavbar />}
        header={<DashboardHeader />}
      >
        <DashboardMain>{children}</DashboardMain>
      </AppShell>
    </AuthGuard>
  )
}
