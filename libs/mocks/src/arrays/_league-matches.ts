/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { _MOCKS_MATCHES } from '../assets'
export interface ITeam {
  id: string
  tournamentId: string
  name: string
  code?: string | null
  country: string
}

export interface ITournament {
  id: string
  name: string
  country: string
}

export type IStats = Array<number>

export interface IMatchStats extends IBaseMatchData {
  matchStatistics: {
    goals: IStats
    possession: IStats
    totalShots: IStats
    totalShotsOnTarget: IStats
    offsides: IStats
    fouls: IStats
    goalkeeperSaves: IStats
    corners: IStats
    yellowCards: IStats
  }
}

export interface IBaseMatchData {
  id: string
  startTimestamp: number
  tournament: ITournament
  homeTeam: ITeam
  awayTeam: ITeam
}

export interface IMatchData extends IBaseMatchData {
  recentGames: Array<Array<IMatchStats>>
}

export type IMatchDataArray = Array<IMatchData>

export interface TreeNodeObject {
  [name: string]: TreeNode
}

interface LocaleFunctionProps {
  label: string
  [name: string]: any
}

export interface TreeNode extends LocaleFunctionProps {
  index: number
  nodes?: TreeNodeObject
  data?: IMatchData
}

export const _leagueMatches: TreeNodeObject = _MOCKS_MATCHES.reduce(
  (res, item) => {
    const league = item.tournament.name

    const prevLeague = res[league]
      ? {
          ...res[league],
          nodes: {
            ...res[league].nodes,
            [item.id]: {
              label: `${item.homeTeam.name} vs ${item.awayTeam.name}`,
              data: {
                ...item,
              },
            },
          },
        }
      : {
          label: league,
          data: { ...item.tournament },
          nodes: {
            [item.id]: {
              label: `${item.homeTeam.name} vs ${item.awayTeam.name}`,
              data: {
                ...item,
              },
            },
          },
        }

    res = {
      ...res,
      [league]: prevLeague,
    }

    return res
  },
  {}
)
