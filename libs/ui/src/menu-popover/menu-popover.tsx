import { Popover } from '@mantine/core'
import { IMenuPopoverProps } from './menu-popover.types'

export const MenuPopover = ({
  children,
  trigger,
  ...props
}: IMenuPopoverProps) => {
  return (
    <Popover transitionProps={{ transition: 'pop-top-right' }} {...props}>
      <Popover.Target>{trigger}</Popover.Target>

      <Popover.Dropdown sx={{ padding: 0 }}>{children}</Popover.Dropdown>
    </Popover>
  )
}
