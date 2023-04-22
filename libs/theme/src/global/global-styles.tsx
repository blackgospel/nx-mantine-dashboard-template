import { Global } from '@mantine/core'
import { Public_Sans } from '@next/font/google'

const publicSans = Public_Sans({ subsets: ['latin'] })

export const GlobalStyles = () => {
  return (
    <Global
      styles={theme => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },

        '*, html, body': {
          WebkitFontSmoothing: 'subpixel-antialiased',
        },

        body: {
          ...theme.fn.fontStyles(),
          ...publicSans.style,
          height: '100vh',
          overflow: 'hidden',
        },

        '#root': {
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        },
      })}
    />
  )
}
