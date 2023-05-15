import { DefaultProps } from '@mantine/core'

export interface IFloatingWindowProps extends DefaultProps<any> {
  /** React Children */
  children?: React.ReactNode

  /** Initial state of floating window */
  initialState?: boolean
}
