import { faker } from '@faker-js/faker'
import { Box, Navbar, ScrollArea, Stack, Text, Title } from '@mantine/core'
import { MOBILE_BREAKPOINT } from '@omnidash/config'
import { useStore } from '@omnidash/store'
import { SCROLL_SIZE_KEYS, useScrollSizeGetItem } from '@omnidash/theme'
import { CustomAvatar, Logo } from '@omnidash/ui'
import { useMemo } from 'react'
import { NavLinks } from './nav-links'
import { IDashboardNavbarProps } from './navbar.types'

export const TempNavbar: React.FC<IDashboardNavbarProps> = () => {
  const { opened } = useStore.use.navbar()
  const item = useScrollSizeGetItem(SCROLL_SIZE_KEYS.DASHBOARD.TAB.LIST_ROOT)
  const avatar = useMemo(() => faker.internet.avatar(), [])

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

            <Box sx={{ textDecoration: 'none', cursor: 'pointer' }}>
              <Box
                sx={theme => ({
                  display: 'flex',
                  alignItems: 'center',
                  paddingInline: 16,
                  paddingBlock: 10,
                  gap: 12,
                  borderRadius: 12,
                  color:
                    theme.colorScheme === 'dark'
                      ? theme.colors.gray[2]
                      : theme.colors.dark[5],
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[4]
                      : theme.colors.gray[2],
                })}
              >
                <CustomAvatar src={avatar} />

                <Box sx={{ minWidth: 0 }}>
                  <Title order={6}>John Doe</Title>

                  <Text size="xs">john@doe.com</Text>
                </Box>
              </Box>
            </Box>
          </Stack>

          <NavLinks />
        </Stack>
      </ScrollArea>
    </Navbar>
  )
}
