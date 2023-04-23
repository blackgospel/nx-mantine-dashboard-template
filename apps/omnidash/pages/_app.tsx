import { ThemeProvider } from '@omnidash/theme'
import { RouterTransition } from '@omnidash/ui'
import type { NextComponentType } from 'next'
import { SessionProvider } from 'next-auth/react'
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app'
import { ReactNode } from 'react'

const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return (
    <SessionProvider>
      <ThemeProvider>
        <RouterTransition />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </SessionProvider>
  )
}

export default App
