import { Burger, Center, MediaQuery, useMantineTheme } from '@mantine/core'
import { MOBILE_BREAKPOINT } from '@omnidash/config'
import { useStore } from '@omnidash/store'

export const BurgerTab = () => {
  const {
    opened,
    actions: { toggleNavbar },
  } = useStore.use.navbar()
  const theme = useMantineTheme()
  const handleClick = () => toggleNavbar

  return (
    <MediaQuery largerThan={MOBILE_BREAKPOINT} styles={{ display: 'none' }}>
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
          }
        }}
      >
        <Burger
          opened={opened}
          onClick={toggleNavbar}
          size="sm"
          color={theme.colors.gray[6]}
        />
      </Center>
    </MediaQuery>
  )
}
