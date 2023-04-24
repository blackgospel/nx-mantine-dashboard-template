import { Box, ScrollArea, Tabs, Title } from '@mantine/core'
import { useStore } from '@omnidash/store'

export const TabContent = () => {
  const { tabs } = useStore.use.globalTabs()

  return (
    <Box sx={{ flex: 1, overflow: 'hidden' }}>
      <ScrollArea>
        {tabs.map(({ id, label }) => {
          return (
            <Tabs.Panel key={id} value={id}>
              <Box>
                <Title>{label}</Title>
              </Box>
            </Tabs.Panel>
          )
        })}
      </ScrollArea>
    </Box>
  )
}
