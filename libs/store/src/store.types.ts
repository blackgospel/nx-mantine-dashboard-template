import { StateCreator } from 'zustand'
import { INavbarSlice } from './navbar/navbar.types'

export type IStore = {
  navbar: INavbarSlice
}

export type IStoreMiddlewares = [['zustand/immer', never]]

export type IStateCreator<T> = StateCreator<IStore, IStoreMiddlewares, [], T>

export type IStoreSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never
