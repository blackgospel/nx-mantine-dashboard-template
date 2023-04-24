import { IStateCreator } from '../store.types'
import { IAuthSlice } from './auth.types'

export const createAuthSlice: IStateCreator<IAuthSlice> = (set, get) => ({
  user: null,

  actions: {
    setUser: payload => {
      set(state => {
        state.auth.user = payload
      })
    },
  },
})
