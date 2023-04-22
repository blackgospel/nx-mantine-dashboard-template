import { MantineThemeComponents } from '@mantine/styles/lib/theme/types/MantineTheme'

export const ThemedButton: MantineThemeComponents = {
  Button: {
    defaultProps: {
      variant: 'primary',
    },
    styles: theme => ({
      root: {
        ...theme.other.transitions(),
      },
    }),
    variants: {},
  },
}
