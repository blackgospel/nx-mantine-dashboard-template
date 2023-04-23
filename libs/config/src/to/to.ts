import { MantineTheme } from '@mantine/core'
import { notifications } from '@mantine/notifications'

export const to = async <T, U = Error>(
  promise: Promise<T>,
  notify = true
): Promise<[U, undefined] | [null, T]> => {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((error: U) => {
      if (notify) {
        notifications.show({
          title: `Network Error`,
          message: `Error occurred: ${error}`,
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
      }

      console.error(error)
      return [error, undefined]
    })
}
