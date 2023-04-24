import { ActionIcon } from '@mantine/core'
import { Iconify } from '@omnidash/ui'

export const SearchBar = () => {
  return (
    <ActionIcon variant="default" sx={{ width: 32, height: 32 }}>
      <Iconify icon="solar:magnifer-linear" />
    </ActionIcon>
  )
}
