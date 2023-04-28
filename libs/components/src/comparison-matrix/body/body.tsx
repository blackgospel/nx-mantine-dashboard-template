import { Box, Text, Title } from '@mantine/core'
import { toTitle } from '@omnidash/utils'
import { Fragment } from 'react'
import { MatrixCell } from '../cell'
import { STATISTICS_ATTRIBUTES } from '../comparison-matrix.constants'
import { useComparisonMatrixContext } from '../comparison-matrix.context'
import {
  generateExtraStats,
  getRecentTeamData,
} from '../comparison-matrix.utils'
import { IMatrixBodyProps } from './body.types'

export const IMatrixBody: React.FC<IMatrixBodyProps> = () => {
  const ctx = useComparisonMatrixContext()

  return (
    <>
      {STATISTICS_ATTRIBUTES.map(attribute => (
        <Fragment key={attribute}>
          {[...Array(ctx.numOfGames)].map((_, index) => {
            const {
              opposition: { side, team },
              currentRecentGame,
            } = getRecentTeamData(ctx, 'home', index)

            const formattedMatchStats = generateExtraStats(
              currentRecentGame.matchStatistics
            )

            const [homeStat, awayStat] =
              formattedMatchStats[attribute as keyof typeof formattedMatchStats]

            const isWon =
              side === 'home' ? homeStat > awayStat : homeStat < awayStat
            const isSame = homeStat === awayStat

            if (attribute === 'goals') {
              return (
                <MatrixCell
                  key={`home${
                    index + currentRecentGame.startTimestamp + team.id
                  }`}
                  type="home"
                >
                  <Title
                    order={5}
                    color={isWon ? 'green' : isSame ? 'yellow' : 'red'}
                  >
                    <Box component="span">{homeStat}</Box> -{' '}
                    <Box component="span">{awayStat}</Box>
                  </Title>
                </MatrixCell>
              )
            }

            return (
              <MatrixCell
                key={`home${
                  index + currentRecentGame.startTimestamp + team.id
                }`}
                type="home"
              >
                <Text>{side === 'home' ? homeStat : awayStat}</Text>
              </MatrixCell>
            )
          })}

          <MatrixCell type="center">
            <Title order={6}>{toTitle(attribute)}</Title>
          </MatrixCell>

          {[...Array(ctx.numOfGames)].map((_, index) => {
            const {
              opposition: { side, team },
              currentRecentGame,
            } = getRecentTeamData(ctx, 'away', index)

            const formattedMatchStats = generateExtraStats(
              currentRecentGame.matchStatistics
            )

            const [homeStat, awayStat] =
              formattedMatchStats[attribute as keyof typeof formattedMatchStats]

            const isWon =
              side === 'home' ? homeStat > awayStat : homeStat < awayStat
            const isSame = homeStat === awayStat

            if (attribute === 'goals') {
              return (
                <MatrixCell
                  key={`away${
                    index + currentRecentGame.startTimestamp + team.id
                  }`}
                  type="home"
                >
                  <Title
                    order={5}
                    color={isWon ? 'green' : isSame ? 'yellow' : 'red'}
                  >
                    <Box component="span">{homeStat}</Box> -{' '}
                    <Box component="span">{awayStat}</Box>
                  </Title>
                </MatrixCell>
              )
            }

            return (
              <MatrixCell
                key={`away${
                  index + currentRecentGame.startTimestamp + team.id
                }`}
                type="away"
              >
                <Text>{side === 'home' ? homeStat : awayStat}</Text>
              </MatrixCell>
            )
          })}
        </Fragment>
      ))}
    </>
  )
}
