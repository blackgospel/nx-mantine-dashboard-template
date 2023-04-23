import { IStateCreator } from '../store.types'
import { IAuthSlice } from './auth.types'

export const createAuthSlice: IStateCreator<IAuthSlice> = (set, get) => ({
  token: null,

  actions: {
    login: () => {
      set(state => {
        state.auth.token = null
      })
    },
    register: () => {
      set(state => {
        state.auth.token = null
      })
    },
  },
})
