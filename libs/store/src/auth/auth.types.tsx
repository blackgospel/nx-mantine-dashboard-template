export interface IAuthSliceState {
  token: string | null
}

export interface IAuthSliceActions {
  /** Action to log user in to application */
  login: () => void

  /** Action to register user in to application */
  register: () => void
}

export type IAuthSlice = IAuthSliceState & {
  actions: IAuthSliceActions
}
