import { Navbar, Stack } from '@mantine/core'
import { useStore } from '@omnidash/store'
import { Logo } from '@omnidash/ui'
import { NavAccount } from './nav-account'
import { IDashboardNavbarProps } from './navbar.types'

export const DashboardNavbar: React.FC<IDashboardNavbarProps> = () => {
  const { opened } = useStore.use.navbar()

  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200 }}>
      <Stack>
        <Logo />

        <NavAccount />
      </Stack>
    </Navbar>
  )
}
