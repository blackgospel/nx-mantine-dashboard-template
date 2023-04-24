import { ActionIcon, Avatar } from '@mantine/core'
import React from 'react'
import { ICustomAvatarProps } from './custom-avatar.types'

export const CustomAvatar = React.forwardRef<
  HTMLButtonElement,
  ICustomAvatarProps
>(({ children, sx, color, onClick, src, alt }, ref) => {
  return (
    <ActionIcon
      ref={ref}
      variant="default"
      sx={{ width: 32, height: 32, ...sx }}
      onClick={onClick}
    >
      <Avatar radius="xl" src={src} alt={alt} />
    </ActionIcon>
  )
})
