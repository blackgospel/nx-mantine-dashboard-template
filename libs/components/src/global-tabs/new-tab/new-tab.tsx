import { Center } from '@mantine/core'
import { Iconify } from '@omnidash/ui'

export const NewTab = () => {
  return (
    <Center
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
      <Iconify icon="solar:home-add-bold" />
    </Center>
  )
}
