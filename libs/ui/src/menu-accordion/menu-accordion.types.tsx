import { AccordionProps } from '@mantine/core'

export interface IMenuAccordionProps extends Omit<AccordionProps, 'children'> {
  /** Accordion children */
  children?: any

  /** Accordion data */
  onClick?: any
}
