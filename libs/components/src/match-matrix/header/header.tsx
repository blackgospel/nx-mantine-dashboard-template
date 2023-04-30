import { Title } from '@mantine/core'
import { MatrixCell } from '../cell'
import { useMatchMatrixContext } from '../match-matrix.context'
import { useFilterFormContext } from '../match-matrix.form'
import { IMatrixHeaderProps } from './header.types'

export const MatrixHeader: React.FC<IMatrixHeaderProps> = () => {
  const { match } = useMatchMatrixContext()
  const form = useFilterFormContext()

  return (
    <>
      <MatrixCell
        type="home"
        sx={{ gridColumn: `1 / span ${form.values.gamesCount}` }}
      >
        <Title order={4}>{match?.homeTeam.name}</Title>
      </MatrixCell>

      <MatrixCell type="center" />

      <MatrixCell
        type="away"
        sx={{
          gridColumn: `${form.values.gamesCount + 2} / span ${
            form.values.gamesCount
          }`,
        }}
      >
        <Title order={4}>{match?.awayTeam.name}</Title>
      </MatrixCell>
    </>
  )
}
