/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Icon } from '@iconify/react'
import { Box } from '@mantine/core'
import React from 'react'
import { IIconifyProps } from './iconify.types'

export const Iconify = React.forwardRef<any, IIconifyProps>(
  ({ icon, width = 20, sx, ...props }, ref) => {
    return (
      <Box
        // @ts-ignore
        ref={ref}
        component={Icon}
        icon={icon}
        sx={{ width, height: width, ...sx }}
        {...props}
      />
    )
  }
)

Iconify.displayName = 'Iconify'
