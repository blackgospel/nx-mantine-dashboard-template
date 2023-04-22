import { DefaultProps, MantineColor } from '@mantine/core'
import React from 'react'

export interface ILogoProps
  extends React.ComponentPropsWithoutRef<'div'>,
    DefaultProps<any> {
  color?: MantineColor
}
