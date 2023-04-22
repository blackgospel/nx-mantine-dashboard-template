import { MantineThemeComponents } from '@mantine/styles/lib/theme/types/MantineTheme'

export const ThemedAvatar: MantineThemeComponents = {
  Avatar: {
    styles: theme => {
      return {
        root: {
          ...theme.other.transitions(),
        },
      }
    },
  },
}
