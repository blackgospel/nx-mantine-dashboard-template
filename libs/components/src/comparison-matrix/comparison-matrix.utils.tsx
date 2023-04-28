import { IMatchData } from '@omnidash/mocks'

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
