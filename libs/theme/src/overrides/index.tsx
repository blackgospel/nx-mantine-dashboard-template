import { MantineThemeComponents } from '@mantine/styles/lib/theme/types/MantineTheme'
import { ThemedActionIcon } from './action-icon'
import { ThemedAvatar } from './avatar'
import { ThemedButton } from './button'
import { ThemedCard } from './card'
import { ThemedInput } from './input'
import { ThemedScrollArea } from './scroll-area'

export const ThemeComponentsOverrides: MantineThemeComponents = {
  ...ThemedButton,
  ...ThemedInput,
  ...ThemedActionIcon,
  ...ThemedAvatar,
  ...ThemedScrollArea,
  ...ThemedCard,
}
