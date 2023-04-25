import { DefaultProps } from '@mantine/core'

/* eslint-disable @typescript-eslint/ban-types */
export interface ICarouselArrowsProps extends DefaultProps<any> {
  filled?: boolean

  onNext?: any

  children?: React.ReactNode

  onPrevious?: any

  leftButtonProps?: any

  rightButtonProps?: any

  shape?: 'circular' | 'rounded'

  icon?: string
}

export interface ICarouselArrowsStylesParam extends ICarouselArrowsProps {
  hasChildren?: boolean
}
