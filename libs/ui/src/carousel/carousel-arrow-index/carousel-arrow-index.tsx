import { ActionIcon, Box, Sx, Text, createStyles } from '@mantine/core'
import { Iconify } from '../../iconify'
import { ICarouselArrowIndexProps } from './carousel-arrow-index.types'

const useStyles = createStyles(() => ({
  icon: {
    width: 28,
    height: 28,
    padding: 0,
    opacity: 0.48,
    '&:hover': { opacity: 1 },
  },
}))

export const CarouselArrowIndex: React.FC<ICarouselArrowIndexProps> = ({
  icon,
  total,
  index,
  sx,
  onNext,
  onPrevious,
}) => {
  const { classes } = useStyles()

  return (
    <Box
      sx={[
        theme => ({
          zIndex: 9,
          display: 'inline-flex',
          alignItems: 'center',
          position: 'absolute',
          bottom: 12,
          right: 12,
          padding: 2,
          color: theme.white,
          borderRadius: theme.radius.md,
        }),
        sx as Sx,
      ]}
    >
      <ActionIcon className={classes.icon} onClick={onPrevious}>
        <Iconify
          icon={icon ?? 'solar:alt-arrow-left-linear'}
          sx={{
            width: 20,
            height: 20,
          }}
        />
      </ActionIcon>

      <Text component="span" sx={{ marginBlock: 1 }}>
        {index + 1} / {total}
      </Text>

      <ActionIcon className={classes.icon} onClick={onNext}>
        <Iconify
          icon={icon ?? 'solar:alt-arrow-right-linear'}
          sx={{
            width: 20,
            height: 20,
          }}
        />
      </ActionIcon>
    </Box>
  )
}
