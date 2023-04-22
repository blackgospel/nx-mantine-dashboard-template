export interface IDashboardLayoutProps
  extends React.ComponentPropsWithoutRef<'div'> {
  /** React child */
  children?: React.ReactNode

  /** Page title. Appears on tab */
  title?: string
}
