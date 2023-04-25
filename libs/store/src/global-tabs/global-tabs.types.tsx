import { GLOBAL_TAB_TYPE } from './global-tabs.constants'

export interface IGlobalTabItemState {
  /** Resource ID which tab is associated with */
  resourceId: string | null

  /** Pinned tabs will have their close button disabled */
  pinned?: boolean

  /** Associated pages to be displayed on */
  pageIds?: Array<string>
}

export interface IGlobalTabItem {
  /** Tab ID */
  id: string

  /** Tab Label */
  label: string

  state: IGlobalTabItemState
}

export interface IGlobalTabsSliceState {
  /** List of all tabs */
  tabs: Array<IGlobalTabItem>

  /** List of active tabs */
  currentTabs: Array<IGlobalTabItem>

  /** Global tab type setting */
  globalTabType: (typeof GLOBAL_TAB_TYPE)[keyof typeof GLOBAL_TAB_TYPE]

  /** Current active tab ID */
  current: string
}

export interface IGlobalTabsSliceActions {
  addGlobalTab: (payload: Partial<IGlobalTabItem>) => void

  navigateGlobalTab: (payload: string) => void

  deleteGlobalTab: (payload: string) => void

  updateCurrentTab: (payload: Partial<IGlobalTabItem>) => void

  initializeCurrentTabs: () => void
}

export type IGlobalTabsSlice = IGlobalTabsSliceState & {
  actions: IGlobalTabsSliceActions
}
