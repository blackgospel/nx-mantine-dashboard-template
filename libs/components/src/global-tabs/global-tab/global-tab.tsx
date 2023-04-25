import { ActionIcon, Sx, Tabs } from '@mantine/core'
import { MOBILE_BREAKPOINT } from '@omnidash/config'
import { Iconify } from '@omnidash/ui'
import { IGlobalTabItemProps } from './global-tab.types'

export const GlobalTab: React.FC<IGlobalTabItemProps> = ({
  value,
  children,
  id,
  label,
  pinned,
  onClose,
  sx,
  ...props
}) => {
  const disabled = pinned

  return (
    <Tabs.Tab
      sx={[
        theme => {
          const colors = theme.fn.variant({ variant: 'default' })
          return {
            display: 'flex',
            alignItems: 'center',
            width: 150,
            maxWidth: 150,
            minWidth: 100,
            position: 'relative',
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            height: '100%',
            paddingLeft: 12,
            borderRight: `1px solid ${colors.border}`,

            [theme.fn.largerThan(MOBILE_BREAKPOINT)]: {
              width: 200,
              maxWidth: 200,
              minWidth: 20,
            },

            '&:last-child': {
              borderRight: 'none',
            },

            ...theme.fn.hover({
              backgroundColor: colors.background,
            }),

            "&[data-active='true']": {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[4]
                  : theme.colors.gray[2],
            },
          }
        },
        sx as Sx,
      ]}
      value={value}
      unstyled
      {...props}
    >
      {children}

      {!disabled && (
        <ActionIcon
          component="span"
          variant="subtle"
          size="xs"
          onClick={onClose(id)}
          data-id={id}
          sx={theme => ({
            zIndex: 5,
            ...theme.fn.hover({
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[3]
                  : theme.colors.gray[2],
            }),
          })}
        >
          <Iconify icon="eva:close-outline" />
        </ActionIcon>
      )}
    </Tabs.Tab>
  )
}
