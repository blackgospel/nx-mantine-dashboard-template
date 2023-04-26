import { Box, Text, useMantineTheme } from '@mantine/core'
import { MOBILE_BREAKPOINT } from '@omnidash/config'
import { DEFAULT_TAB, useStore } from '@omnidash/store'
import { GlobalTab } from '../global-tab'

export const TabList = () => {
  const {
    tabs,
    actions: { deleteGlobalTab },
  } = useStore.use.globalTabs()
  const theme = useMantineTheme()

  const handleTabDelete = (id: string) => () => {
    deleteGlobalTab(id)
  }

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
        overflow: 'hidden',
        width: '100%',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        overflowX: 'auto',

        '&::-webkit-scrollbar': {
          display: 'none',
        },

        [theme.fn.largerThan(MOBILE_BREAKPOINT)]: {
          overflowX: 'hidden',
        },
      }}
    >
      {tabs.map(({ id, label, state: { pinned } }, index) => {
        if (id === DEFAULT_TAB.ID) {
          return null
        }

        return (
          <GlobalTab
            key={id}
            id={id}
            value={id}
            index={index}
            label={label}
            onClose={handleTabDelete}
            pinned={pinned}
          >
            <Text size="sm" lineClamp={1} align="left">
              {label}
            </Text>
          </GlobalTab>
        )
      })}
    </Box>
  )
}
