import { Box, useMantineTheme } from '@mantine/core'
import { MOBILE_BREAKPOINT } from '@omnidash/config'
import { DEFAULT_TAB, useStore } from '@omnidash/store'
import { GlobalTab } from '../global-tab'

export const TabList = () => {
  const { tabs } = useStore.use.globalTabs()
  const theme = useMantineTheme()

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
            pinned={pinned}
          />
        )
      })}
    </Box>
  )
}
