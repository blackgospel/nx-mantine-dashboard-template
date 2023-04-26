import { Box, Sx, createPolymorphicComponent } from '@mantine/core'
import React from 'react'
import { IMenuItemProps } from './menu-item.types'

export const _MenuItem = React.forwardRef<HTMLDivElement, IMenuItemProps>(
  ({ children, sx, color, primary, icon, rightSection, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        sx={[
          theme => ({
            ...theme.fn.fontStyles(),
            WebkitTapHighlightColor: 'transparent',
            border: 0,
            outline: 0,
            width: '100%',
            textAlign: 'left',
            textDecoration: 'none',
            boxSizing: 'border-box',
            padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
            cursor: 'pointer',
            color: color
              ? theme.fn.variant({
                  variant: 'light',
                  primaryFallback: false,
                  color,
                }).color
              : theme.colorScheme === 'dark'
              ? theme.colors.dark[0]
              : theme.black,
            display: 'flex',
            alignItems: 'center',

            '&:disabled': {
              color:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[3]
                  : theme.colors.gray[5],
              pointerEvents: 'none',
              userSelect: 'none',
            },

            ...theme.fn.hover({
              backgroundColor:
                color || primary
                  ? theme.fn.variant({
                      variant: 'light',
                      color: primary ? theme.primaryColor : color,
                    }).hover
                  : theme.colorScheme === 'dark'
                  ? theme.fn.rgba(theme.colors.dark[3], 0.35)
                  : theme.colors.gray[1],
            }),
          }),
          sx as Sx,
        ]}
        {...props}
      >
        {icon && (
          <Box
            sx={theme => ({
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: theme.spacing.xs,
            })}
          >
            {icon}
          </Box>
        )}
        <Box sx={{ flex: 1 }}>{children}</Box>
        {rightSection && <>{rightSection}</>}
      </Box>
    )
  }
)

_MenuItem.displayName = 'MenuItem'

export const MenuItem = createPolymorphicComponent<'div', IMenuItemProps>(
  _MenuItem
)
