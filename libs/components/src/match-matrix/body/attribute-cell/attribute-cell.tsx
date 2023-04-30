import { Slider, Stack } from '@mantine/core'
import { MatrixCell } from '../../cell'
import { useMatchMatrixContext } from '../../match-matrix.context'
import { IMatrixCommonCellProps } from '../../match-matrix.types'
import { generateSliderProps } from '../../matrix-matrix.utils'
import { AttributeMenu } from '../attribute-menu'

export const MatrixBodyAttributeCell: React.FC<IMatrixCommonCellProps> = ({
  attribute,
}) => {
  const { lines, handleLineChange } = useMatchMatrixContext()
  const sliderProps = generateSliderProps(attribute)

  return (
    <MatrixCell type="center">
      <Stack spacing={6} sx={{ width: '100%', paddingInline: 12 }}>
        <AttributeMenu
          attribute={attribute}
          state={lines[attribute]}
          onChangeLines={handleLineChange}
        />

        <Slider
          value={lines[attribute].value}
          onChange={handleLineChange(attribute)}
          {...sliderProps}
          styles={{
            markLabel: { display: 'none' },
          }}
        />
      </Stack>
    </MatrixCell>
  )
}
