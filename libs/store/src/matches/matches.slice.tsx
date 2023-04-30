import { IMatchData, _leagueMatches } from '@omnidash/mocks'
import { IStateCreator } from '../store.types'
import { createAppSelector } from '../store.utils'
import { IMatchesSlice } from './matches.types'
import { formatMatches } from './matches.utils'

export const createMatchesSlice: IStateCreator<IMatchesSlice> = (set, get) => ({
  matches: [],

  todayMatches: {},

  actions: {
    setMatches: () =>
      set(state => {
        state.matches.matches = formatMatches()
        state.matches.todayMatches = _leagueMatches
      }),
  },
})

export const selectMatchByID = (id: string) =>
  createAppSelector<IMatchData | undefined>(state =>
    state.matches.matches.find(item => item.id === id)
  )
