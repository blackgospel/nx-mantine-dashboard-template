import { Box, Stack, Sx } from '@mantine/core'
import { Settings } from 'react-slick'
import { ICarouselDotsProps } from './carousel-dots.types'

export const CarouselDots = ({
  sx,
  rounded,
  ...props
}: ICarouselDotsProps): Pick<Settings, 'appendDots' | 'customPaging'> => {
  return {
    appendDots: dots => (
      <Box
        component="ul"
        sx={[
          theme => ({
            zIndex: 9,
            padding: 0,
            display: 'flex !important',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.fn.themeColor(theme.primaryColor),
            width: 'auto !important',
            height: 'auto !important',
            '& li': {
              width: 18,
              height: 18,
              opacity: 0.32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              '&.slick-active': {
                opacity: 1,
                ...(rounded && {
                  '& span': {
                    width: 16,
                    borderRadius: 6,
                  },
                }),
              },
            },
          }),
          sx as Sx,
        ]}
        {...props}
      >
        {dots}
      </Box>
    ),
    customPaging: () => (
      <Stack
        sx={{
          width: 6,
          height: 6,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="span"
          sx={theme => ({
            width: 8,
            height: 8,
            borderRadius: '50%',
            transition: '250ms width cubic-bezier(0.4, 0, 0.6, 1)',
            backgroundColor: 'currentColor',
          })}
        />
      </Stack>
    ),
  }
}
