import {
  ActionIcon,
  Box,
  Button,
  Center,
  Divider,
  Text,
  Title,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Iconify, MenuPopover } from '@omnidash/ui'

export const NotificationPopover = () => {
  const [popoverOpened, { open, close, toggle }] = useDisclosure(false)

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
          <Iconify icon="eva:bell-fill" />
        </ActionIcon>
      }
      width={360}
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
          <Title order={4}>Notifications</Title>

          <Text size="sm">You have 0 unread messages</Text>
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
        <Center sx={{ flexGrow: 1 }}>
          <Text size="sm">No Notifications</Text>
        </Center>
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
          <Button fullWidth variant="filled">
            View All
          </Button>
        </Box>
      </Box>
    </MenuPopover>
  )
}
