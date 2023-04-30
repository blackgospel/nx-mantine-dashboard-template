import { Box, Title } from '@mantine/core'
import { MatrixCell } from '../../cell'
import { useMatchMatrixContext } from '../../match-matrix.context'
import { useFilterFormContext } from '../../match-matrix.form'
import { IGoalsCellProps } from './goals-cell.types'

export const MatrixBodyGoalsCell: React.FC<IGoalsCellProps> = ({
  attribute,
  teamData,
  ...props
}) => {
  const { lines } = useMatchMatrixContext()
  const form = useFilterFormContext()
  const { currentRecentGame, stats } = teamData

  const supporterToggle = form.values.supporterToggle

  const highlightCondition =
    lines[attribute].state === 'over'
      ? lines[attribute].value !== 0 &&
        stats[attribute][supporterToggle ? 'supporter' : 'opposition'] >=
          lines[attribute].value
      : lines[attribute].value !== 0 &&
        stats[attribute][supporterToggle ? 'supporter' : 'opposition'] <=
          lines[attribute].value

  const [homeStat, awayStat] =
    currentRecentGame.matchStatistics[
      attribute as keyof typeof currentRecentGame.matchStatistics
    ]

  const isWon = stats['goals'].supporter > stats['goals'].opposition
  const isDraw = stats['goals'].supporter === stats['goals'].opposition

  return (
    <MatrixCell
      sx={theme => ({
        ...(highlightCondition && {
          backgroundColor: theme.fn.rgba(
            theme.fn.themeColor(theme.primaryColor),
            0.3
          ),
        }),
      })}
      {...props}
    >
      <Title order={5} color={isWon ? 'green' : isDraw ? 'yellow' : 'red'}>
        <Box component="span">{homeStat}</Box> -{' '}
        <Box component="span">{awayStat}</Box>
      </Title>
    </MatrixCell>
  )
}
