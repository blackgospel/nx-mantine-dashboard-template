import { Card, Stack } from '@mantine/core'
import { selectCurrentTab, selectMatchByID, useStore } from '@omnidash/store'
import { Page } from '@omnidash/ui'
import { MatchMatrix } from '../../match-matrix/match-matrix'

export const LayoutViewMatch = () => {
  const currentTab = useStore(selectCurrentTab)
  const match = useStore(selectMatchByID(currentTab?.state.resource?.id ?? ''))

  if (!match) {
    return null
  }

  return (
    <Page
      title={`${match?.homeTeam.name} vs ${match?.awayTeam.name}`}
      dashboard={{
        breadcrumb: [
          { title: `${match?.homeTeam.name} vs ${match?.awayTeam.name}` },
        ],
      }}
    >
      <Stack sx={{ display: 'inline-flex' }}>
        <Card withBorder>
          <Card.Section>
            <MatchMatrix />
          </Card.Section>
        </Card>
      </Stack>
    </Page>
  )
}
