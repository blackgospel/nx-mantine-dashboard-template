import { IStateCreator } from '../store.types'
import { INavbarSlice } from './navbar.types'

export const createNavbarSlice: IStateCreator<INavbarSlice> = (set, get) => ({
  opened: false,

  actions: {
    openNavbar: () =>
      set(state => {
        state.navbar.opened = true
      }),
    closeNavbar: () =>
      set(state => {
        state.navbar.opened = false
      }),
    toggleNavbar: () =>
      set(state => {
        state.navbar.opened = !state.navbar.opened
      }),
  },
})
