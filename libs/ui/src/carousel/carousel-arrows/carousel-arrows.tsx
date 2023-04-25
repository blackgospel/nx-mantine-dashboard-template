import {
  ActionIcon,
  Group,
  Stack,
  Sx,
  createStyles,
  useMantineTheme,
} from '@mantine/core'
import { Iconify } from '../../iconify'
import {
  ICarouselArrowsProps,
  ICarouselArrowsStylesParam,
} from './carousel-arrows.types'

const useStyles = createStyles(
  (theme, { filled, shape, hasChildren }: ICarouselArrowsStylesParam) => ({
    icon: {
      color: 'inherit',
      transition: 'all 200ms ease-in-out',
      ...(shape === 'rounded' && {
        borderRadius: Number(theme.radius.sm) * 1.5,
      }),
      ...(!filled && {
        opacity: 0.48,
        '&:hover': {
          opacity: 1,
        },
      }),
      ...(filled && {
        color: theme.fn.rgba(theme.white, 0.8),
        backgroundColor: theme.fn.rgba(theme.colors.gray[9], 0.48),
        '&:hover': {
          color: theme.white,
          backgroundColor: theme.colors.gray[9],
        },
      }),
      ...(hasChildren && {
        zIndex: 9,
        top: '50%',
        position: 'absolute',
        marginTop: 16,
      }),
    },
  })
)

export const CarouselArrows: React.FC<ICarouselArrowsProps> = ({
  shape = 'circular',
  filled = false,
  icon,
  onNext,
  onPrevious,
  children,
  leftButtonProps,
  rightButtonProps,
  sx,
  ...props
}) => {
  const theme = useMantineTheme()
  const hasChildren = !!children
  const { classes } = useStyles({ shape, filled, hasChildren })

  if (hasChildren) {
    return (
      <Stack sx={sx} {...props}>
        <ActionIcon
          className={classes.icon}
          onClick={onPrevious}
          {...leftButtonProps}
          sx={[
            {
              left: 16,
            },
            leftButtonProps?.sx,
          ]}
        >
          <Iconify
            icon={icon ?? 'solar:alt-arrow-left-linear'}
            sx={{
              width: 20,
              height: 20,
            }}
          />
        </ActionIcon>

        {children}

        <ActionIcon
          className={classes.icon}
          onClick={onNext}
          {...rightButtonProps}
          sx={[
            {
              right: 16,
            },
            rightButtonProps?.sx,
          ]}
        >
          <Iconify
            icon={icon ?? 'solar:alt-arrow-right-linear'}
            sx={{
              width: 20,
              height: 20,
            }}
          />
        </ActionIcon>
      </Stack>
    )
  }

  return (
    <Group
      sx={[{ alignItems: 'center', display: 'inline-flex' }, sx as Sx]}
      {...props}
    >
      <ActionIcon
        className={classes.icon}
        onClick={onPrevious}
        {...leftButtonProps}
      >
        <Iconify
          icon={icon ?? 'solar:alt-arrow-left-linear'}
          sx={{
            width: 20,
            height: 20,
          }}
        />
      </ActionIcon>

      {children}

      <ActionIcon
        className={classes.icon}
        onClick={onNext}
        {...rightButtonProps}
      >
        <Iconify
          icon={icon ?? 'solar:alt-arrow-right-linear'}
          sx={{
            width: 20,
            height: 20,
          }}
        />
      </ActionIcon>
    </Group>
  )
}
