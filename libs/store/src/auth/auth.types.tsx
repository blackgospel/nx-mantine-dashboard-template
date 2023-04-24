import { User } from 'next-auth'

export interface IAuthSliceState {
  user: User | null
}

export interface IAuthSliceActions {
  /** Action to register user in to application */
  setUser: (payload: IAuthSliceState['user']) => void
}

export type IAuthSlice = IAuthSliceState & {
  actions: IAuthSliceActions
}
