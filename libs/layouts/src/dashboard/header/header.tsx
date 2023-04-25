import {
  Box,
  Burger,
  Divider,
  Group,
  Header,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core'
import { MOBILE_BREAKPOINT } from '@omnidash/config'
import { useStore } from '@omnidash/store'
import { AccountPopover } from './account-popover'
import { IDashboardHeaderProps } from './header.types'
import { NotificationPopover } from './notification-popover'
import { SearchBar } from './search-bar'

export const DashboardHeader: React.FC<IDashboardHeaderProps> = () => {
  const theme = useMantineTheme()
  const {
    opened,
    actions: { toggleNavbar },
  } = useStore.use.navbar()

  return (
    <Header height={{ base: 60 }} p="md">
      <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan={MOBILE_BREAKPOINT} styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={toggleNavbar}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Group position="apart" sx={{ width: '100%' }}>
          <Box></Box>

          <Box>
            <Group>
              <SearchBar />

              <NotificationPopover />

              <Divider orientation="vertical" />

              <AccountPopover />
            </Group>
          </Box>
        </Group>
      </Box>
    </Header>
  )
}
