import { StateCreator } from 'zustand'
import { IAuthSlice } from './auth'
import { INavbarSlice } from './navbar'

export type IStore = {
  navbar: INavbarSlice
  auth: IAuthSlice
}

export type IStoreMiddlewares = [['zustand/immer', never]]

export type IStateCreator<T> = StateCreator<IStore, IStoreMiddlewares, [], T>

export type IStoreSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never
