import { ActionIcon, Sx, Tabs, Text, Transition } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { MOBILE_BREAKPOINT } from '@omnidash/config'
import { useStore } from '@omnidash/store'
import { Iconify } from '@omnidash/ui'
import { useCallback, useEffect } from 'react'
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
  const [mounted, { open, close }] = useDisclosure(false)

  const {
    actions: { deleteGlobalTab },
  } = useStore.use.globalTabs()

  const disabled = pinned

  const handleTabDelete = useCallback(
    (id?: string) => (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation()
      if (!id) return
      close()
      setTimeout(() => {
        deleteGlobalTab(id)
      }, 160)
    },
    []
  )

  useEffect(() => {
    open()
  }, [])

  return (
    <Transition
      transition={'pop'}
      mounted={mounted}
      timingFunction="ease-in-out"
      duration={150}
    >
      {styles => {
        return (
          <Tabs.Tab
            style={styles}
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
                    // borderRight: 'none',
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
            <Text size="xs" lineClamp={1} align="left">
              {label}
            </Text>

            {!disabled && (
              <ActionIcon
                component="span"
                variant="subtle"
                size="xs"
                onClick={handleTabDelete(id)}
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
      }}
    </Transition>
  )
}
