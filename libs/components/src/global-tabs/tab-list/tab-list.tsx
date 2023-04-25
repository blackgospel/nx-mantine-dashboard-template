import { Box, Text, useMantineTheme } from '@mantine/core'
import { MOBILE_BREAKPOINT } from '@omnidash/config'
import { DEFAULT_TAB, useStore } from '@omnidash/store'
import { Iconify } from '@omnidash/ui'
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
          return (
            <GlobalTab
              key={id}
              id={id}
              value={id}
              index={index}
              label={label}
              onClose={handleTabDelete}
              pinned={pinned}
              sx={theme => {
                const colors = theme.fn.variant({ variant: 'default' })
                return {
                  width: '42px !important',
                  minWidth: '42px !important',
                  maxWidth: '42px !important',
                  color: colors.color,
                  cursor: 'pointer',
                  padding: 0,
                  borderRight: `1px solid ${colors.border}`,
                  ...theme.fn.hover({
                    backgroundColor: colors.background,
                  }),
                }
              }}
            >
              <Iconify
                sx={{ width: '100%', marginTop: -1 }}
                icon="solar:home-bold-duotone"
              />
            </GlobalTab>
          )
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
