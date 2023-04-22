import { DefaultProps, Selectors } from '@mantine/core'
import React from 'react'
import { useStyles } from './page.styles'

export type IPageStylesNames = Selectors<typeof useStyles>

export interface IPageProps
  extends React.ComponentPropsWithoutRef<'div'>,
    DefaultProps<IPageStylesNames> {
  /** React child */
  children?: React.ReactNode

  /** Page title. Appears on tab */
  title?: string

  /** Page meta */
  meta?: React.ReactNode
}
