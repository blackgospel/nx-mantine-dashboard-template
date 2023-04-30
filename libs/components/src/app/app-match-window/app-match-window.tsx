import { Box, Divider, ScrollArea, TextInput } from '@mantine/core'
import { useTimeout } from '@mantine/hooks'
import { IMatchData } from '@omnidash/mocks'
import { useStore } from '@omnidash/store'
import {
  SCROLL_SIZE_KEYS,
  useScrollSizeGetItem,
  useScrollSizeUpsert,
} from '@omnidash/theme'
import { useState } from 'react'
import { IAppMatchWindowProps } from './app-match-window.types'
import { MatchCollapse } from './match-collapse'

export const AppMatchWindow: React.FC<IAppMatchWindowProps> = ({ data }) => {
  const {
    actions: { addGlobalTab },
  } = useStore.use.globalTabs()

  const [initialize, setInitialize] = useState(true)

  useTimeout(() => setInitialize(false), 100, { autoInvoke: true })

  const contentRootItem = useScrollSizeGetItem(
    SCROLL_SIZE_KEYS.DASHBOARD.TAB.CONTENT_ROOT
  )
  const matchMenuListItem = useScrollSizeUpsert(
    SCROLL_SIZE_KEYS.DASHBOARD.PAGES.APP.MATCH_MENU_LIST
  )

  const handleClick =
    (match: IMatchData) => (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation()
      addGlobalTab({
        label: `${match.homeTeam.name} vs ${match.awayTeam.name}`,
        state: {
          resource: {
            id: match.id,
            type: 'match',
          },
        },
      })
    }

  if (!data || initialize) return null

  return (
    <Box
      sx={theme => ({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
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

      <Box ref={matchMenuListItem.ref} sx={{ flex: 1, overflow: 'hidden' }}>
        <ScrollArea sx={{ height: matchMenuListItem.height }}>
          {Object.keys(data).map(item => {
            return (
              <MatchCollapse
                key={item}
                data={data}
                name={item}
                onClick={handleClick}
              />
            )
          })}
        </ScrollArea>
      </Box>
    </Box>
  )
}
