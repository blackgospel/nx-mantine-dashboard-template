import { ColorScheme, MantineThemeOverride } from '@mantine/core'
import { SpotlightAction } from '@mantine/spotlight'
import { useMemo, useState } from 'react'
import { ThemeComponentsOverrides } from '../overrides'
import { ThemeTransitions } from '../transition'
import { ThemeTypography } from '../typography'

export const useCreateTheme = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const [spotlightActions, setSpotlightActions] = useState<SpotlightAction[]>(
    []
  )

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  const theme: MantineThemeOverride = useMemo(
    () => ({
      colorScheme,
      fontFamily: 'Public Sans',
      components: ThemeComponentsOverrides,
      primaryColor: 'grape',
      other: {
        typography: ThemeTypography,
        transitions: ThemeTransitions,
      },
    }),
    [colorScheme]
  )

  return {
    colorScheme,
    toggleColorScheme,
    theme,
    spotlightActions,
    setSpotlightActions,
  }
}
