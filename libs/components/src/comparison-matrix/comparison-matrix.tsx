import { Box } from '@mantine/core'
import { selectCurrentTab, selectMatchByID, useStore } from '@omnidash/store'
import { useState } from 'react'
import { IMatrixBody } from './body'
import { STATISTICS_ATTRIBUTES } from './comparison-matrix.constants'
import { ComparisonMatrixProvider } from './comparison-matrix.context'
import { IComparisonMatrixProps } from './comparison-matrix.types'
import { getOppositionTeamRecentGameData } from './comparison-matrix.utils'
import { MatrixHeader } from './header'
import { IMatrixSubHeader } from './sub-header'

export const ComparisonMatrix: React.FC<IComparisonMatrixProps> = () => {
  const [numOfGames, setNumOfGames] = useState(1)
  const currentTab = useStore(selectCurrentTab)
  const match = useStore(selectMatchByID(currentTab?.state.resource?.id))

  if (!match) {
    return null
  }

  console.log({ match })

  return (
    <ComparisonMatrixProvider
      value={{
        match,
        numOfGames,
        handleGetOppositionTeam: getOppositionTeamRecentGameData,
      }}
    >
      <Box
        sx={theme => ({
          display: 'inline-grid',
          gridTemplateColumns: `${[...Array(numOfGames)]
            .map(() => '55px')
            .join(' ')} 250px ${[...Array(numOfGames)]
            .map(() => '55px')
            .join(' ')}`,
          gridTemplateRows: `repeat(${STATISTICS_ATTRIBUTES.length + 2}, 55px)`,
        })}
      >
        <MatrixHeader />

        <IMatrixSubHeader />

        <IMatrixBody />
      </Box>
    </ComparisonMatrixProvider>
  )
}
