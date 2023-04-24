import { Box } from '@mantine/core'
import { IDashboardMainProps } from './main.types'

export const DashboardMain: React.FC<IDashboardMainProps> = ({ children }) => {
  return <Box>{children}</Box>
}
