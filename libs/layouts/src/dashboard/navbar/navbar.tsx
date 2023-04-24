import { Navbar, ScrollArea, Stack } from '@mantine/core'
import { useStore } from '@omnidash/store'
import { Logo } from '@omnidash/ui'
import { NavAccount } from './nav-account'
import { NavLinks } from './nav-links'
import { IDashboardNavbarProps } from './navbar.types'

export const DashboardNavbar: React.FC<IDashboardNavbarProps> = () => {
  const { opened } = useStore.use.navbar()

  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 265 }}>
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
