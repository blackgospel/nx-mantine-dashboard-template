import { StoreApi, UseBoundStore } from 'zustand'
import { AppSelector, IStateCreator, IStoreSelectors } from './store.types'

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  const store = _store as IStoreSelectors<typeof _store>
  store.use = {}
  for (const k of Object.keys(store.getState())) {
    ;(store.use as any)[k] = () => store(s => s[k as keyof typeof s])
  }

  return store
}

/**
 * TODO: Would be nice developer experience if this worked.
 */
export const createSet: IStateCreator<T> = set => (callback: () => void) => {
  return () => set(callback)
}

export const createAppSelector = <R>(
  selector: AppSelector<R>
): AppSelector<R> => selector
