import { Icon } from '@iconify/react'
import {
  Anchor,
  Box,
  Button,
  Center,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { toTitle } from '@omnidash/utils'
import Link from 'next/link'
import { useAuthForm } from './auth-form.hooks'

export const AuthForm = () => {
  const { form, toggle, type, handleSubmit, isLogin, loading } = useAuthForm()

  return (
    <Center
      sx={{
        height: '100vh',
      }}
    >
      <Box sx={{ maxWidth: 420, width: '100%' }}>
        <Paper radius="md" p="xl" withBorder>
          <Title order={2}>{toTitle(type)}</Title>

          <Text weight={500}>Welcome to Omnidash</Text>

          <Group grow mb="md" mt="md">
            <Button
              leftIcon={<Icon icon="basil:google-solid" />}
              variant="default"
              color="gray"
            >
              Google
            </Button>
            <Button
              leftIcon={<Icon icon="fe:github-alt" />}
              sx={theme => ({
                backgroundColor: theme.colors.blue[7],
                color: theme.white,
                '&:not([data-disabled]):hover': {
                  backgroundColor: theme.fn.darken(theme.colors.blue[7], 0.1),
                },
              })}
            >
              Github
            </Button>
          </Group>

          <Divider
            label="Or continue with email"
            labelPosition="center"
            my="lg"
          />

          <form
            noValidate
            onSubmit={form.onSubmit((values: any) => handleSubmit(values))}
          >
            <Stack>
              {!isLogin && (
                <TextInput
                  required
                  label="Name"
                  placeholder="Your name"
                  {...form.getInputProps('name')}
                />
              )}

              <TextInput
                required
                label="Email"
                placeholder="Your email"
                {...form.getInputProps('email')}
              />

              <PasswordInput
                required
                label="Password"
                placeholder="Your password"
                {...form.getInputProps('password')}
              />

              {!isLogin && (
                <Text size="xs">
                  By signing up, I agree to{' '}
                  <Box
                    component={Link}
                    href="#"
                    sx={theme => ({
                      textDecoration: 'underline',
                      color:
                        theme.colorScheme === 'dark'
                          ? theme.white
                          : theme.black,
                    })}
                  >
                    Terms of Service
                  </Box>{' '}
                  and{' '}
                  <Box
                    component={Link}
                    href="#"
                    sx={theme => ({
                      textDecoration: 'underline',
                      color:
                        theme.colorScheme === 'dark'
                          ? theme.white
                          : theme.black,
                    })}
                  >
                    Privacy Policy
                  </Box>
                </Text>
              )}
            </Stack>

            <Group position="apart" mt="xl">
              <Anchor
                component="button"
                type="button"
                color="dimmed"
                onClick={() => toggle()}
                size="xs"
              >
                {!isLogin
                  ? 'Already have an account? Login'
                  : "Don't have an account? Register"}
              </Anchor>
              <Button variant="filled" type="submit" loading={loading}>
                {toTitle(type)}
              </Button>
            </Group>
          </form>
        </Paper>
      </Box>
    </Center>
  )
}
