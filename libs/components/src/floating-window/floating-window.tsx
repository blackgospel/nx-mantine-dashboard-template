import { Affix, Card, Title } from '@mantine/core'
import { MenuCollapse, MenuItem } from '@omnidash/ui'
import { IFloatingWindowProps } from './floating-window.types'

export const FloatingWindow: React.FC<IFloatingWindowProps> = ({
  sx,
  children,
}) => {
  return (
    <Affix position={{ bottom: 40, left: '50%' }}>
      <Card
        withBorder
        sx={{
          overflow: 'hidden',
          touchAction: 'none',
          backfaceVisibility: 'hidden',
          pointerEvents: 'auto',
          minWidth: 450,
          maxWidth: 450,
          width: '100%',
          margin: 0,
        }}
      >
        <Card.Section>
          <MenuCollapse
            trigger={options => (
              <MenuItem data-active={options?.opened} onClick={options?.toggle}>
                <Title order={5}>Filters</Title>
              </MenuItem>
            )}
          >
            {children}
          </MenuCollapse>
        </Card.Section>
      </Card>
    </Affix>
  )
}
