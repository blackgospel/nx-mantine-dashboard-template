import {
  Box,
  Checkbox,
  Divider,
  Group,
  Radio,
  SegmentedControl,
  Stack,
  Text,
} from '@mantine/core'
import { toTitle } from '@omnidash/utils'
import { FloatingWindow } from '../../floating-window'
import { useFilterFormContext } from '../match-matrix.form'
import { MATRIX_ATTRIBUTES } from '../matrix-matrix.constants'

export const FiltersWindow = () => {
  const form = useFilterFormContext()

  return (
    <FloatingWindow initialState={false}>
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
          <SegmentedControl
            data={[
              { value: '1', label: '1' },
              { value: '3', label: '3' },
              { value: '5', label: '5' },
              { value: '7', label: '7' },
              { value: '10', label: '10' },
            ]}
            value={form.getInputProps('gamesCount').value}
            onChange={value => form.getInputProps('gamesCount').onChange()}
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

        {/* <Checkbox.Group label={<Text color="dimmed">Competition Filter</Text>}>
          <Group mt="xs">
            <Checkbox disabled value="premierLeague" label="Premier League" />
          </Group>
        </Checkbox.Group>

        <Divider sx={{ borderStyle: 'dashed' }} /> */}

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
