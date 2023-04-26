import { MantineThemeComponents } from '@mantine/styles/lib/theme/types/MantineTheme'

export const ThemedPopover: MantineThemeComponents = {
  Popover: {
    defaultProps: {
      withinPortal: true,
      withArrow: true,
      arrowSize: 16,
      arrowRadius: 4,
      arrowPosition: 'center',
    },
    styles: {},
  },
}
