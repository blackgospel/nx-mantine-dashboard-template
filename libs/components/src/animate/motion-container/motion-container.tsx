import { Box } from '@mantine/core'
import { m } from 'framer-motion'
import { varContainer } from '../variants'
import { IMotionContainerProps } from './motion-container.types'

export const MotionContainer: React.FC<IMotionContainerProps> = ({
  action,
  animate,
  children,
  ...props
}) => {
  if (action) {
    return (
      <Box
        component={m.div}
        initial={false}
        animate={animate ? 'animate' : 'exit'}
        variants={varContainer()}
        {...props}
      >
        {children}
      </Box>
    )
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={varContainer()}
      {...props}
    >
      {children}
    </Box>
  )
}
