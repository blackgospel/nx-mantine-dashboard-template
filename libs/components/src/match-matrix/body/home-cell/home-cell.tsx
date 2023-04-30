import { Text } from '@mantine/core'
import { MatrixCell } from '../../cell'
import { useMatchMatrixContext } from '../../match-matrix.context'
import { IMatrixCommonCellProps } from '../../match-matrix.types'
import { MatrixBodyGoalsCell } from '../goals-cell'

export const MatrixBodyHomeCells: React.FC<IMatrixCommonCellProps> = ({
  attribute,
}) => {
  const { supporterToggle, lines, gamesCount, handleGetTeamData } =
    useMatchMatrixContext()

  return (
    <>
      {[...Array(gamesCount)].map((_, index) => {
        const teamData = handleGetTeamData(index, 'home')
        const { stats } = teamData

        const highlightCondition =
          lines[attribute].state === 'over'
            ? lines[attribute].value !== 0 &&
              stats[attribute][supporterToggle ? 'supporter' : 'opposition'] >=
                lines[attribute].value
            : lines[attribute].value !== 0 &&
              stats[attribute][supporterToggle ? 'supporter' : 'opposition'] <=
                lines[attribute].value

        if (attribute === 'goals') {
          return (
            <MatrixBodyGoalsCell
              type="home"
              key={`home${index}`}
              attribute={attribute}
              teamData={teamData}
            />
          )
        }

        return (
          <MatrixCell
            type="home"
            key={`home${index}`}
            sx={theme => ({
              ...(highlightCondition && {
                backgroundColor: theme.fn.rgba(
                  theme.fn.themeColor(theme.primaryColor),
                  0.3
                ),
              }),
            })}
          >
            <Text>{stats[attribute].opposition}</Text>
            <Text
              sx={{
                position: 'absolute',
                right: 2,
                bottom: 2,
                lineHeight: '1',
                fontSize: 10,
              }}
            >
              {stats[attribute].supporter}
            </Text>
          </MatrixCell>
        )
      })}
    </>
  )
}
