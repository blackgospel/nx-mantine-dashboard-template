import { ActionIcon, Tabs } from '@mantine/core'
import { Iconify } from '@omnidash/ui'
import { IGlobalTabItemProps } from './global-tab.types'

export const GlobalTab: React.FC<IGlobalTabItemProps> = ({
  value,
  children,
  id,
  label,
  pinned,
  onClose,
  ...props
}) => {
  return (
    <Tabs.Tab
      sx={theme => {
        const colors = theme.fn.variant({ variant: 'default' })
        return {
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          width: 200,
          maxWidth: 200,
          minWidth: 20,
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          height: '100%',
          paddingLeft: 12,
          borderRight: `1px solid ${colors.border}`,

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
      }}
      value={value}
      unstyled
      {...props}
    >
      {children}
      <ActionIcon
        component="span"
        variant="subtle"
        size="xs"
        onClick={onClose(id)}
        disabled={pinned}
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
    </Tabs.Tab>
  )
}
