import { IMatchDataArray, TreeNodeObject } from '@omnidash/mocks'

export interface IMatchesSliceState {
  /** Flag indicating whether menu is opened or not */
  matches: IMatchDataArray

  todayMatches: TreeNodeObject
}

export interface IMatchesSliceActions {
  setMatches: () => void
}

export type IMatchesSlice = IMatchesSliceState & {
  actions: IMatchesSliceActions
}
