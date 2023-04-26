import { Box, Button, Divider, Text, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { CustomAvatar, MenuItem, MenuPopover } from '@omnidash/ui'
import { signOut, useSession } from 'next-auth/react'

export const NavAccount = () => {
  const [popoverOpened, { open, close, toggle }] = useDisclosure(false)
  const { data: session } = useSession()

  const handleLogout = async () => signOut()

  return (
    <MenuPopover
      opened={popoverOpened}
      onOpen={open}
      onClose={close}
      withArrow={false}
      trigger={
        <Box
          sx={{ textDecoration: 'none', cursor: 'pointer' }}
          onClick={toggle}
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
      }
      width={200}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          {Array(3)
            .fill(0)
            .map((_, index) => {
              return (
                <MenuItem key={index} primary>
                  Menu Item {index}
                </MenuItem>
              )
            })}
        </Box>
      </Box>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          paddingBlock: 14,
          paddingInline: 18,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Button fullWidth variant="filled" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Box>
    </MenuPopover>
  )
}
