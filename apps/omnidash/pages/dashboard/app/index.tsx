import {
  Box,
  Divider,
  Group,
  ScrollArea,
  TextInput,
  useMantineTheme,
} from '@mantine/core'
import { GlobalTabs } from '@omnidash/components'
import { DashboardLayout } from '@omnidash/layouts'
import { useStore } from '@omnidash/store'
import {
  SCROLL_SIZE_KEYS,
  useScrollSizeGetItem,
  useScrollSizeUpsert,
} from '@omnidash/theme'
import { MenuAccordion, Page } from '@omnidash/ui'
import { ReactNode } from 'react'

export default function DashboardApp() {
  const theme = useMantineTheme()
  const {
    actions: { addGlobalTab },
  } = useStore.use.globalTabs()

  const contentRootItem = useScrollSizeGetItem(
    SCROLL_SIZE_KEYS.DASHBOARD.TAB.CONTENT_ROOT
  )
  const matchMenuListItem = useScrollSizeUpsert(
    SCROLL_SIZE_KEYS.DASHBOARD.PAGES.APP.MATCH_MENU_LIST
  )

  const handleNewTabClick = () => {
    addGlobalTab({
      label: 'hi',
    })
  }

  return (
    <Page title="General: App">
      <GlobalTabs>
        <Group>
          <Box
            sx={theme => ({
              display: 'flex',
              flexDirection: 'column',
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[7]
                  : theme.white,
              height: contentRootItem?.height,
              width: 265,
              borderRight: `1px solid ${
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[5]
                  : theme.colors.gray[2]
              }`,
            })}
          >
            <Box sx={{ padding: 14 }}>
              <TextInput placeholder="Search matches" radius={0} />
            </Box>

            <Divider sx={{ borderStyle: 'dashed' }} />

            <Box ref={matchMenuListItem.ref} sx={{ flex: 1 }}>
              <ScrollArea sx={{ height: matchMenuListItem.height }}>
                <MenuAccordion onClick={handleNewTabClick} />
              </ScrollArea>
            </Box>
          </Box>
        </Group>
      </GlobalTabs>
    </Page>
  )
}

DashboardApp.getLayout = (page: ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
)
