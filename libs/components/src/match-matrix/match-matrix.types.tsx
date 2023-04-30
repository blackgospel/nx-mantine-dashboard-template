import { useMatchMatrix } from './match-matrix.hooks'
import { MATRIX_ATTRIBUTES } from './matrix-matrix.constants'

export type ILineAttributes =
  (typeof MATRIX_ATTRIBUTES)[keyof typeof MATRIX_ATTRIBUTES]

export interface ILineAttributesValue {
  value: number
  state: 'over' | 'under'
}

export type ILineState = Record<ILineAttributes, ILineAttributesValue>

export interface IMatchMatrixProps
  extends React.ComponentPropsWithoutRef<'div'> {
  /** React children */
  children?: React.ReactNode
}

export interface IMatchMatrixContext
  extends Omit<ReturnType<typeof useMatchMatrix>, 'filtersForm'> {
  /** React children */
  children?: React.ReactNode
}

export interface IMatrixCommonCellProps {
  attribute: ILineAttributes

  index?: number
}
