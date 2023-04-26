import { Center } from '@mantine/core'
import { DEFAULT_TAB, useStore } from '@omnidash/store'
import { Iconify } from '@omnidash/ui'

export const HomeTab = () => {
  const {
    current,
    actions: { navigateGlobalTab },
  } = useStore.use.globalTabs()
  const isActive = current === DEFAULT_TAB.ID
  const handleClick = () => navigateGlobalTab(DEFAULT_TAB.ID)

  return (
    <Center
      onClick={handleClick}
      sx={theme => {
        const colors = theme.fn.variant({ variant: 'default' })
        return {
          width: 42,
          minWidth: 42,
          maxWidth: 42,
          color: colors.color,
          cursor: 'pointer',
          borderRight: `1px solid ${colors.border}`,

          ...theme.fn.hover({
            backgroundColor: colors.background,
          }),

          ...(isActive && {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[4]
                : theme.colors.gray[2],
          }),
        }
      }}
    >
      <Iconify icon="solar:home-bold-duotone" />
    </Center>
  )
}
