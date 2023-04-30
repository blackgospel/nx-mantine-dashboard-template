import {
  Box,
  Checkbox,
  Divider,
  Group,
  Radio,
  Slider,
  Stack,
  Text,
} from '@mantine/core'
import { toTitle } from '@omnidash/utils'
import { FloatingWindow } from '../../floating-window'
import { useFilterFormContext } from '../match-matrix.form'
import { MATRIX_ATTRIBUTES } from '../matrix-matrix.constants'

export const FiltersWindow = () => {
  const form = useFilterFormContext()

  console.log({
    hi: form.getInputProps('attributes'),
  })

  return (
    <FloatingWindow>
      <Stack sx={{ padding: 16 }}>
        <Checkbox
          label={
            <Text size="sm">
              Toggle between supporter/opposition highlighting
            </Text>
          }
          {...form.getInputProps('supporterToggle', {
            type: 'checkbox',
          })}
        />

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Checkbox
          label={<Text size="sm">Toggle totals</Text>}
          {...form.getInputProps('totalToggle', {
            type: 'checkbox',
          })}
        />

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box>
          <Text size="sm" mb="xs">
            Last number of games
          </Text>
          <Slider
            defaultValue={10}
            min={1}
            max={10}
            step={1}
            marks={[...Array(10)].map((_, index) => {
              return { value: index + 1 }
            })}
            {...form.getInputProps('gamesCount')}
          />
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Radio.Group label="Venue Filter" {...form.getInputProps('venue')}>
          <Group mt="xs">
            <Radio value="all" label="All" />
            <Radio disabled value="home" label="Home" />
            <Radio disabled value="away" label="Away" />
          </Group>
        </Radio.Group>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Checkbox.Group label={<Text color="dimmed">Competition Filter</Text>}>
          <Group mt="xs">
            <Checkbox disabled value="premierLeague" label="Premier League" />
          </Group>
        </Checkbox.Group>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Checkbox.Group
          label="Attribute Filter"
          {...form.getInputProps('attributes')}
        >
          <Group mt="xs">
            {Object.values(MATRIX_ATTRIBUTES).map(item => {
              return <Checkbox key={item} value={item} label={toTitle(item)} />
            })}
          </Group>
        </Checkbox.Group>
      </Stack>
    </FloatingWindow>
  )
}
