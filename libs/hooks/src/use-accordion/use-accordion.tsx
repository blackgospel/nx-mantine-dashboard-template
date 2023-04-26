import { useState } from 'react'

/**
 * Custom hook to manage loading state
 * @param initial - Initial loading state
 * @returns Returns a tuple with loading state and an object containing start, stop, and toggle functions to update the loading state
 */
export const useAccordion = (initial?: boolean) => {
  const [value, setValue] = useState<string[]>([])

  const handleItemChange = (itemValue: string) => {
    const nextValue: AccordionValue<Multiple> = Array.isArray(_value)
      ? _value.includes(itemValue)
        ? _value.filter(selectedValue => selectedValue !== itemValue)
        : [..._value, itemValue]
      : itemValue === _value
      ? null
      : (itemValue as any)

    handleChange(nextValue)
  }

  const toggle = (id: string) => {}

  return [value, setValue, { start, stop, toggle }] as const
}
