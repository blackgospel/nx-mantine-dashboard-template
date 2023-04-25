import { Box, ScrollArea, Tabs } from '@mantine/core'
import { useStore } from '@omnidash/store'
import { SCROLL_SIZE_KEYS, useScrollSizeUpsert } from '@omnidash/theme'
import { ITabContentProps } from './tab-content.types'

export const TabContent: React.FC<ITabContentProps> = ({ children }) => {
  const { tabs } = useStore.use.globalTabs()
  const item = useScrollSizeUpsert(SCROLL_SIZE_KEYS.DASHBOARD.TAB_CONTENT_ROOT)

  return (
    <Box
      ref={item.ref}
      sx={{ flex: 1, overflow: 'hidden', paddingBlock: 32, paddingInline: 16 }}
    >
      <ScrollArea
        sx={{
          height: item.height,
        }}
      >
        {tabs.map(({ id }) => {
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
