import { Box, CSSObject, Center, MantineTheme, Sx } from '@mantine/core'
import { IMatrixCellProps } from './cell.types'

const commonStyles = (theme: MantineTheme): CSSObject => ({
  position: 'relative',
  border: `0.5px solid ${
    theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
  }`,
})

export const MatrixCell: React.FC<IMatrixCellProps> = ({
  type,
  centered = true,
  children,
  sx,
}) => {
  if (type === 'center') {
    return centered ? (
      <Center sx={[commonStyles, sx as Sx]}>{children}</Center>
    ) : (
      <Box sx={[commonStyles, sx as Sx]}>{children}</Box>
    )
  }

  return centered ? (
    <Center sx={[commonStyles, sx as Sx]}>{children}</Center>
  ) : (
    <Box sx={[commonStyles, sx as Sx]}>{children}</Box>
  )
}
