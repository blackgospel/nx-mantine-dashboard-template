import { IconifyIconProps } from '@iconify/react'
import { DefaultProps } from '@mantine/core'

export interface IIconifyProps
  extends Omit<IconifyIconProps, 'width' | 'height'>,
    DefaultProps<any> {
  /** Icon width */
  width?: number
}
