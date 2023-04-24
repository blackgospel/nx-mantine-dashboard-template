import { AvatarProps, DefaultProps } from '@mantine/core'

export interface ICustomAvatarProps
  extends Pick<
      React.ComponentPropsWithoutRef<'button'>,
      Exclude<keyof React.ComponentPropsWithoutRef<'button'>, keyof AvatarProps>
    >,
    AvatarProps,
    Pick<DefaultProps<any>, 'sx'> {}
