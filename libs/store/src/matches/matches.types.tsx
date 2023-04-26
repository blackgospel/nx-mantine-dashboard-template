import { TreeNodeObject, _MOCKS_MATCHES } from '@omnidash/mocks'

export interface IMatchesSliceState {
  /** Flag indicating whether menu is opened or not */
  matches: typeof _MOCKS_MATCHES | null

  todayMatches: TreeNodeObject | null
}

export interface IMatchesSliceActions {
  setMatches: () => void
}

export type IMatchesSlice = IMatchesSliceState & {
  actions: IMatchesSliceActions
}
