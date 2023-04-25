import { Box, Stack, Text, Title } from '@mantine/core'
import { CustomImage } from '@omnidash/ui'
import { m } from 'framer-motion'
import { MotionContainer, varFade } from 'libs/components/src/animate'
import Link from 'next/link'
import { ICarouselItemProps } from './carousel-item.types'

export const CarouselItem: React.FC<ICarouselItemProps> = ({
  isActive,
  item: { description, image, title },
  ...props
}) => {
  return (
    <MotionContainer action animate={isActive} sx={{ position: 'relative' }}>
      <Stack
        spacing={8}
        sx={theme => ({
          padding: 24,
          width: '100%',
          bottom: 0,
          zIndex: 9,
          textAlign: 'left',
          position: 'absolute',
          color: theme.white,
        })}
      >
        <m.div variants={varFade().inRight}>
          <Text component="div" sx={{ opacity: 0.48 }}>
            Featured App
          </Text>
        </m.div>

        <m.div variants={varFade().inRight}>
          <Link href="#" color="inherit">
            <Title order={5}>{title}</Title>
          </Link>
        </m.div>

        <m.div variants={varFade().inRight}>
          <Text variant="body2">{description}</Text>
        </m.div>
      </Stack>

      <Box
        sx={theme => ({
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 8,
          position: 'absolute',
          backgroundColor: theme.fn.rgba(theme.colors.gray[9], 0.64),
        })}
      />

      <CustomImage
        alt={title}
        src={image}
        sx={theme => ({
          height: 280,
          [theme.fn.largerThan('xl')]: {
            height: 320,
          },
        })}
      />
    </MotionContainer>
  )
}
