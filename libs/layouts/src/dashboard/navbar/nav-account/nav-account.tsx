import { Box, Text, Title } from '@mantine/core'
import { PATH_DASHBOARD } from '@omnidash/routes'
import { CustomAvatar } from '@omnidash/ui'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export const NavAccount = () => {
  const { data: session } = useSession()

  return (
    <Box
      component={Link}
      href={PATH_DASHBOARD.user.account}
      sx={{ textDecoration: 'none' }}
    >
      <Box
        sx={theme => ({
          display: 'flex',
          alignItems: 'center',
          paddingInline: 16,
          paddingBlock: 10,
          gap: 12,
          borderRadius: 12,
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.gray[2]
              : theme.colors.dark[5],
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[4]
              : theme.colors.gray[2],
        })}
      >
        <CustomAvatar
          src={session?.user?.image}
          alt={session?.user?.name ?? 'N/A'}
        />

        <Box sx={{ minWidth: 0 }}>
          <Title order={6}>{session?.user?.name}</Title>

          <Text size="xs">{session?.user?.email}</Text>
        </Box>
      </Box>
    </Box>
  )
}
