import { Center, Title } from '@mantine/core'
import { toAbbreviation } from '@omnidash/utils'
import { useComparisonMatrixContext } from '../comparison-matrix.context'
import { TEMP_DATA } from '../temp-data'
import { IMatrixSubHeaderProps } from './sub-header.types'

export const IMatrixSubHeader: React.FC<IMatrixSubHeaderProps> = () => {
  const ctx = useComparisonMatrixContext()

  return (
    <>
      {[...Array(ctx.numOfGames)].map((_, index) => {
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
            <Title order={5}>
              {ctx.handleGetOppositionTeam(
                TEMP_DATA.homeTeam.id,
                TEMP_DATA.recentGames[0].slice(-ctx.numOfGames),
                index
              )[1][1]?.code ??
                toAbbreviation(
                  ctx.handleGetOppositionTeam(
                    TEMP_DATA.homeTeam.id,
                    TEMP_DATA.recentGames[0].slice(-ctx.numOfGames),
                    index
                  )[1][1]?.name
                )}
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
        <Title order={5}>Opposition</Title>
      </Center>

      {[...Array(ctx.numOfGames)].map((_, index) => {
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
            <Title order={6}>
              {ctx.handleGetOppositionTeam(
                TEMP_DATA.awayTeam.id,
                TEMP_DATA.recentGames[1],
                index
              )[1][1]?.code ??
                toAbbreviation(
                  ctx.handleGetOppositionTeam(
                    TEMP_DATA.awayTeam.id,
                    TEMP_DATA.recentGames[1],
                    index
                  )[1][1]?.name
                )}
            </Title>
          </Center>
        )
      })}
    </>
  )
}
