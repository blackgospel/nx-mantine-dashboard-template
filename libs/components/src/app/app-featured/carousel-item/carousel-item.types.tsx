import { DefaultProps } from '@mantine/core'

/**
 * Interface for props of a carousel item.
 * @interface
 */
export interface ICarouselItemProps extends DefaultProps<any> {
  /** Determines whether the item is currently active. */
  isActive: boolean

  /** Object containing details of the item. */
  item: {
    /** The URL of the image to display. */
    image?: string

    /** The title of the item. */
    title?: string

    /** The description of the item. */
    description?: string
  }
}
