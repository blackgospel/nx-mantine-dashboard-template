import { useMatchMatrix } from '../../match-matrix.hooks'
import { ILineAttributes, ILineAttributesValue } from '../../match-matrix.types'

export interface IAttributeLinesProps {
  /** Current attribute */
  attribute: ILineAttributes

  /** Line Attribute state */
  state: ILineAttributesValue

  /** Update line attribute state */
  onChangeLines?: ReturnType<typeof useMatchMatrix>['handleLineChange']
}
