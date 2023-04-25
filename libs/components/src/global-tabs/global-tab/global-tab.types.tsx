import { DefaultProps, TabProps } from '@mantine/core'

export interface IGlobalTabItemProps
  extends Pick<
      React.ComponentPropsWithoutRef<'button'>,
      Exclude<keyof React.ComponentPropsWithoutRef<'button'>, keyof TabProps>
    >,
    TabProps,
    Pick<DefaultProps<any>, 'sx'> {
  /** Tab index association */
  index?: number

  /** Function to handle close tab click */
  onClose?: any

  /** Flag to determine whether tab is pinned to tab list */
  pinned?: boolean

  /** Name to display on the tab itself */
  label?: string
}
