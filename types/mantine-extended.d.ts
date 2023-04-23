import '@emotion/react'
import { MantineTheme, Tuple } from '@mantine/core'
import { ThemeTransitions } from '../libs/theme/src/transition'
import { ThemeTypography } from '../libs/theme/src/typography'

type ExtendedCustomColors = keyof typeof DefaultMantineColor

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
