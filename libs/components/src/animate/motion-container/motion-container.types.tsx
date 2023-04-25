import { DefaultProps } from '@mantine/core'

export interface IMotionContainerProps extends DefaultProps<any> {
  action?: boolean

  animate?: boolean

  children?: React.ReactNode
}
