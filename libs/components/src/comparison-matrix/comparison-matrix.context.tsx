import { createSafeContext } from '@mantine/utils'
import { IComparisonMatrixContext } from './comparison-matrix.types'

export const [ComparisonMatrixProvider, useComparisonMatrixContext] =
  createSafeContext<IComparisonMatrixContext>(
    'Comparison Matrix component was not found in tree'
  )
