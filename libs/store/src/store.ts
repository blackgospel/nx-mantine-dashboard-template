import { mountStoreDevtool } from 'simple-zustand-devtools'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { createAuthSlice } from './auth'
import { createGlobalTabsSlice } from './global-tabs'
import { createMatchesSlice } from './matches'
import { createNavbarSlice } from './navbar/navbar.slice'
import { IStore } from './store.types'
import { createSelectors } from './store.utils'

const store = create<IStore>()(
  immer<IStore>((...a) => ({
    navbar: { ...createNavbarSlice(...a) },
    auth: { ...createAuthSlice(...a) },
    globalTabs: { ...createGlobalTabsSlice(...a) },
    matches: { ...createMatchesSlice(...a) },
  }))
)

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', store)
}

export const useStore = createSelectors(store)
