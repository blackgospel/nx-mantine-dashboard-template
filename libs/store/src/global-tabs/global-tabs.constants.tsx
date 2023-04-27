export const DEFAULT_TAB = {
  ID: 'TABS_DEFAULT_ID',
  LABEL: 'Dashboard',
}

export const NEW_TAB = {
  ID: 'TABS_NEW_TAB_ID',
  LABEL: 'New Tab',
}

export const GLOBAL_TAB_TYPE = {
  ALL: 'all',
  PAGE: 'page',
} as const

export const DEFAULT_TABS_LIST = [
  {
    id: DEFAULT_TAB.ID,
    label: DEFAULT_TAB.LABEL,
    state: {
      resource: null,
      pinned: true,
    },
  },
]
