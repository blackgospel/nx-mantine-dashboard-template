import { Box, Button, Text, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Iconify, MenuItem, MenuPopover } from '@omnidash/ui'
import { toTitle } from '@omnidash/utils'
import { IAttributeLinesProps } from './attribute-menu.types'

export const AttributeMenu: React.FC<IAttributeLinesProps> = ({
  onChangeLines,
  state,
  attribute,
}) => {
  const theme = useMantineTheme()
  const [popoverOpened, { open, close, toggle }] = useDisclosure(false)

  return (
    <MenuPopover
      opened={popoverOpened}
      onOpen={open}
      onClose={close}
      position="right-start"
      arrowSize={10}
      styles={{
        dropdown: {
          backgroundColor: theme.colors.dark[4],
          borderColor: theme.colors.dark[3],
        },
        arrow: {
          borderColor: theme.colors.dark[3],
        },
      }}
      trigger={
        <Button
          variant="light"
          fullWidth
          compact
          onClick={toggle}
          rightIcon={
            <Iconify
              width={16}
              icon="solar:archive-down-minimlistic-bold-duotone"
            />
          }
          styles={{
            inner: {
              justifyContent: 'space-between',
            },
          }}
        >
          {toTitle(attribute)}
        </Button>
      }
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          {['Over', 'Under'].map((item, index) => {
            const key = item.toLowerCase()

            return (
              <MenuItem
                data-active={key === state.state}
                onClick={() => onChangeLines(attribute, key)()}
                sx={{ paddingBlock: 8 }}
                key={index}
                primary
              >
                <Text size="sm">{item}</Text>
              </MenuItem>
            )
          })}
        </Box>
      </Box>
    </MenuPopover>
  )
}
