import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Divider,
  Text,
  Title,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { MenuPopover } from '@omnidash/ui'
import { toTitle } from '@omnidash/utils'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export const AccountPopover = () => {
  const { replace } = useRouter()
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
        <ActionIcon
          variant="default"
          onClick={toggle}
          sx={{ width: 32, height: 32 }}
        >
          <Avatar
            src={session?.user?.image}
            alt={session?.user?.name ?? 'N/A'}
            radius="xl"
          />
        </ActionIcon>
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
          paddingBlock: 14,
          paddingInline: 18,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Text size="sm">Menu Item 1</Text>
          <Text size="sm">Menu Item 2</Text>
          <Text size="sm">Menu Item 3</Text>
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
