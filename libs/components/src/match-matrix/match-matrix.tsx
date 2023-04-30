import { Box } from '@mantine/core'
import { MatrixBody } from './body'
import { FiltersWindow } from './filters-window'
import { MatrixHeader } from './header'
import { MatchMatrixContextProvider } from './match-matrix.context'
import { FilterFormProvider } from './match-matrix.form'
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
  const { filtersForm, ...matchMatrixProps } = useMatchMatrix()

  return (
    <FilterFormProvider form={filtersForm}>
      <MatchMatrixContextProvider value={matchMatrixProps}>
        <Box
          sx={{
            display: 'inline-grid',
            gridTemplateColumns: `${[...Array(filtersForm.values.gamesCount)]
              .map(() => `${MATRIX_CELL_WIDTH}px`)
              .join(' ')} ${MATRIX_CELL_ATTRIBUTE_WIDTH}px ${[
              ...Array(filtersForm.values.gamesCount),
            ]
              .map(() => `${MATRIX_CELL_WIDTH}px`)
              .join(' ')}`,
            gridTemplateRows: `repeat(${
              Object.values(MATRIX_ATTRIBUTES).filter(item =>
                filtersForm.values.attributes.includes(item)
              ).length + MATRIX_HEADER_COUNT
            }, ${MATRIX_CELL_WIDTH}px)`,
          }}
        >
          <MatrixHeader />

          <MatrixSubHeader />

          <MatrixBody />

          <FiltersWindow />
        </Box>
      </MatchMatrixContextProvider>
    </FilterFormProvider>
  )
}
