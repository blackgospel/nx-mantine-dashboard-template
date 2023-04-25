import { faker } from '@faker-js/faker'
import { DEFAULT_TAB, GLOBAL_TAB_TYPE, NEW_TAB } from './global-tabs.constants'
import { IGlobalTabItem, IGlobalTabsSliceState } from './global-tabs.types'

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

export const getTabsByType = ({
  tabs,
  type,
  currentPage,
}: {
  tabs: Array<IGlobalTabItem>
  type: IGlobalTabsSliceState['globalTabType']
  currentPage?: string
}): Array<IGlobalTabItem> => {
  if (type === GLOBAL_TAB_TYPE.PAGE) {
    return tabs.filter(
      item =>
        item.state.pageIds?.includes(currentPage ?? '') ||
        item.id === DEFAULT_TAB.ID
    )
  }

  return tabs
}
