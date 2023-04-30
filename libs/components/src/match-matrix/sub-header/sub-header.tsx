import { Title, Tooltip } from '@mantine/core'
import { toAbbreviation } from '@omnidash/utils'
import { MatrixCell } from '../cell'
import { useMatchMatrixContext } from '../match-matrix.context'
import { useFilterFormContext } from '../match-matrix.form'
import { IMatrixSubHeaderProps } from './sub-header.types'

export const MatrixSubHeader: React.FC<IMatrixSubHeaderProps> = () => {
  const { handleGetTeamData } = useMatchMatrixContext()
  const form = useFilterFormContext()

  return (
    <>
      {[...Array(form.values.gamesCount)].map((_, index) => {
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

      {[...Array(form.values.gamesCount)].map((_, index) => {
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
