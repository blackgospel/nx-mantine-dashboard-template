import { Box, Center, Divider, TextInput } from '@mantine/core'
import { useDisclosure, useInputState } from '@mantine/hooks'
import { useStore } from '@omnidash/store'
import { Iconify, MenuItem, MenuPopover } from '@omnidash/ui'
import { isEmpty } from 'ramda'
import { useMemo } from 'react'

export const SearchTabs = () => {
  const [value, setValue] = useInputState('')
  const [popoverOpened, { open, close }] = useDisclosure(false)
  const {
    tabs,
    actions: { navigateGlobalTab },
  } = useStore.use.globalTabs()

  const handleClick = (id: string) => () => {
    close()
    navigateGlobalTab(id)
  }

  const filteredData = useMemo(() => {
    if (isEmpty(value)) return tabs

    /**
     * TODO: Better fuzzy search
     */
    return tabs.filter(({ label }) =>
      label.toLowerCase().includes(value.toLowerCase())
    )
  }, [tabs, value])

  return (
    <MenuPopover
      opened={popoverOpened}
      onChange={opened => {
        opened ? open() : close()
      }}
      trigger={
        <Center
          sx={theme => {
            const colors = theme.fn.variant({ variant: 'default' })
            return {
              width: 42,
              color: colors.color,
              cursor: 'pointer',
              borderLeft: `1px solid ${colors.border}`,
              ...theme.fn.hover({
                backgroundColor: colors.background,
              }),
            }
          }}
          onClick={open}
        >
          <Iconify icon="solar:calendar-search-bold" />
        </Center>
      }
      width={250}
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
          <TextInput
            placeholder="Search tabs"
            value={value}
            onChange={setValue}
          />
        </Box>
      </Box>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingBlock: 14,
        }}
      >
        {filteredData.map(({ id, label }) => {
          return (
            <MenuItem primary key={id} onClick={handleClick(id)}>
              {label}
            </MenuItem>
          )
        })}
      </Box>
    </MenuPopover>
  )
}
