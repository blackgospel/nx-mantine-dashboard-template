import { Title } from '@mantine/core'
import { toAbbreviation } from '@omnidash/utils'
import { MatrixCell } from '../cell'
import { useComparisonMatrixContext } from '../comparison-matrix.context'
import { getRecentTeamData } from '../comparison-matrix.utils'
import { IMatrixSubHeaderProps } from './sub-header.types'

export const IMatrixSubHeader: React.FC<IMatrixSubHeaderProps> = () => {
  const ctx = useComparisonMatrixContext()

  return (
    <>
      {[...Array(ctx.numOfGames)].map((_, index) => {
        const {
          opposition: { team },
        } = getRecentTeamData(ctx, 'home', index)

        return (
          <MatrixCell type="home" key={`home${index}`}>
            <Title order={6}>{team.code ?? toAbbreviation(team.name)}</Title>
          </MatrixCell>
        )
      })}

      <MatrixCell type="center">
        <Title order={5}>Opposition</Title>
      </MatrixCell>

      {[...Array(ctx.numOfGames)].map((_, index) => {
        const {
          opposition: { team },
        } = getRecentTeamData(ctx, 'away', index)

        return (
          <MatrixCell type="away" key={`away${index}`}>
            <Title order={6}>{team.code ?? toAbbreviation(team.name)}</Title>
          </MatrixCell>
        )
      })}
    </>
  )
}
