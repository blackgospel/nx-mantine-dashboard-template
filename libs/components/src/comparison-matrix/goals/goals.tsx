import { Box, Center, Title } from '@mantine/core'
import { rand } from '@omnidash/utils'
import { useComparisonMatrixContext } from '../comparison-matrix.context'
import { TEMP_DATA } from '../temp-data'
import { IMatrixGoalsProps } from './goals.types'

export const IMatrixGoals: React.FC<IMatrixGoalsProps> = () => {
  const ctx = useComparisonMatrixContext()
  const genRandGoal = () => rand(0, 4, 0.5)

  return (
    <>
      {[...Array(ctx.numOfGames)].map((_, index) => {
        const homeGoals = genRandGoal()
        const awayGoals = genRandGoal()

        const [__, [homeTeamOppositionSide]] = ctx.handleGetOppositionTeam(
          TEMP_DATA.homeTeam.id,
          TEMP_DATA.recentGames[0].slice(-ctx.numOfGames),
          index
        )

        const currentTeamGoals = [
          homeTeamOppositionSide === 'home' ? awayGoals : homeGoals,
        ]
        const oppositionGoals = [
          homeTeamOppositionSide === 'home' ? homeGoals : awayGoals,
        ]
        const isWon = currentTeamGoals > oppositionGoals
        const isSame = homeGoals === awayGoals

        return (
          <Center
            sx={theme => ({
              border: `1px solid ${
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[5]
                  : theme.colors.gray[2]
              }`,
              borderWidth: '0 1px 1px 1px',
            })}
          >
            <Title
              order={6}
              color={isWon ? 'green' : isSame ? 'yellow' : 'red'}
            >
              <Box component="span">{homeGoals}</Box> -{' '}
              <Box component="span">{awayGoals}</Box>
            </Title>
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
        <Title order={6}>Goals</Title>
      </Center>

      {[...Array(ctx.numOfGames)].map((_, index) => {
        const homeGoals = genRandGoal()
        const awayGoals = genRandGoal()

        const [__, [awayTeamOppositionSide]] = ctx.handleGetOppositionTeam(
          TEMP_DATA.awayTeam.id,
          TEMP_DATA.recentGames[1],
          index
        )

        const currentTeamGoals = [
          awayTeamOppositionSide === 'home' ? awayGoals : homeGoals,
        ]
        const oppositionGoals = [
          awayTeamOppositionSide === 'home' ? homeGoals : awayGoals,
        ]
        const isWon = currentTeamGoals > oppositionGoals
        const isSame = homeGoals === awayGoals

        return (
          <Center
            sx={theme => ({
              border: `1px solid ${
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[5]
                  : theme.colors.gray[2]
              }`,

              borderWidth: '0 1px 1px 1px',
            })}
          >
            <Title
              order={6}
              color={isWon ? 'green' : isSame ? 'yellow' : 'red'}
            >
              <Box component="span">{homeGoals}</Box> -{' '}
              <Box component="span">{awayGoals}</Box>
            </Title>
          </Center>
        )
      })}
    </>
  )
}
