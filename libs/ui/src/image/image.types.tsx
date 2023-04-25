import { DefaultProps } from '@mantine/core'
import { LazyLoadImageProps } from 'react-lazy-load-image-component'

export interface ICustomImageProps
  extends Pick<
      React.ComponentPropsWithoutRef<'span'>,
      Exclude<
        keyof React.ComponentPropsWithoutRef<'span'>,
        keyof LazyLoadImageProps
      >
    >,
    LazyLoadImageProps,
    DefaultProps<any> {
  ratio?:
    | '4/3'
    | '3/4'
    | '6/4'
    | '4/6'
    | '16/9'
    | '9/16'
    | '21/9'
    | '9/21'
    | '1/1'

  disabledEffect?: boolean
}
