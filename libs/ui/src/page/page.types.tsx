import { DefaultProps } from '@mantine/core'
import React from 'react'

export interface IPageProps
  extends React.ComponentPropsWithoutRef<'div'>,
    DefaultProps<any> {
  /** React child */
  children?: React.ReactNode

  /** Page title. Appears on tab */
  title?: string

  /** Page meta */
  meta?: React.ReactNode
}
