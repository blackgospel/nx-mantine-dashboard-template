import { Global } from '@mantine/core'
import { Public_Sans } from '@next/font/google'

const font = Public_Sans({ subsets: ['latin'] })

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
          ...font.style,
          height: '100vh',
          overflow: 'hidden',
        },

        '#root': {
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        },

        '#nprogress': {
          pointerEvents: 'none',
          '.bar': {
            top: 0,
            left: 0,
            height: 2,
            zIndex: 9999,
            width: '100%',
            position: 'fixed',
            backgroundColor: theme.fn.themeColor(theme.primaryColor),
            boxShadow: `0 0 2px ${theme.fn.themeColor(theme.primaryColor)}`,
          },
          '.peg': {
            right: 0,
            opacity: 1,
            width: 100,
            height: '100%',
            display: 'block',
            position: 'absolute',
            transform: 'rotate(3deg) translate(0px, -4px)',
            boxShadow: `0 0 10px ${theme.fn.themeColor(
              theme.primaryColor
            )}, 0 0 5px ${theme.fn.themeColor(theme.primaryColor)}`,
          },
        },
      })}
    />
  )
}
