import { MantineThemeComponents } from '@mantine/styles/lib/theme/types/MantineTheme'
import { ThemedActionIcon } from './action-icon'
import { ThemedAvatar } from './avatar'
import { ThemedButton } from './button'
import { ThemedInput } from './input'

export const ThemeComponentsOverrides: MantineThemeComponents = {
  ...ThemedButton,
  ...ThemedInput,
  ...ThemedActionIcon,
  ...ThemedAvatar,
}
