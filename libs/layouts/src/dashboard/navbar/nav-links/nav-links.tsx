import { Stack, Title } from '@mantine/core'
import { NavItem } from '../nav-item'
import { NAV_CONFIG } from '../navbar.config'

export const NavLinks = () => {
  return (
    <Stack>
      {NAV_CONFIG.map(group => {
        const key = group.subheader || group.items[0].title

        return (
          <Stack key={key}>
            {group.subheader && (
              <Title sx={{ paddingInline: 12 }} order={6}>
                {group.subheader.toUpperCase()}
              </Title>
            )}

            <Stack spacing={4}>
              {group.items.map(list => {
                return <NavItem data={list} key={list.title} />
              })}
            </Stack>
          </Stack>
        )
      })}
    </Stack>
  )
}
