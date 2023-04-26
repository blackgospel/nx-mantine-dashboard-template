import { CollapseProps } from '@mantine/core'
import React from 'react'

export interface IMenuCollapseProps extends Omit<CollapseProps, 'in'> {
  /** Collapse trigger */
  trigger: (options?: {
    toggle?: () => void
    opened: boolean
  }) => React.ReactNode
}
