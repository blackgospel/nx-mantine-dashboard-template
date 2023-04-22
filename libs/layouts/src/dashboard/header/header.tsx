import {
  Box,
  Burger,
  Header,
  MediaQuery,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { useStore } from '@omnidash/store'
import { IDashboardHeaderProps } from './header.types'

export const DashboardHeader: React.FC<IDashboardHeaderProps> = () => {
  const theme = useMantineTheme()
  const {
    opened,
    actions: { toggleNavbar },
  } = useStore.use.navbar()

  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={toggleNavbar}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Text>Application header</Text>
      </Box>
    </Header>
  )
}
