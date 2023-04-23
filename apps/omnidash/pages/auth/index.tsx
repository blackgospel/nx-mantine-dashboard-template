import { AuthForm } from '@omnidash/components'
import { GuestGuard } from '@omnidash/routes'
import { Page } from '@omnidash/ui'

export default function AuthPage() {
  return (
    <GuestGuard>
      <Page title="Login/Signup">
        <AuthForm />
      </Page>
    </GuestGuard>
  )
}
