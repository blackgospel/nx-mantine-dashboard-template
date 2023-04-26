import { MantineThemeComponents } from '@mantine/styles/lib/theme/types/MantineTheme'

export const ThemedTooltip: MantineThemeComponents = {
  Tooltip: {
    defaultProps: {
      color: 'gray',
      withinPortal: true,
      withArrow: true,
      arrowSize: 12,
      arrowRadius: 2,
      arrowPosition: 'center',
    },
    styles: {},
  },
}
