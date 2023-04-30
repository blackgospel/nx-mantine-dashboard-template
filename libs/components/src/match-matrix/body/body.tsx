import { MATRIX_ATTRIBUTES } from '../matrix-matrix.constants'
import { MatrixBodyAttributeCell } from './attribute-cell'
import { MatrixBodyAwayCells } from './away-cell'
import { IMatrixBodyProps } from './body.types'
import { MatrixBodyHomeCells } from './home-cell'

export const MatrixBody: React.FC<IMatrixBodyProps> = () => {
  return (
    <>
      {Object.values(MATRIX_ATTRIBUTES).map(attribute => {
        return (
          <>
            <MatrixBodyHomeCells attribute={attribute} />

            <MatrixBodyAttributeCell attribute={attribute} />

            <MatrixBodyAwayCells attribute={attribute} />
          </>
        )
      })}
    </>
  )
}
