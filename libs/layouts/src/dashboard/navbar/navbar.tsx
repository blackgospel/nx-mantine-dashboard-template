import { Navbar, ScrollArea, Stack } from '@mantine/core'
import { MOBILE_BREAKPOINT } from '@omnidash/config'
import { useStore } from '@omnidash/store'
import { SCROLL_SIZE_KEYS, useScrollSizeGetItem } from '@omnidash/theme'
import { Logo } from '@omnidash/ui'
import { NavAccount } from './nav-account'
import { NavLinks } from './nav-links'
import { IDashboardNavbarProps } from './navbar.types'

export const DashboardNavbar: React.FC<IDashboardNavbarProps> = () => {
  const { opened } = useStore.use.navbar()
  const item = useScrollSizeGetItem(SCROLL_SIZE_KEYS.DASHBOARD.TAB.LIST_ROOT)

  return (
    <Navbar
      p="md"
      hiddenBreakpoint={MOBILE_BREAKPOINT}
      hidden={!opened}
      width={{ [MOBILE_BREAKPOINT]: 265 }}
      styles={theme => ({
        root: {
          top: item?.height,

          [theme.fn.largerThan('lg')]: {
            top: 0,
          },
        },
      })}
    >
      <ScrollArea>
        <Stack spacing={32}>
          <Stack sx={{ paddingInline: 12 }}>
            <Logo />

            <NavAccount />
          </Stack>

          <NavLinks />
        </Stack>
      </ScrollArea>
    </Navbar>
  )
}
