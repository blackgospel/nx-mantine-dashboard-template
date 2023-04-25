import { DefaultProps } from '@mantine/core'

export interface ICarouselArrowIndexProps extends DefaultProps<any> {
  icon?: string

  total: number

  index: number

  onNext?: any

  onPrevious?: any
}
