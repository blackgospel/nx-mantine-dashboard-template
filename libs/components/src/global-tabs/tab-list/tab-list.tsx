import { Box, Text } from '@mantine/core'
import { useStore } from '@omnidash/store'
import { GlobalTab } from '../global-tab'

export const TabList = () => {
  const {
    tabs,
    actions: { deleteGlobalTab },
  } = useStore.use.globalTabs()

  const handleTabDelete =
    (id: string) => (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      console.log({ id })
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
      }}
    >
      {tabs.map(({ id, label, state: { pinned } }, index) => {
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
