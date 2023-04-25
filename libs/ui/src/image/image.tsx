import { Box, Sx } from '@mantine/core'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ICustomImageProps } from './image.types'
import { getRatio } from './image.utils'

export const CustomImage = React.forwardRef<HTMLSpanElement, ICustomImageProps>(
  ({ ratio, disabledEffect = false, effect = 'blur', sx, ...props }, ref) => {
    if (ratio) {
      return (
        <Box
          ref={ref}
          component="span"
          sx={{
            width: '100%',
            lineHeight: 1,
            display: 'block',
            overflow: 'hidden',
            position: 'relative',
            paddingTop: getRatio(ratio),
            '& .wrapper': {
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              position: 'absolute',
              backgroundSize: 'cover !important',
            },
            ...sx,
          }}
        >
          <Box
            component={LazyLoadImage}
            className="wrapper"
            effect={disabledEffect ? undefined : effect}
            placeholderSrc={
              disabledEffect
                ? '/assets/transparent.png'
                : '/assets/placeholder.svg'
            }
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            {...props}
          />
        </Box>
      )
    }

    return (
      <Box
        ref={ref}
        component="span"
        sx={[
          {
            lineHeight: 1,
            display: 'block',
            overflow: 'hidden',
            position: 'relative',
            '& .wrapper': {
              width: '100%',
              height: '100%',
              backgroundSize: 'cover !important',
            },
          },
          sx as Sx,
        ]}
      >
        <Box
          component={LazyLoadImage}
          className="wrapper"
          effect={disabledEffect ? undefined : effect}
          placeholderSrc={
            disabledEffect
              ? '/assets/transparent.png'
              : '/assets/placeholder.svg'
          }
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          {...props}
        />
      </Box>
    )
  }
)
