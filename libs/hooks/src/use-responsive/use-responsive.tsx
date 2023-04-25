import {
  MantineSize,
  getBreakpointValue,
  getSize,
  px,
  useMantineTheme,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

export const useResponsive = (query: 'up' | 'down', start: MantineSize) => {
  const theme = useMantineTheme()

  const mediaUp = useMediaQuery(
    `(min-width: ${px(
      getBreakpointValue(getSize({ size: start, sizes: theme.breakpoints }))
    )}px)`,
    true,
    {
      getInitialValueInEffect: false,
    }
  )

  const mediaDown = useMediaQuery(
    `(max-width: ${px(
      getBreakpointValue(getSize({ size: start, sizes: theme.breakpoints })) - 1
    )}px)`,
    true,
    {
      getInitialValueInEffect: false,
    }
  )

  return query === 'down' ? mediaDown : mediaUp
}
