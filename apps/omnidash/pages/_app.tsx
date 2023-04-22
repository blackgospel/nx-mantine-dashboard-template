import { ThemeProvider } from '@omnidash/theme'
import type { NextComponentType } from 'next'
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app'
import { ReactNode } from 'react'

const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return (
    <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
  )
}

export default App
