import { Title } from '@mantine/core'
import { MatrixCell } from '../cell'
import { useComparisonMatrixContext } from '../comparison-matrix.context'
import { IMatrixHeaderProps } from './header.types'

export const MatrixHeader: React.FC<IMatrixHeaderProps> = () => {
  const ctx = useComparisonMatrixContext()

  return (
    <>
      <MatrixCell type="home" sx={{ gridColumn: `1 / span ${ctx.numOfGames}` }}>
        <Title order={4}>{ctx.match.homeTeam.name}</Title>
      </MatrixCell>

      <MatrixCell type="center" />

      <MatrixCell
        type="away"
        sx={{ gridColumn: `${ctx.numOfGames + 2} / span ${ctx.numOfGames}` }}
      >
        <Title order={4}>{ctx.match.awayTeam.name}</Title>
      </MatrixCell>
    </>
  )
}
