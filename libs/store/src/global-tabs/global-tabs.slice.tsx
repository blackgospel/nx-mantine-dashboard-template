import { upsertObjectArray } from '@omnidash/utils'
import { mergeDeepRight, uniq } from 'ramda'
import { IStateCreator } from '../store.types'
import {
  DEFAULT_TAB,
  DEFAULT_TABS_LIST,
  GLOBAL_TAB_TYPE,
} from './global-tabs.constants'
import { IGlobalTabItem, IGlobalTabsSlice } from './global-tabs.types'
import { generateTab, getTabsByType } from './global-tabs.utils'

export const createGlobalTabsSlice: IStateCreator<IGlobalTabsSlice> = (
  set,
  get
) => ({
  tabs: DEFAULT_TABS_LIST,

  currentTabs: [],

  current: DEFAULT_TAB.ID,

  globalTabType: GLOBAL_TAB_TYPE.ALL,

  actions: {
    initializeCurrentTabs: () =>
      set(state => {
        state.globalTabs.currentTabs = uniq(
          getTabsByType({
            tabs: state.globalTabs.tabs,
            type: state.globalTabs.globalTabType,
          })
        )
      }),

    addGlobalTab: (payload: Partial<IGlobalTabItem>) =>
      set(state => {
        const item = payload ?? {}
        const tabItem = mergeDeepRight(generateTab(), item)
        state.globalTabs.tabs = uniq([...state.globalTabs.tabs, tabItem])
        state.globalTabs.current = tabItem.id
      }),

    deleteGlobalTab: (payload: string) =>
      set(state => {
        const targetIndex = state.globalTabs.tabs.findIndex(
          ({ id }) => id === payload
        )
        const previousIndex = targetIndex === 0 ? 1 : targetIndex - 1

        state.globalTabs.current =
          state.globalTabs.current === payload
            ? state.globalTabs.tabs[previousIndex].id
            : state.globalTabs.current
        state.globalTabs.tabs = uniq(
          state.globalTabs.tabs.filter(({ id }) => id !== payload)
        )
      }),

    navigateGlobalTab: (payload: string) =>
      set(state => {
        state.globalTabs.current = payload
      }),

    updateCurrentTab: (payload: Partial<IGlobalTabItem>) =>
      set(state => {
        const targetTab = state.globalTabs.tabs.find(({ id }) => id === payload)

        if (!targetTab) return

        const updatedTab = mergeDeepRight(targetTab, payload)

        state.globalTabs.tabs = uniq(
          upsertObjectArray(updatedTab, state.globalTabs.tabs)
        )
      }),
  },
})
