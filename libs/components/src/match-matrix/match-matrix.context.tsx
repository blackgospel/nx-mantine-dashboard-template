import { createSafeContext } from '@mantine/utils'
import { IMatchMatrixContext } from './match-matrix.types'

export const [MatchMatrixContextProvider, useMatchMatrixContext] =
  createSafeContext<IMatchMatrixContext>(
    'Match Matrix component was not found in tree'
  )
