import { useInitializeTabs } from '@omnidash/hooks'
import { ThemeProvider } from '@omnidash/theme'
import { RouterTransition } from '@omnidash/ui'
import type { NextComponentType } from 'next'
import { SessionProvider } from 'next-auth/react'
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app'
import { useRouter } from 'next/router'
import { ReactNode, useEffect } from 'react'
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)
  useInitializeTabs()
  const router = useRouter()

  useEffect(() => {
    router.push('/dashboard/app')
  }, [router])

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
