import { StateCreator } from 'zustand'
import { IAuthSlice } from './auth'
import { IGlobalTabsSlice } from './global-tabs'
import { IMatchesSlice } from './matches'
import { INavbarSlice } from './navbar'

export type IStore = {
  navbar: INavbarSlice
  auth: IAuthSlice
  globalTabs: IGlobalTabsSlice
  matches: IMatchesSlice
}

export type IStoreMiddlewares = [['zustand/immer', never]]

export type IStateCreator<T> = StateCreator<IStore, IStoreMiddlewares, [], T>

export type IStoreSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never
