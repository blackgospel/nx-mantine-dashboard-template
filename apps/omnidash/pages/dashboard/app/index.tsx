import { Group } from '@mantine/core'
import { AppMatchWindow, GlobalTabs } from '@omnidash/components'
import { DashboardLayout } from '@omnidash/layouts'
import { useStore } from '@omnidash/store'
import { Page } from '@omnidash/ui'
import { ReactNode, useEffect } from 'react'

export default function DashboardApp() {
  const {
    todayMatches,
    actions: { setMatches },
  } = useStore.use.matches()

  useEffect(() => {
    setMatches()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Page title="General: App">
      <GlobalTabs>
        <Group>
          <AppMatchWindow data={todayMatches} />
        </Group>
      </GlobalTabs>
    </Page>
  )
}

DashboardApp.getLayout = (page: ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
)
