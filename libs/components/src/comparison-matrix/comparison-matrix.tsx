import { Box } from '@mantine/core'
import { useState } from 'react'
import { IMatrixBody } from './body'
import { STATISTICS_ATTRIBUTES } from './comparison-matrix.constants'
import { ComparisonMatrixProvider } from './comparison-matrix.context'
import { IComparisonMatrixProps } from './comparison-matrix.types'
import { getOppositionTeamRecentGameData } from './comparison-matrix.utils'
import { IMatrixGoals } from './goals'
import { IMatrixHeader } from './header'
import { IMatrixSubHeader } from './sub-header'
import { TEMP_DATA } from './temp-data'

export const ComparisonMatrix: React.FC<IComparisonMatrixProps> = () => {
  console.log({ TEMP_DATA })
  const [numOfGames, setNumOfGames] = useState(10)

  return (
    <ComparisonMatrixProvider
      value={{
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
          gridTemplateRows: `repeat(${STATISTICS_ATTRIBUTES.length + 3}, 55px)`,
        })}
      >
        <IMatrixHeader />

        <IMatrixSubHeader />

        <IMatrixGoals />

        <IMatrixBody />
      </Box>
    </ComparisonMatrixProvider>
  )
}
