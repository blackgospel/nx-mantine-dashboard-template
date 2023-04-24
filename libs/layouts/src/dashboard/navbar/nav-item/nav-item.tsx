import { Group, Text } from '@mantine/core'
import { useActiveLink } from '@omnidash/hooks'
import { Iconify, MenuItem } from '@omnidash/ui'
import { toTitle } from '@omnidash/utils'
import Link from 'next/link'
import { INavItemProps } from './nav-item.types'

export const NavItem: React.FC<INavItemProps> = ({ data }) => {
  const { active } = useActiveLink(data.path)

  console.log({ active })
  return (
    <MenuItem
      key={data.path}
      component={Link}
      primary
      href={data.path}
      sx={theme => {
        return {
          paddingInline: 12,
          paddingBlock: 16,
          borderRadius: 8,

          ...(active && {
            color: theme.fn.themeColor(theme.primaryColor),
            backgroundColor: theme.fn.variant({ variant: 'light' }).background,

            '&:hover': {
              backgroundColor: theme.fn.variant({ variant: 'light' })
                .background,
            },
          }),
        }
      }}
    >
      <Group align="center">
        <Iconify icon={data.icon} width={24} />
        <Text size="sm" weight={500}>
          {toTitle(data.title)}
        </Text>
      </Group>
    </MenuItem>
  )
}
