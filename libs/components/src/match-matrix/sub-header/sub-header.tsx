import { Title, Tooltip } from '@mantine/core'
import { toAbbreviation } from '@omnidash/utils'
import { MatrixCell } from '../cell'
import { useMatchMatrixContext } from '../match-matrix.context'
import { IMatrixSubHeaderProps } from './sub-header.types'

export const MatrixSubHeader: React.FC<IMatrixSubHeaderProps> = () => {
  const { gamesCount, handleGetTeamData } = useMatchMatrixContext()

  return (
    <>
      {[...Array(gamesCount)].map((_, index) => {
        const {
          opposition: { team },
        } = handleGetTeamData(index, 'home')

        return (
          <MatrixCell type="home" key={`home${index}`}>
            <Tooltip label={team.name}>
              <Title order={6}>{team.code ?? toAbbreviation(team.name)}</Title>
            </Tooltip>
          </MatrixCell>
        )
      })}

      <MatrixCell type="center">
        <Title order={5}>Opposition</Title>
      </MatrixCell>

      {[...Array(gamesCount)].map((_, index) => {
        const {
          opposition: { team },
        } = handleGetTeamData(index, 'away')

        return (
          <MatrixCell type="away" key={`away${index}`}>
            <Tooltip label={team.name}>
              <Title order={6}>{team.code ?? toAbbreviation(team.name)}</Title>
            </Tooltip>
          </MatrixCell>
        )
      })}
    </>
  )
}
