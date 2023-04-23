import { ColorScheme, MantineThemeOverride } from '@mantine/core'
import { useMemo, useState } from 'react'
import { ThemeComponentsOverrides } from '../overrides'
import { ThemeTransitions } from '../transition'
import { ThemeTypography } from '../typography'

export const useCreateTheme = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  const theme: MantineThemeOverride = useMemo(
    () => ({
      colorScheme,
      fontFamily: 'Public Sans',
      components: ThemeComponentsOverrides,
      primaryColor: 'violet',
      primaryShade: { light: 5, dark: 4 },
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
  }
}
