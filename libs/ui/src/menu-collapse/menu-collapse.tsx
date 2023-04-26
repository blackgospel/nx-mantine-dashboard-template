import { Box, Collapse, Sx } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React from 'react'
import { IMenuCollapseProps } from './menu-collapse.types'

export const MenuCollapse: React.FC<IMenuCollapseProps> = ({
  children,
  sx,
  trigger,
}) => {
  const [opened, { toggle }] = useDisclosure(true)

  return (
    <Box sx={[theme => ({}), sx as Sx]}>
      {trigger({ toggle, opened })}
      <Collapse in={opened}>{children}</Collapse>
    </Box>
  )
}
