import { Box, createPolymorphicComponent } from '@mantine/core'
import React from 'react'
import { ILogoProps } from './logo.types'

const _Logo = React.forwardRef<HTMLDivElement, ILogoProps>(
  ({ color = 'gray', sx, ...props }, ref) => {
    return (
      <Box
        sx={{
          width: 60,
          height: 60,
          display: 'inline-flex',
          ...sx,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          zoomAndPan="magnify"
          viewBox="0 0 375 374.999991"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
          width="100%"
          height="100%"
        >
          <defs>
            <g />
          </defs>
          <g fill={color} fillOpacity="1">
            <g transform="translate(39.526839, 265.595027)">
              <g>
                <path d="M 176.234375 -193.398438 L 137.554688 -193.398438 C 137.070312 -193.398438 135.621094 -193.15625 135.378906 -192.671875 L 89.6875 -128.125 L 69.382812 -156.410156 L 24.417969 -156.410156 C 38.679688 -136.347656 52.699219 -116.28125 66.964844 -96.699219 L 0.726562 -3.625 C -0.726562 -1.933594 0.242188 0 2.660156 0 L 41.339844 0 C 41.824219 0 43.273438 -0.242188 43.515625 -0.726562 L 89.6875 -65.273438 L 109.753906 -36.988281 L 154.71875 -36.988281 C 140.457031 -57.050781 126.191406 -77.117188 111.929688 -96.699219 L 178.652344 -189.773438 C 179.859375 -191.464844 178.894531 -193.398438 176.234375 -193.398438 Z M 176.234375 -193.398438 " />
              </g>
            </g>
          </g>
          <g fill={color} fillOpacity="1">
            <g transform="translate(206.855738, 350.667904)">
              <g>
                <path d="M 88.722656 -107.335938 C 74.941406 -113.863281 61.402344 -113.863281 60.195312 -113.863281 C 47.867188 -113.863281 36.019531 -121.117188 36.019531 -135.136719 C 36.019531 -150.609375 46.898438 -158.585938 60.195312 -158.585938 C 72.765625 -158.585938 83.402344 -152.058594 83.886719 -138.28125 C 83.886719 -137.554688 85.09375 -136.347656 86.546875 -136.347656 L 116.765625 -136.347656 C 118.457031 -136.347656 119.664062 -137.554688 119.421875 -138.28125 C 118.941406 -171.15625 93.316406 -193.398438 60.195312 -193.398438 C 29.25 -193.398438 0 -171.398438 0 -135.136719 C 0 -112.65625 11.363281 -95.492188 31.425781 -86.304688 C 45.449219 -79.777344 58.503906 -79.777344 60.195312 -79.777344 C 71.074219 -79.292969 84.371094 -70.589844 84.371094 -56.328125 C 84.371094 -43.515625 73.007812 -34.8125 60.195312 -34.8125 C 60.195312 -34.8125 60.195312 -34.8125 59.953125 -34.8125 L 59.953125 0 C 60.195312 0 60.195312 0 60.195312 0 C 91.140625 0 120.148438 -20.066406 120.148438 -56.328125 C 120.148438 -79.050781 109.027344 -97.90625 88.722656 -107.335938 Z M 88.722656 -107.335938 " />
              </g>
            </g>
          </g>
          <g fill={color} fillOpacity="1">
            <g transform="translate(56.919722, 318.974105)">
              <g>
                <path d="M 10.34375 -8.875 L 16.015625 0 L 10.859375 0 L 7.546875 -5.453125 L 4.359375 0 L -0.265625 0 L 5.34375 -8.71875 L 0.046875 -17.078125 L 5.203125 -17.078125 L 8.0625 -12.203125 L 10.953125 -17.078125 L 15.4375 -17.078125 Z M 10.34375 -8.875 " />
              </g>
            </g>
          </g>
          <g fill={color} fillOpacity="1">
            <g transform="translate(87.416338, 318.974105)">
              <g>
                <path d="M 13.078125 -3.953125 L 13.078125 0 L 1.3125 0 L 1.3125 -17.078125 L 12.828125 -17.078125 L 12.828125 -13.265625 L 5.53125 -13.265625 L 5.53125 -10.4375 L 11.8125 -10.4375 L 11.8125 -6.890625 L 5.53125 -6.890625 L 5.53125 -3.953125 Z M 13.078125 -3.953125 " />
              </g>
            </g>
          </g>
          <g fill={color} fillOpacity="1">
            <g transform="translate(116.007147, 318.974105)">
              <g>
                <path d="M 16.046875 -17.078125 L 16.046875 0 L 12.015625 0 L 5.25 -9.859375 L 5.25 0 L 1.3125 0 L 1.3125 -17.078125 L 5.3125 -17.078125 L 12.09375 -6.828125 L 12.09375 -17.078125 Z M 16.046875 -17.078125 " />
              </g>
            </g>
          </g>
          <g fill={color} fillOpacity="1">
            <g transform="translate(148.191782, 318.974105)">
              <g>
                <path d="M 16.796875 -8.546875 C 16.796875 -5.441406 16.164062 -3.195312 14.90625 -1.8125 C 13.644531 -0.425781 11.597656 0.265625 8.765625 0.265625 C 5.804688 0.265625 3.726562 -0.382812 2.53125 -1.6875 C 1.332031 -3 0.734375 -5.285156 0.734375 -8.546875 C 0.734375 -11.648438 1.363281 -13.890625 2.625 -15.265625 C 3.882812 -16.648438 5.929688 -17.34375 8.765625 -17.34375 C 11.722656 -17.34375 13.800781 -16.6875 15 -15.375 C 16.195312 -14.070312 16.796875 -11.796875 16.796875 -8.546875 Z M 5.53125 -4.90625 C 5.757812 -4.445312 6.101562 -4.125 6.5625 -3.9375 C 7.03125 -3.757812 7.765625 -3.671875 8.765625 -3.671875 C 9.765625 -3.671875 10.492188 -3.757812 10.953125 -3.9375 C 11.421875 -4.125 11.773438 -4.445312 12.015625 -4.90625 C 12.191406 -5.269531 12.320312 -5.738281 12.40625 -6.3125 C 12.488281 -6.894531 12.53125 -7.640625 12.53125 -8.546875 C 12.53125 -9.472656 12.488281 -10.226562 12.40625 -10.8125 C 12.320312 -11.40625 12.191406 -11.882812 12.015625 -12.25 C 11.796875 -12.726562 11.453125 -13.0625 10.984375 -13.25 C 10.523438 -13.4375 9.785156 -13.53125 8.765625 -13.53125 C 7.753906 -13.53125 7.015625 -13.4375 6.546875 -13.25 C 6.085938 -13.0625 5.75 -12.726562 5.53125 -12.25 C 5.34375 -11.882812 5.207031 -11.40625 5.125 -10.8125 C 5.050781 -10.226562 5.015625 -9.472656 5.015625 -8.546875 C 5.015625 -7.640625 5.050781 -6.894531 5.125 -6.3125 C 5.207031 -5.738281 5.34375 -5.269531 5.53125 -4.90625 Z M 5.53125 -4.90625 " />
              </g>
            </g>
          </g>
          <g fill={color} fillOpacity="1">
            <g transform="translate(180.566992, 318.974105)">
              <g>
                <path d="M 16.046875 -17.078125 L 16.046875 0 L 12.015625 0 L 5.25 -9.859375 L 5.25 0 L 1.3125 0 L 1.3125 -17.078125 L 5.3125 -17.078125 L 12.09375 -6.828125 L 12.09375 -17.078125 Z M 16.046875 -17.078125 " />
              </g>
            </g>
          </g>
          <g fill={color} fillOpacity="1">
            <g transform="translate(261.258488, 149.43581)">
              <g>
                <path d="M 7.78125 -6.375 L 4.328125 -7.1875 C 2.953125 -7.519531 2.015625 -8.019531 1.515625 -8.6875 C 1.015625 -9.363281 0.765625 -10.328125 0.765625 -11.578125 C 0.765625 -13.554688 1.285156 -15.007812 2.328125 -15.9375 C 3.367188 -16.875 4.988281 -17.34375 7.1875 -17.34375 C 8.09375 -17.34375 8.898438 -17.304688 9.609375 -17.234375 C 10.316406 -17.160156 10.972656 -17.035156 11.578125 -16.859375 L 11.578125 -13.078125 C 10.191406 -13.304688 9.238281 -13.4375 8.71875 -13.46875 C 8.207031 -13.507812 7.671875 -13.53125 7.109375 -13.53125 C 6.347656 -13.53125 5.789062 -13.398438 5.4375 -13.140625 C 5.09375 -12.890625 4.921875 -12.46875 4.921875 -11.875 C 4.921875 -11.582031 4.972656 -11.359375 5.078125 -11.203125 C 5.191406 -11.046875 5.40625 -10.929688 5.71875 -10.859375 L 8.984375 -10.109375 C 9.929688 -9.890625 10.613281 -9.675781 11.03125 -9.46875 C 11.445312 -9.257812 11.78125 -8.988281 12.03125 -8.65625 C 12.320312 -8.3125 12.535156 -7.867188 12.671875 -7.328125 C 12.804688 -6.785156 12.875 -6.125 12.875 -5.34375 C 12.875 -3.363281 12.347656 -1.929688 11.296875 -1.046875 C 10.242188 -0.171875 8.613281 0.265625 6.40625 0.265625 C 5.28125 0.265625 4.207031 0.195312 3.1875 0.0625 C 2.164062 -0.0703125 1.375 -0.238281 0.8125 -0.4375 L 0.8125 -4.4375 C 1.539062 -4.195312 2.40625 -4.007812 3.40625 -3.875 C 4.40625 -3.738281 5.40625 -3.671875 6.40625 -3.671875 C 7.195312 -3.671875 7.75 -3.769531 8.0625 -3.96875 C 8.375 -4.175781 8.53125 -4.578125 8.53125 -5.171875 C 8.53125 -5.554688 8.476562 -5.832031 8.375 -6 C 8.269531 -6.175781 8.070312 -6.300781 7.78125 -6.375 Z M 7.78125 -6.375 " />
              </g>
            </g>
          </g>
          <g fill={color} fillOpacity="1">
            <g transform="translate(275.960832, 149.43581)">
              <g>
                <path d="M 13.859375 -17.078125 L 13.859375 -13.265625 L 9.203125 -13.265625 L 9.203125 0 L 4.984375 0 L 4.984375 -13.265625 L 0.328125 -13.265625 L 0.328125 -17.078125 Z M 13.859375 -17.078125 " />
              </g>
            </g>
          </g>
          <g fill={color} fillOpacity="1">
            <g transform="translate(291.534417, 149.43581)">
              <g>
                <path d="M 4.359375 0 L -0.078125 0 L 6.234375 -17.078125 L 10.625 -17.078125 L 16.78125 0 L 12.359375 0 L 11.46875 -2.859375 L 5.25 -2.859375 Z M 8.328125 -12.875 C 8.179688 -12.375 8.019531 -11.835938 7.84375 -11.265625 C 7.675781 -10.691406 7.394531 -9.757812 7 -8.46875 L 6.296875 -6.203125 L 10.40625 -6.203125 L 9.703125 -8.46875 C 9.460938 -9.15625 9.222656 -9.882812 8.984375 -10.65625 C 8.753906 -11.425781 8.535156 -12.164062 8.328125 -12.875 Z M 8.328125 -12.875 " />
              </g>
            </g>
          </g>
          <g fill={color} fillOpacity="1">
            <g transform="translate(309.667245, 149.43581)">
              <g>
                <path d="M 13.859375 -17.078125 L 13.859375 -13.265625 L 9.203125 -13.265625 L 9.203125 0 L 4.984375 0 L 4.984375 -13.265625 L 0.328125 -13.265625 L 0.328125 -17.078125 Z M 13.859375 -17.078125 " />
              </g>
            </g>
          </g>
          <g fill={color} fillOpacity="1">
            <g transform="translate(325.240829, 149.43581)">
              <g>
                <path d="M 7.78125 -6.375 L 4.328125 -7.1875 C 2.953125 -7.519531 2.015625 -8.019531 1.515625 -8.6875 C 1.015625 -9.363281 0.765625 -10.328125 0.765625 -11.578125 C 0.765625 -13.554688 1.285156 -15.007812 2.328125 -15.9375 C 3.367188 -16.875 4.988281 -17.34375 7.1875 -17.34375 C 8.09375 -17.34375 8.898438 -17.304688 9.609375 -17.234375 C 10.316406 -17.160156 10.972656 -17.035156 11.578125 -16.859375 L 11.578125 -13.078125 C 10.191406 -13.304688 9.238281 -13.4375 8.71875 -13.46875 C 8.207031 -13.507812 7.671875 -13.53125 7.109375 -13.53125 C 6.347656 -13.53125 5.789062 -13.398438 5.4375 -13.140625 C 5.09375 -12.890625 4.921875 -12.46875 4.921875 -11.875 C 4.921875 -11.582031 4.972656 -11.359375 5.078125 -11.203125 C 5.191406 -11.046875 5.40625 -10.929688 5.71875 -10.859375 L 8.984375 -10.109375 C 9.929688 -9.890625 10.613281 -9.675781 11.03125 -9.46875 C 11.445312 -9.257812 11.78125 -8.988281 12.03125 -8.65625 C 12.320312 -8.3125 12.535156 -7.867188 12.671875 -7.328125 C 12.804688 -6.785156 12.875 -6.125 12.875 -5.34375 C 12.875 -3.363281 12.347656 -1.929688 11.296875 -1.046875 C 10.242188 -0.171875 8.613281 0.265625 6.40625 0.265625 C 5.28125 0.265625 4.207031 0.195312 3.1875 0.0625 C 2.164062 -0.0703125 1.375 -0.238281 0.8125 -0.4375 L 0.8125 -4.4375 C 1.539062 -4.195312 2.40625 -4.007812 3.40625 -3.875 C 4.40625 -3.738281 5.40625 -3.671875 6.40625 -3.671875 C 7.195312 -3.671875 7.75 -3.769531 8.0625 -3.96875 C 8.375 -4.175781 8.53125 -4.578125 8.53125 -5.171875 C 8.53125 -5.554688 8.476562 -5.832031 8.375 -6 C 8.269531 -6.175781 8.070312 -6.300781 7.78125 -6.375 Z M 7.78125 -6.375 " />
              </g>
            </g>
          </g>
        </svg>
      </Box>
    )
  }
)

_Logo.displayName = 'Logo'

export const Logo = createPolymorphicComponent<'div', ILogoProps>(_Logo)