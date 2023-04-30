import { Box } from '@mantine/core'
import { MatrixBody } from './body'
import { MatrixHeader } from './header'
import { MatchMatrixContextProvider } from './match-matrix.context'
import { useMatchMatrix } from './match-matrix.hooks'
import { IMatchMatrixProps } from './match-matrix.types'
import {
  MATRIX_ATTRIBUTES,
  MATRIX_CELL_ATTRIBUTE_WIDTH,
  MATRIX_CELL_WIDTH,
  MATRIX_HEADER_COUNT,
} from './matrix-matrix.constants'
import { MatrixSubHeader } from './sub-header'

export const MatchMatrix: React.FC<IMatchMatrixProps> = () => {
  const matchMatrixProps = useMatchMatrix()
  const { gamesCount } = matchMatrixProps

  return (
    <MatchMatrixContextProvider value={matchMatrixProps}>
      <Box
        sx={{
          display: 'inline-grid',
          gridTemplateColumns: `${[...Array(gamesCount)]
            .map(() => `${MATRIX_CELL_WIDTH}px`)
            .join(' ')} ${MATRIX_CELL_ATTRIBUTE_WIDTH}px ${[
            ...Array(gamesCount),
          ]
            .map(() => `${MATRIX_CELL_WIDTH}px`)
            .join(' ')}`,
          gridTemplateRows: `repeat(${
            Object.keys(MATRIX_ATTRIBUTES).length + MATRIX_HEADER_COUNT
          }, ${MATRIX_CELL_WIDTH}px)`,
        }}
      >
        <MatrixHeader />

        <MatrixSubHeader />

        <MatrixBody />
      </Box>
    </MatchMatrixContextProvider>
  )
}
