import { MantineThemeComponents } from '@mantine/styles/lib/theme/types/MantineTheme'
import { ThemedActionIcon } from './action-icon'
import { ThemedAvatar } from './avatar'
import { ThemedButton } from './button'
import { ThemedCard } from './card'
import { ThemedCollapse } from './collapse'
import { ThemedInput } from './input'
import { ThemedPopover } from './popover'
import { ThemedScrollArea } from './scroll-area'
import { ThemedTooltip } from './tooltip'

export const ThemeComponentsOverrides: MantineThemeComponents = {
  ...ThemedButton,
  ...ThemedInput,
  ...ThemedActionIcon,
  ...ThemedAvatar,
  ...ThemedScrollArea,
  ...ThemedCard,
  ...ThemedPopover,
  ...ThemedCollapse,
  ...ThemedTooltip,
}
