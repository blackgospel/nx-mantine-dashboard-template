import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { NavigationProgress } from '@mantine/nprogress'
import { SpotlightProvider } from '@mantine/spotlight'
import { GlobalStyles } from '../global/global-styles'
import { MotionLazyProvider } from './motion-lazy'
import { useCreateTheme } from './provider.hooks'
import { ThemeProviderProps } from './provider.types'

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { colorScheme, theme, toggleColorScheme } = useCreateTheme()

  return (
    <MotionLazyProvider>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
          <SpotlightProvider actions={[]}>
            <ModalsProvider>
              <NavigationProgress />
              <Notifications />
              <GlobalStyles />
              {children}
            </ModalsProvider>
          </SpotlightProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </MotionLazyProvider>
  )
}
