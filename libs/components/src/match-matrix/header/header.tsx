import { Title } from '@mantine/core'
import { MatrixCell } from '../cell'
import { useMatchMatrixContext } from '../match-matrix.context'
import { IMatrixHeaderProps } from './header.types'

export const MatrixHeader: React.FC<IMatrixHeaderProps> = () => {
  const { match, gamesCount } = useMatchMatrixContext()

  return (
    <>
      <MatrixCell type="home" sx={{ gridColumn: `1 / span ${gamesCount}` }}>
        <Title order={4}>{match?.homeTeam.name}</Title>
      </MatrixCell>

      <MatrixCell type="center" />

      <MatrixCell
        type="away"
        sx={{ gridColumn: `${gamesCount + 2} / span ${gamesCount}` }}
      >
        <Title order={4}>{match?.awayTeam.name}</Title>
      </MatrixCell>
    </>
  )
}
