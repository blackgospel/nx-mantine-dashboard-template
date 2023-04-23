import { MantineThemeComponents } from '@mantine/styles/lib/theme/types/MantineTheme'

export const ThemedActionIcon: MantineThemeComponents = {
  ActionIcon: {
    defaultProps: {},
    styles: theme => ({
      root: {
        ...theme.other.transitions(),
      },
    }),
    variants: {},
  },
}
