import { Box, Button, Divider, Text, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { CustomAvatar, MenuItem, MenuPopover } from '@omnidash/ui'
import { toTitle } from '@omnidash/utils'
import { signOut, useSession } from 'next-auth/react'

export const AccountPopover = () => {
  const [popoverOpened, { open, close, toggle }] = useDisclosure(false)
  const { data: session } = useSession()

  const handleLogout = async () => {
    signOut()
  }

  return (
    <MenuPopover
      opened={popoverOpened}
      onOpen={open}
      onClose={close}
      trigger={
        <CustomAvatar
          src={session?.user?.image}
          alt={session?.user?.name ?? 'N/A'}
          onClick={toggle}
        />
      }
      width={200}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          paddingBlock: 14,
          paddingInline: 18,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Title order={5}>{toTitle(session?.user?.name ?? '')}</Title>

          <Text size="xs">{session?.user?.email}</Text>
        </Box>
      </Box>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          {Array(5)
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
