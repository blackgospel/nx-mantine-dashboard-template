import { IMatchDataArray, _MOCKS_MATCHES } from '@omnidash/mocks'
import { rand } from '@omnidash/utils'

export const formatMatches = (): IMatchDataArray => {
  const genRandomGoals = () => rand(0, 4, 0.5)

  const formattedMatches = _MOCKS_MATCHES.map(item => {
    const formattedRecentGames = item.recentGames.map(side => {
      return side.map(game => {
        return {
          ...game,
          matchStatistics: {
            ...game.matchStatistics,
            goals: [genRandomGoals(), genRandomGoals()],
          },
        }
      })
    })

    return {
      ...item,
      recentGames: formattedRecentGames,
    }
  })

  console.log({ formattedMatches })
  return formattedMatches
}
