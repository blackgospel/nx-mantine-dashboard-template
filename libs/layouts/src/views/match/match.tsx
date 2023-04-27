import { Box, Text, Title } from '@mantine/core'
import { selectCurrentTab, selectMatchByID, useStore } from '@omnidash/store'

export const LayoutViewMatch = () => {
  const currentTab = useStore(selectCurrentTab)
  const match = useStore(selectMatchByID(currentTab?.state.resource?.id))

  console.log({ match })

  return (
    <Box>
      <Title>Match View</Title>
      <Text>
        {match?.homeTeam.name} vs {match?.awayTeam.name}
      </Text>
    </Box>
  )
}
