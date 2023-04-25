import { faker } from '@faker-js/faker'
import { Button, Container, Grid, Skeleton } from '@mantine/core'
import { AppFeatured, AppWelcome, GlobalTabs } from '@omnidash/components'
import { SeoIllustration } from '@omnidash/illustrations'
import { DashboardLayout } from '@omnidash/layouts'
import { SCROLL_SIZE_KEYS, useScrollSizeUpsert } from '@omnidash/theme'
import { Page } from '@omnidash/ui'
import { useSession } from 'next-auth/react'
import { ReactNode } from 'react'

const child = <Skeleton height={140} radius={0} animate={false} />

export default function DashboardApp() {
  const { data: session } = useSession()
  const item = useScrollSizeUpsert(
    SCROLL_SIZE_KEYS.DASHBOARD.APP.APP_FEATURED_GRID_ITEM
  )

  return (
    <Page title="General: App">
      <GlobalTabs>
        <Container fluid>
          <Grid>
            <Grid.Col xs={12} md={8}>
              <AppWelcome
                title={`Welcome back! \n ${session?.user?.name}`}
                description="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
                image={
                  <SeoIllustration
                    sx={theme => {
                      return {
                        padding: 16,
                        width: 360,
                        [theme.fn.largerThan('xs')]: {
                          margin: 'auto',
                        },

                        [theme.fn.largerThan('md')]: {
                          margin: 'inherit',
                        },
                      }
                    }}
                  />
                }
                action={<Button variant="filled">Go Now</Button>}
              />
            </Grid.Col>
            <Grid.Col xs={12} md={4} ref={item.ref}>
              <AppFeatured
                list={Array(3)
                  .fill(0)
                  .map((_, index) => {
                    return {
                      id: faker.datatype.uuid(),
                      title: [
                        'Harry Potter and the Deathly Hallows - Part 2',
                        'Disney Zombies 2',
                        'Lightroom mobile - Koloro',
                      ][index],
                      description: faker.company.catchPhrase(),
                      image: `https://api-dev-minimal-v4.vercel.app/assets/images/covers/cover_${
                        index + 1
                      }.jpg`,
                    }
                  })}
              />
            </Grid.Col>
            <Grid.Col xs={12} md={4}>
              {child}
            </Grid.Col>
            <Grid.Col xs={12} md={4}>
              {child}
            </Grid.Col>
            <Grid.Col xs={12} md={4}>
              {child}
            </Grid.Col>
          </Grid>
        </Container>
      </GlobalTabs>
    </Page>
  )
}

DashboardApp.getLayout = (page: ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
)
