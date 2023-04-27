import { Box, Tabs } from '@mantine/core'
import { useStore } from '@omnidash/store'
import { SCROLL_SIZE_KEYS, useScrollSizeUpsert } from '@omnidash/theme'
import { BurgerTab } from './burger-tab'
import { IGlobalTabsProps } from './global-tabs.types'
import { HomeTab } from './home-tab'
import { SearchTabs } from './search-tabs'
import { TabContent } from './tab-content'
import { TabList } from './tab-list'

export const GlobalTabs: React.FC<IGlobalTabsProps> = ({ children }) => {
  const {
    current,
    actions: { navigateGlobalTab },
  } = useStore.use.globalTabs()

  const item = useScrollSizeUpsert(SCROLL_SIZE_KEYS.DASHBOARD.TAB.LIST_ROOT)

  return (
    <Tabs
      value={current}
      onTabChange={(item: string) => navigateGlobalTab(item)}
      sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      styles={{
        tabLabel: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        },
      }}
      unstyled
    >
      <Box
        ref={item.ref}
        sx={theme => ({
          position: 'relative',
          display: 'flex',
          height: 42,
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,

          '&:after': {
            position: 'absolute',
            content: '""',
            width: '100%',
            bottom: 0,
            left: 0,
            borderBottom: `1px solid ${
              theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
            }`,
            zIndex: 4,
          },
        })}
      >
        <BurgerTab />

        <HomeTab />

        <TabList />

        <SearchTabs />
      </Box>

      <TabContent>{children}</TabContent>
    </Tabs>
  )
}
