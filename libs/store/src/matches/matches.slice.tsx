import { IMatchData, _MOCKS_MATCHES, _leagueMatches } from '@omnidash/mocks'
import { IStateCreator } from '../store.types'
import { createAppSelector } from '../store.utils'
import { IMatchesSlice } from './matches.types'

export const createMatchesSlice: IStateCreator<IMatchesSlice> = (set, get) => ({
  matches: null,

  todayMatches: null,

  actions: {
    setMatches: () =>
      set(state => {
        state.matches.matches = _MOCKS_MATCHES
        state.matches.todayMatches = _leagueMatches
      }),
  },
})

export const selectMatchByID = (id?: string) =>
  createAppSelector<IMatchData | undefined>(state =>
    id ? state.matches.matches?.find(item => item.id === id) : undefined
  )
