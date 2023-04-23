import { MantineTheme } from '@mantine/core'
import { NotificationProps, notifications } from '@mantine/notifications'

export const errorNotification = ({
  title = 'Application Error',
  message = 'An error occurred',
}: NotificationProps) =>
  notifications.show({
    title,
    message,
    autoClose: 3000,

    styles: (theme: MantineTheme) => ({
      root: {
        backgroundColor: theme.colors.red[5],
        borderColor: theme.colors.red[5],

        '&::before': { backgroundColor: theme.white },
      },

      title: { color: theme.white },
      description: { color: theme.white },
      closeButton: {
        color: theme.white,
        '&:hover': { backgroundColor: theme.colors.red[6] },
      },
    }),
  })
