import { Box, ScrollArea, Tabs } from '@mantine/core'
import { LayoutViewMatch } from '@omnidash/layouts'
import { useStore } from '@omnidash/store'
import { SCROLL_SIZE_KEYS, useScrollSizeUpsert } from '@omnidash/theme'
import { ITabContentProps } from './tab-content.types'

export const TabContent: React.FC<ITabContentProps> = ({ children }) => {
  const { tabs } = useStore.use.globalTabs()
  const item = useScrollSizeUpsert(SCROLL_SIZE_KEYS.DASHBOARD.TAB.CONTENT_ROOT)

  return (
    <Box ref={item.ref} sx={{ flex: 1, overflow: 'hidden' }}>
      <ScrollArea
        sx={{
          height: item.height,
        }}
      >
        {tabs.map(({ id, state }) => {
          if (state.resource?.type === 'match') {
            return (
              <Tabs.Panel key={id} value={id}>
                <LayoutViewMatch />
              </Tabs.Panel>
            )
          }

          return (
            <Tabs.Panel key={id} value={id}>
              {children}
            </Tabs.Panel>
          )
        })}
      </ScrollArea>
    </Box>
  )
}
