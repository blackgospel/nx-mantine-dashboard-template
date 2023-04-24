import { faker } from '@faker-js/faker'
import { upsertObjectArray } from '@omnidash/utils'
import { mergeDeepRight, uniq } from 'ramda'
import { IStateCreator } from '../store.types'
import { DEFAULT_TAB } from './global-tabs.constants'
import { IGlobalTabItem, IGlobalTabsSlice } from './global-tabs.types'
import { generateTab } from './global-tabs.utils'

export const createGlobalTabsSlice: IStateCreator<IGlobalTabsSlice> = (
  set,
  get
) => ({
  tabs: [
    {
      id: DEFAULT_TAB.ID,
      label: DEFAULT_TAB.LABEL,
      state: {
        resourceId: null,
        pinned: true,
      },
    },
    ...Array(20)
      .fill(0)
      .map(() => {
        return {
          id: faker.datatype.uuid(),
          label: faker.name.fullName(),
          state: {
            resourceId: null,
            pinned: false,
          },
        }
      }),
  ],

  current: DEFAULT_TAB.ID,

  actions: {
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