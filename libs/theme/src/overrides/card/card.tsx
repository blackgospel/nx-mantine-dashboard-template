import { MantineThemeComponents } from '@mantine/styles/lib/theme/types/MantineTheme'

export const ThemedCard: MantineThemeComponents = {
  Card: {
    defaultProps: {},
    styles: theme => ({
      root: { borderRadius: 0 },
    }),
    variants: {},
  },
}
