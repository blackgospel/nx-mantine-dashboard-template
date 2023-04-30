import { IMatchData, IMatchStats, ITeam } from '@omnidash/mocks'
import { ILineAttributes } from './match-matrix.types'

export const generateMarks = (max: number) => {
  return {
    marks: [...Array(max)].map((_, index) => {
      return {
        value: index,
      }
    }),
  }
}

export const generateSliderProps = (item: ILineAttributes) => {
  if (item === 'corners' || item === 'fouls' || item === 'totalShots') {
    return {
      min: 0,
      max: 20,
      step: 1,
      ...generateMarks(20),
    }
  }

  if (item === 'possession') {
    return {
      min: 0,
      max: 100,
      step: 10,
      ...generateMarks(100),
    }
  }

  return {
    min: 0,
    max: 7,
    step: 1,
    ...generateMarks(8),
  }
}

interface IGetRecentTeamDataProps {
  match?: IMatchData
  gamesCount: number
  side: 'home' | 'away'
  index: number
}

export const getRecentTeamData = ({
  match,
  gamesCount,
  side,
  index,
}: IGetRecentTeamDataProps) => {
  const [homeId, awayId] = [match?.homeTeam.id, match?.awayTeam.id]
  const currentTeamId = side === 'home' ? homeId : awayId
  const homeRecentGames = match?.recentGames[0].slice(-gamesCount) ?? []
  const awayRecentGames = match?.recentGames[1] ?? []

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
    stats: getTeamStats({ currentRecentGame, supporterSide, oppositionSide }),
    currentRecentGame,
  }
}

interface IGetTeamStats {
  currentRecentGame: IMatchStats
  supporterSide: readonly ['home', ITeam] | readonly ['away', ITeam]
  oppositionSide: readonly ['home', ITeam] | readonly ['away', ITeam]
}

const getTeamStats = ({
  currentRecentGame,
  supporterSide,
  oppositionSide,
}: IGetTeamStats) => {
  return Object.entries(currentRecentGame.matchStatistics).reduce(
    (res, [attribute, [home, away]]) => {
      return {
        ...res,
        [attribute]: {
          supporter: supporterSide[0] === 'home' ? home : away,
          opposition: oppositionSide[0] === 'home' ? home : away,
        },
      }
    },
    {} as Record<ILineAttributes, { supporter: number; opposition: number }>
  )
}
