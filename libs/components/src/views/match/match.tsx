import { Box, Card, Text, Title } from '@mantine/core'
import { selectCurrentTab, selectMatchByID, useStore } from '@omnidash/store'
import { ComparisonMatrix } from '../../comparison-matrix'

export const LayoutViewMatch = () => {
  const currentTab = useStore(selectCurrentTab)
  const match = useStore(selectMatchByID(currentTab?.state.resource?.id))

  return (
    <Box>
      <Box>
        <Title>Match View</Title>
        <Text>
          {match?.homeTeam.name} vs {match?.awayTeam.name}
        </Text>
      </Box>
      <Card>
        <ComparisonMatrix />
      </Card>
    </Box>
  )
}
