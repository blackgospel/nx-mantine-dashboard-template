import { Box, createPolymorphicComponent } from '@mantine/core'
import Head from 'next/head'
import React from 'react'
import { IPageProps } from './page.types'

const _Page = React.forwardRef<HTMLDivElement, IPageProps>(
  (
    {
      color,
      classNames,
      styles,
      unstyled,
      className,
      children,
      title = '',
      meta,
      ...props
    },
    ref
  ) => {
    return (
      <>
        <Head>
          <title>{`${title} | Omnidash`}</title>
          {meta}
        </Head>

        <Box ref={ref} {...props}>
          {children}
        </Box>
      </>
    )
  }
)

_Page.displayName = 'Page'

export const Page = createPolymorphicComponent<'div', IPageProps>(_Page)