import { faker } from '@faker-js/faker'
import { NEW_TAB } from './global-tabs.constants'
import { IGlobalTabItem } from './global-tabs.types'

export const generateTab = (): IGlobalTabItem => {
  return {
    id: faker.datatype.uuid(),
    label: NEW_TAB.LABEL,
    state: {
      pinned: false,
      resourceId: null,
    },
  }
}
