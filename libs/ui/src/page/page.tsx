import {
  Anchor,
  Box,
  Breadcrumbs,
  Sx,
  Title,
  createPolymorphicComponent,
} from '@mantine/core'
import { DASHBOARD_PAGE_PADDING } from '@omnidash/config'
import { useStore } from '@omnidash/store'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { IPageProps } from './page.types'

const _Page = React.forwardRef<HTMLDivElement, IPageProps>(
  ({ children, title = '', meta, dashboard, sx, ...props }, ref) => {
    const {
      actions: { navigateToDashboard },
    } = useStore.use.globalTabs()

    const breadcrumbs = [
      { title: 'Dashboard', onClick: () => navigateToDashboard() },
      ...(dashboard?.breadcrumb ?? []),
    ]

    return (
      <>
        <Head>
          <title>{`${title} | Omnidash`}</title>
          {meta}
        </Head>

        <Box
          ref={ref}
          sx={[{ padding: dashboard ? DASHBOARD_PAGE_PADDING : 0 }, sx as Sx]}
          {...props}
        >
          {dashboard && (
            <>
              <Title order={3} mb={24}>
                {title}
              </Title>

              <Breadcrumbs
                mb={24}
                separator={
                  <Box
                    sx={theme => ({
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      backgroundColor:
                        theme.colorScheme === 'dark'
                          ? theme.colors.dark[2]
                          : theme.colors.gray[4],
                    })}
                  />
                }
              >
                {breadcrumbs.map(({ title, ...breadcrumb }, index) => {
                  if (breadcrumbs.at(-1)?.title === title) {
                    return (
                      <Anchor
                        component="span"
                        key={title}
                        color="dimmed"
                        sx={{ pointerEvents: 'none' }}
                      >
                        {title}
                      </Anchor>
                    )
                  }

                  if ('onClick' in breadcrumb) {
                    return (
                      <Anchor
                        component="span"
                        key={title}
                        onClick={breadcrumb.onClick}
                        sx={{ color: 'initial' }}
                      >
                        {title}
                      </Anchor>
                    )
                  }

                  return (
                    <Anchor
                      component={Link}
                      key={title}
                      href={breadcrumb.href ?? '#'}
                      sx={{ color: 'initial' }}
                    >
                      {title}
                    </Anchor>
                  )
                })}
              </Breadcrumbs>
            </>
          )}

          {children}
        </Box>
      </>
    )
  }
)

_Page.displayName = 'Page'

export const Page = createPolymorphicComponent<'div', IPageProps>(_Page)
