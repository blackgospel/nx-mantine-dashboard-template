export interface INavbarSliceState {
  /** Flag indicating whether menu is opened or not */
  opened: boolean
}

export interface INavbarSliceActions {
  /** Action to open navbar */
  openNavbar: () => void

  /** Action to close navbar */
  closeNavbar: () => void

  /** Action to toggle navbar */
  toggleNavbar: () => void
}

export type INavbarSlice = INavbarSliceState & {
  actions: INavbarSliceActions
}
