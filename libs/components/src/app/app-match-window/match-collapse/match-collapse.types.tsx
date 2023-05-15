import { IMatchData } from '@omnidash/mocks'
import { IAppMatchWindowProps } from '../app-match-window.types'

export interface IMatchCollapseProps extends IAppMatchWindowProps {
  name: string

  onClick: (
    match: IMatchData,
    open?: boolean
  ) => React.MouseEventHandler<HTMLElement>
}
