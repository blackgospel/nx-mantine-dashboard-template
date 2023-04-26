import { Accordion, ActionIcon, Box, Sx, useMantineTheme } from '@mantine/core'
import React from 'react'
import { Iconify } from '../iconify'
import { MenuItem } from '../menu-item'
import { IMenuAccordionProps } from './menu-accordion.types'

export const MenuAccordion: React.FC<IMenuAccordionProps> = ({
  children,
  sx,
  onClick,
  ...props
}) => {
  const theme = useMantineTheme()

  return (
    <Accordion unstyled multiple sx={[theme => ({}), sx as Sx]} {...props}>
      <Accordion.Item value="customization">
        <Accordion.Control>Customization</Accordion.Control>
        <Accordion.Panel>
          <Box>
            {[...Array(3)].map((_, index) => {
              return (
                <MenuItem
                  key={index}
                  rightSection={
                    <ActionIcon
                      color={theme.primaryColor}
                      sx={{ zIndex: 4 }}
                      onClick={onClick}
                    >
                      <Iconify icon="solar:arrow-to-top-left-bold-duotone" />
                    </ActionIcon>
                  }
                >
                  Menu Item {index}
                </MenuItem>
              )
            })}
          </Box>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="flexibility">
        <Accordion.Control>Flexibility</Accordion.Control>
        <Accordion.Panel>
          <Box>
            {[...Array(3)].map((_, index) => {
              return <MenuItem key={index}>Menu Item {index}</MenuItem>
            })}
          </Box>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="focus-ring">
        <Accordion.Control>No annoying focus ring</Accordion.Control>
        <Accordion.Panel>
          <Box>
            {[...Array(3)].map((_, index) => {
              return <MenuItem key={index}>Menu Item {index}</MenuItem>
            })}
          </Box>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}
