import { Center, Text, Title } from '@mantine/core'
import { toTitle } from '@omnidash/utils'
import { STATISTICS_ATTRIBUTES } from '../comparison-matrix.constants'
import { useComparisonMatrixContext } from '../comparison-matrix.context'
import { TEMP_DATA } from '../temp-data'
import { IMatrixBodyProps } from './body.types'

export const IMatrixBody: React.FC<IMatrixBodyProps> = () => {
  const ctx = useComparisonMatrixContext()

  return (
    <>
      {STATISTICS_ATTRIBUTES.map((attribute, index) => {
        return (
          <>
            {[...Array(ctx.numOfGames)].map((_, index) => {
              const [homeTeamMatch, [homeTeamOppositionSide]] =
                ctx.handleGetOppositionTeam(
                  TEMP_DATA.homeTeam.id,
                  TEMP_DATA.recentGames[0].slice(-ctx.numOfGames),
                  index
                )

              return (
                <Center
                  sx={theme => ({
                    position: 'relative',
                    border: `1px solid ${
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[5]
                        : theme.colors.gray[2]
                    }`,
                    borderWidth: '0 1px 1px 1px',
                  })}
                >
                  {
                    homeTeamMatch?.matchStatistics[
                      attribute as keyof typeof homeTeamMatch.matchStatistics
                    ][homeTeamOppositionSide === 'home' ? 0 : 1]
                  }

                  <Text
                    sx={theme => ({
                      position: 'absolute',
                      right: 2,
                      bottom: 2,
                      lineHeight: '1',
                      fontSize: 10,
                    })}
                  >
                    {
                      homeTeamMatch?.matchStatistics[
                        attribute as keyof typeof homeTeamMatch.matchStatistics
                      ][homeTeamOppositionSide === 'home' ? 1 : 0]
                    }
                  </Text>
                </Center>
              )
            })}

            <Center
              sx={theme => ({
                border: `1px solid ${
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[5]
                    : theme.colors.gray[2]
                }`,
                borderWidth: '0 0 1px 0',
              })}
            >
              <Title order={6}>{toTitle(attribute)}</Title>
            </Center>

            {[...Array(ctx.numOfGames)].map((_, index) => {
              const [awayTeamMatch, [awayTeamOppositionSide]] =
                ctx.handleGetOppositionTeam(
                  TEMP_DATA.awayTeam.id,
                  TEMP_DATA.recentGames[1],
                  index
                )

              return (
                <Center
                  sx={theme => ({
                    position: 'relative',
                    border: `1px solid ${
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[5]
                        : theme.colors.gray[2]
                    }`,
                    borderWidth: '0 1px 1px 1px',
                  })}
                >
                  {
                    awayTeamMatch?.matchStatistics[
                      attribute as keyof typeof awayTeamMatch.matchStatistics
                    ][awayTeamOppositionSide === 'home' ? 0 : 1]
                  }

                  <Text
                    sx={theme => ({
                      position: 'absolute',
                      right: 2,
                      bottom: 2,
                      lineHeight: '1',
                      fontSize: 10,
                    })}
                  >
                    {
                      awayTeamMatch?.matchStatistics[
                        attribute as keyof typeof awayTeamMatch.matchStatistics
                      ][awayTeamOppositionSide === 'home' ? 1 : 0]
                    }
                  </Text>
                </Center>
              )
            })}
          </>
        )
      })}
    </>
  )
}
