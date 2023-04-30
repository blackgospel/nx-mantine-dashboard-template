import { createFormContext } from '@mantine/form'
import { ILineAttributes } from './match-matrix.types'

interface FilterFormValues {
  supporterToggle: boolean
  totalToggle: boolean
  gamesCount: number
  venue: 'all' | 'home' | 'away'
  attributes: ILineAttributes[]
}

export const [FilterFormProvider, useFilterFormContext, useFilterForm] =
  createFormContext<FilterFormValues>()
