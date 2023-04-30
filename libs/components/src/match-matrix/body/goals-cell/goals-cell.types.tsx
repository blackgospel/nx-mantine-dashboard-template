import { IMatrixCellProps } from '../../cell'
import { IMatrixCommonCellProps } from '../../match-matrix.types'
import { getRecentTeamData } from '../../matrix-matrix.utils'

export interface IGoalsCellProps
  extends IMatrixCommonCellProps,
    IMatrixCellProps {
  /** React children */
  teamData: ReturnType<typeof getRecentTeamData>
}
