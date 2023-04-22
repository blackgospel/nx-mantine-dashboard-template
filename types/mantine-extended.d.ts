import '@emotion/react'
import { DefaultMantineColor, MantineTheme, Tuple } from '@mantine/core'
import { ThemePalette } from '../libs/theme/src/palette'
import { ThemeTransitions } from '../libs/theme/src/transition'
import { ThemeTypography } from '../libs/theme/src/typography'

type ExtendedCustomColors = keyof typeof ThemePalette | DefaultMantineColor

declare module '@emotion/react' {
  export interface Theme extends MantineTheme {}
}

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>
  }

  export interface MantineThemeOther {
    typography: typeof ThemeTypography
    transitions: typeof ThemeTransitions
  }
}
