export interface IGlobalTabItemState {
  /** Resource ID which tab is associated with */
  resourceId: string | null

  /** Pinned tabs will have their close button disabled */
  pinned?: boolean
}

export interface IGlobalTabItem {
  /** Tab ID */
  id: string

  /** Tab Label */
  label: string

  state: IGlobalTabItemState
}

export interface IGlobalTabsSliceState {
  /** List of tabs */
  tabs: Array<IGlobalTabItem>

  /** Current active tab ID */
  current: string
}

export interface IGlobalTabsSliceActions {
  addGlobalTab: (payload: Partial<IGlobalTabItem>) => void

  navigateGlobalTab: (payload: string) => void

  deleteGlobalTab: (payload: string) => void

  updateCurrentTab: (payload: Partial<IGlobalTabItem>) => void
}

export type IGlobalTabsSlice = IGlobalTabsSliceState & {
  actions: IGlobalTabsSliceActions
}
