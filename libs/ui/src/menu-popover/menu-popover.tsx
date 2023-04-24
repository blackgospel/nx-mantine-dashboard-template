import { Popover } from '@mantine/core'
import { IMenuPopoverProps } from './menu-popover.types'

export const MenuPopover = ({
  children,
  position = 'top-end',
  sx,
  trigger,
  ...props
}: IMenuPopoverProps) => {
  return (
    <Popover
      withArrow
      transitionProps={{ transition: 'pop-top-right' }}
      arrowSize={16}
      arrowRadius={4}
      arrowPosition="center"
      {...props}
    >
      <Popover.Target>{trigger}</Popover.Target>

      <Popover.Dropdown sx={{ padding: 0 }}>{children}</Popover.Dropdown>
    </Popover>
  )
}
