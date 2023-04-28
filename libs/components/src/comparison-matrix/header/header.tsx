import { Box, Center, Title } from '@mantine/core'
import { useComparisonMatrixContext } from '../comparison-matrix.context'
import { TEMP_DATA } from '../temp-data'
import { IMatrixHeaderProps } from './header.types'

export const IMatrixHeader: React.FC<IMatrixHeaderProps> = () => {
  const ctx = useComparisonMatrixContext()

  return (
    <>
      <Center
        sx={theme => ({
          gridColumn: `1 / span ${ctx.numOfGames}`,
          border: `1px solid ${
            theme.colorScheme === 'dark'
              ? theme.colors.dark[5]
              : theme.colors.gray[2]
          }`,
        })}
      >
        <Title order={4}>{TEMP_DATA.homeTeam.name}</Title>
      </Center>

      <Box
        sx={theme => ({
          border: `1px solid ${
            theme.colorScheme === 'dark'
              ? theme.colors.dark[5]
              : theme.colors.gray[2]
          }`,
          borderWidth: '1px 0',
        })}
      />

      <Center
        sx={theme => ({
          gridColumn: `${ctx.numOfGames + 2} / span ${ctx.numOfGames}`,
          border: `1px solid ${
            theme.colorScheme === 'dark'
              ? theme.colors.dark[5]
              : theme.colors.gray[2]
          }`,
        })}
      >
        <Title order={4}>{TEMP_DATA.awayTeam.name}</Title>
      </Center>
    </>
  )
}
