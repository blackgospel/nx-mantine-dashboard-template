import { DefaultProps } from '@mantine/core'

export interface IMatrixCellProps extends DefaultProps<any> {
  /** React children */
  children?: React.ReactNode

  /** Type of cell */
  type?: 'home' | 'center' | 'away'

  /** Flag to center content */
  centered?: boolean
}
