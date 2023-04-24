import { Box, Tabs } from '@mantine/core'
import { useStore } from '@omnidash/store'
import { IGlobalTabsProps } from './global-tabs.types'
import { NewTab } from './new-tab'
import { SearchTabs } from './search-tabs'
import { TabContent } from './tab-content'
import { TabList } from './tab-list'

export const GlobalTabs: React.FC<IGlobalTabsProps> = () => {
  const {
    current,
    actions: { navigateGlobalTab },
  } = useStore.use.globalTabs()

  return (
    <Tabs
      value={current}
      keepMounted={false}
      onTabChange={(item: string) => navigateGlobalTab(item)}
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
        <NewTab />

        <TabList />

        <SearchTabs />
      </Box>

      <TabContent />
    </Tabs>
  )
}