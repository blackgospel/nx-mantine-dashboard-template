import { Fragment } from 'react'
import { useFilterFormContext } from '../match-matrix.form'
import { MATRIX_ATTRIBUTES } from '../matrix-matrix.constants'
import { MatrixBodyAttributeCell } from './attribute-cell'
import { MatrixBodyAwayCells } from './away-cell'
import { IMatrixBodyProps } from './body.types'
import { MatrixBodyHomeCells } from './home-cell'

export const MatrixBody: React.FC<IMatrixBodyProps> = () => {
  const form = useFilterFormContext()

  return (
    <>
      {Object.values(MATRIX_ATTRIBUTES)
        .filter(item => form.values.attributes.includes(item))
        .map(attribute => {
          return (
            <Fragment key={attribute}>
              <MatrixBodyHomeCells attribute={attribute} />

              <MatrixBodyAttributeCell attribute={attribute} />

              <MatrixBodyAwayCells attribute={attribute} />
            </Fragment>
          )
        })}
    </>
  )
}
