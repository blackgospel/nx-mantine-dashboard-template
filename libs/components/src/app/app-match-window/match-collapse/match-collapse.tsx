import {
  ActionIcon,
  Text,
  Title,
  Tooltip,
  useMantineTheme,
} from '@mantine/core'
import { Iconify, MenuCollapse, MenuItem } from '@omnidash/ui'
import { IMatchCollapseProps } from './match-collapse.types'

export const MatchCollapse: React.FC<IMatchCollapseProps> = ({
  data,
  name,
  onClick,
}) => {
  const theme = useMantineTheme()

  return (
    <MenuCollapse
      key={name}
      trigger={options => (
        <MenuItem data-active={options?.opened} onClick={options?.toggle}>
          <Title order={5}>{name}</Title>
        </MenuItem>
      )}
    >
      {Object.values(data[name]?.nodes ?? {}).map((match, index) => {
        if (!match || !match.data) return null

        return (
          <MenuItem
            key={match?.data?.id ?? index}
            sx={theme => ({
              borderBottom: `1px solid ${
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[5]
                  : theme.colors.gray[2]
              }`,
            })}
            rightSection={
              <Tooltip
                label="Open in new tab"
                position="right"
                transitionProps={{ transition: 'pop' }}
                openDelay={750}
              >
                <ActionIcon
                  color={theme.primaryColor}
                  sx={{ zIndex: 4 }}
                  onClick={onClick(match.data)}
                >
                  <Iconify
                    icon="solar:arrow-to-top-left-bold-duotone"
                    width={16}
                  />
                </ActionIcon>
              </Tooltip>
            }
          >
            <Text size="xs">{match.data.homeTeam.name}</Text>
            <Text size="xs">{match.data.awayTeam.name}</Text>
          </MenuItem>
        )
      })}
    </MenuCollapse>
  )
}
