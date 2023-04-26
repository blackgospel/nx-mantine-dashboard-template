import { AppShell, useMantineTheme } from '@mantine/core'
import { MOBILE_BREAKPOINT } from '@omnidash/config'
import { useResponsive } from '@omnidash/hooks'
import { AuthGuard } from '@omnidash/routes'
import { IDashboardLayoutProps } from './dashboard.types'
import { DashboardMain } from './main/main'
import { DashboardNavbar } from './navbar'

export const DashboardLayout: React.FC<IDashboardLayoutProps> = ({
  children,
}) => {
  const theme = useMantineTheme()
  const isDesktop = useResponsive('up', MOBILE_BREAKPOINT)

  return (
    <AuthGuard>
      <AppShell
        navbarOffsetBreakpoint={MOBILE_BREAKPOINT}
        layout={isDesktop ? 'alt' : 'default'}
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
            paddingLeft:
              'calc(var(--mantine-navbar-width, 0px) + 0px) !important',
            paddingRight: 'calc(var(--mantine-aside-width, 0px) + 0px)',

            '& > *': {
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            },
          },
        }}
        navbar={<DashboardNavbar />}
      >
        <DashboardMain>{children}</DashboardMain>
      </AppShell>
    </AuthGuard>
  )
}
