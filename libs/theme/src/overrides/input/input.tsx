import { MantineThemeComponents } from '@mantine/styles/lib/theme/types/MantineTheme'

export const ThemedInput: MantineThemeComponents = {
  Input: {
    styles: theme => ({
      input: {
        transition: '200ms ease-in-out',
        transitionProperty: 'border-color, color',

        '&:focus, &:focus-within': {
          borderColor:
            theme.colorScheme === 'dark'
              ? theme.fn.themeColor(theme.primaryColor, 2)
              : theme.fn.themeColor(theme.primaryColor, 3),
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.gray[2]
              : theme.colors.dark[7],

          '&::placeholder': {
            color:
              theme.colorScheme === 'dark'
                ? theme.colors.gray[2]
                : theme.colors.dark[7],
          },
        },
      },
    }),
  },
}
