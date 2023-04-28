import { IMatchData, IMatchStats, ITeam } from '@omnidash/mocks'
import React from 'react'

export interface IComparisonMatrixProps
  extends React.ComponentPropsWithoutRef<'div'> {
  /** React children */
  children?: React.ReactNode
}

export interface IComparisonMatrixContext {
  match: IMatchData

  numOfGames: number

  handleGetOppositionTeam: (
    id: string,
    teamRecentGames: IMatchData['recentGames'][0],
    index: number
  ) => readonly [
    IMatchStats | undefined,
    readonly ['home', ITeam | undefined] | readonly ['away', ITeam | undefined]
  ]
}
