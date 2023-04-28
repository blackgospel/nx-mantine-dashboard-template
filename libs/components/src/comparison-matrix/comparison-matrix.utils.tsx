import { IMatchData, IMatchStats } from '@omnidash/mocks'
import { rand } from '@omnidash/utils'
import { IComparisonMatrixContext } from './comparison-matrix.types'

export const getOppositionTeamRecentGameData = (
  id: string,
  teamRecentGames: IMatchData['recentGames'][0],
  index: number
) => {
  return [
    teamRecentGames.at(index),
    id !== teamRecentGames.at(index)?.homeTeam.id
      ? (['home', teamRecentGames.at(index)?.homeTeam] as const)
      : (['away', teamRecentGames.at(index)?.awayTeam] as const),
  ] as const
}

export const getTeamData = (ctx: IComparisonMatrixContext) => {
  // return {home: }
}

export const getRecentTeamData = (
  ctx: IComparisonMatrixContext,
  side: 'home' | 'away',
  index: number
) => {
  const [homeId, awayId] = [ctx.match.homeTeam.id, ctx.match.awayTeam.id]
  const currentTeamId = side === 'home' ? homeId : awayId
  const homeRecentGames = ctx.match.recentGames[0].slice(-ctx.numOfGames)
  const awayRecentGames = ctx.match.recentGames[1]

  const currentRecentGame =
    side === 'home' ? homeRecentGames[index] : awayRecentGames[index]
  const supporterSide =
    currentTeamId === currentRecentGame.homeTeam.id
      ? (['home', currentRecentGame.homeTeam] as const)
      : (['away', currentRecentGame.awayTeam] as const)
  const oppositionSide =
    currentTeamId !== currentRecentGame.homeTeam.id
      ? (['home', currentRecentGame.homeTeam] as const)
      : (['away', currentRecentGame.awayTeam] as const)

  return {
    supporter: {
      side: supporterSide[0],
      team: supporterSide[1],
    },
    opposition: {
      side: oppositionSide[0],
      team: oppositionSide[1],
    },
    currentRecentGame,
  }
}

export const generateExtraStats = (
  matchStatistics: IMatchStats['matchStatistics']
) => {
  const genRandGoal = () => rand(0, 4, 0.5)

  return {
    goals: [genRandGoal(), genRandGoal()],
    ...matchStatistics,
  }
}
