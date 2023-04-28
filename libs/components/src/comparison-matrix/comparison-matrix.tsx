import { Box, Center } from '@mantine/core'
import { IMatchData } from '@omnidash/mocks'
import { toTitle } from '@omnidash/utils'
import { useState } from 'react'
import { IComparisonMatrix } from './comparison-matrix.types'
import { TEMP_DATA } from './temp-data'

export const ComparisonMatrix: React.FC<IComparisonMatrix> = () => {
  console.log({ TEMP_DATA })
  const [lastGames, setLastGames] = useState(2)

  return (
    <Box className="container">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `${[...Array(lastGames)].map(
            (_, index) => '55px'
          )} 250px ${[...Array(lastGames)].map((_, index) => '55px')}`,
        }}
      >
        <Box
          sx={{
            gridColumn: `1 / span ${lastGames}`,
          }}
          className="home-team-recent-games"
        >
          {TEMP_DATA.homeTeam.name}
        </Box>
        <Center className="home-team-recent-games">Hi</Center>
        <Box
          sx={{
            gridColumn: `${lastGames + 2} / span ${lastGames}`,
          }}
          className="home-team-recent-games"
        >
          {TEMP_DATA.awayTeam.name}
        </Box>

        {/*--------------------------------*/}

        <Box className="home-team-recent-games">
          {
            getOppositionTeamRecentGameData(
              TEMP_DATA.homeTeam.id,
              TEMP_DATA.recentGames[0],
              1
            )[1][1].name
          }
        </Box>
        <Box className="home-team-recent-games">
          {
            getOppositionTeamRecentGameData(
              TEMP_DATA.homeTeam.id,
              TEMP_DATA.recentGames[0],
              0
            )[1][1].name
          }
        </Box>
        <Center className="home-team-recent-games">Opposition</Center>
        <Box className="away-team-recent-games">
          {
            getOppositionTeamRecentGameData(
              TEMP_DATA.awayTeam.id,
              TEMP_DATA.recentGames[1],
              0
            )[1][1].name
          }
        </Box>
        <Box className="away-team-recent-games">
          {
            getOppositionTeamRecentGameData(
              TEMP_DATA.awayTeam.id,
              TEMP_DATA.recentGames[1],
              1
            )[1][1].name
          }
        </Box>

        {/*--------------------------------*/}

        {STATISTICS_ATTRIBUTES.map((attribute, index) => {
          const [
            homeTeam1Match,
            [homeTeam1OppositionSide, homeTeam1OppositionTeam],
          ] = getOppositionTeamRecentGameData(
            TEMP_DATA.homeTeam.id,
            TEMP_DATA.recentGames[0],
            0
          )

          const [
            homeTeam2Match,
            [homeTeam2OppositionSide, homeTeam2OppositionTeam],
          ] = getOppositionTeamRecentGameData(
            TEMP_DATA.homeTeam.id,
            TEMP_DATA.recentGames[0],
            1
          )

          const [
            awayTeam1Match,
            [awayTeam1OppositionSide, awayTeam1OppositionTeam],
          ] = getOppositionTeamRecentGameData(
            TEMP_DATA.awayTeam.id,
            TEMP_DATA.recentGames[1],
            0
          )

          const [
            awayTeam2Match,
            [awayTeam2OppositionSide, awayTeam2OppositionTeam],
          ] = getOppositionTeamRecentGameData(
            TEMP_DATA.awayTeam.id,
            TEMP_DATA.recentGames[1],
            1
          )

          return (
            <>
              <Center>
                {
                  homeTeam2Match.matchStatistics[
                    attribute as keyof typeof homeTeam2Match.matchStatistics
                  ][homeTeam2OppositionSide === 'home' ? 0 : 1]
                }
              </Center>
              <Center>
                {
                  homeTeam1Match.matchStatistics[
                    attribute as keyof typeof homeTeam1Match.matchStatistics
                  ][homeTeam1OppositionSide === 'home' ? 0 : 1]
                }
              </Center>
              <Center>{toTitle(attribute)}</Center>
              <Center>
                {
                  awayTeam1Match.matchStatistics[
                    attribute as keyof typeof awayTeam1Match.matchStatistics
                  ][awayTeam1OppositionSide === 'home' ? 0 : 1]
                }
              </Center>
              <Center>
                {
                  awayTeam2Match.matchStatistics[
                    attribute as keyof typeof awayTeam2Match.matchStatistics
                  ][awayTeam2OppositionSide === 'home' ? 0 : 1]
                }
              </Center>
            </>
          )
        })}
      </Box>
    </Box>
  )
}

const getOppositionTeamRecentGameData = (
  id: string,
  teamRecentGames: IMatchData['recentGames'][0],
  index: number
) => {
  return [
    teamRecentGames[index],
    id !== teamRecentGames[index].homeTeam.id
      ? (['home', teamRecentGames[index].homeTeam] as const)
      : (['away', teamRecentGames[index].awayTeam] as const),
  ] as const
}
