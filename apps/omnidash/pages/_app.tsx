import { ThemeProvider } from '@omnidash/theme'
import { AppProps } from 'next/app'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
