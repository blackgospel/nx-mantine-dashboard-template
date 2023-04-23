import { DefaultProps, PopoverProps } from '@mantine/core'

export interface IMenuPopoverProps
  extends PopoverProps,
    Pick<DefaultProps<any>, 'sx'> {
  trigger: React.ReactNode
}
