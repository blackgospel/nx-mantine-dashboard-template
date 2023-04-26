import { DefaultProps } from '@mantine/core'

export interface IMenuItemProps
  extends React.ComponentPropsWithoutRef<'div'>,
    DefaultProps<any> {
  /** React children */
  children?: React.ReactNode

  /** Primary colors */
  primary?: boolean

  /** Left side icon */
  icon?: React.ReactNode

  /** Right side section */
  rightSection?: React.ReactNode
}
