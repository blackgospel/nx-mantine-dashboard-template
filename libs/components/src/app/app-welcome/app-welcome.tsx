import { Box, Stack, Text, Title } from '@mantine/core'
import { CONTENT_BREAKPOINT } from '@omnidash/config'
import { IAppWelcomeProps } from './app-welcome.types'

export const AppWelcome: React.FC<IAppWelcomeProps> = ({
  title,
  description,
  action,
  image,
}) => {
  return (
    <Box
      sx={theme => {
        return {
          height: '100%',
          display: 'flex',
          overflow: 'hidden',
          position: 'relative',
          color: theme.fn.themeColor(theme.primaryColor, 9),
          flexDirection: 'column',
          borderBottom: `1px solid ${
            theme.colorScheme === 'dark'
              ? theme.colors.dark[5]
              : theme.colors.gray[2]
          }`,

          [theme.fn.largerThan(CONTENT_BREAKPOINT)]: {
            flexDirection: 'row',
          },
        }
      }}
    >
      <Stack
        sx={theme => {
          return {
            flexGrow: 1,
            justifyContent: 'center',
            paddingLeft: 40,
            zIndex: 1,
            alignItems: 'center',
            paddingBlock: 40,
            paddingRight: 40,
            textAlign: 'center',

            [theme.fn.largerThan(CONTENT_BREAKPOINT)]: {
              alignItems: 'flex-start',
              paddingBlock: 0,
              paddingRight: 0,
              textAlign: 'left',
            },
          }
        }}
      >
        <Title
          order={3}
          sx={theme => {
            return { whiteSpace: 'pre-line' }
          }}
        >
          {title}
        </Title>

        <Text
          size="sm"
          sx={theme => {
            return {
              opacity: 0.8,

              [theme.fn.largerThan('xs')]: {
                marginBottom: 24,
              },

              [theme.fn.largerThan('md')]: {
                marginBottom: 32,
              },
            }
          }}
        >
          {description}
        </Text>

        {action && action}
      </Stack>

      <Box sx={{ zIndex: 1 }}>{image && image}</Box>

      <Box
        sx={theme => {
          return {
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: theme.white,

            '&:before': {
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              position: 'absolute',
              content: '""',
              opacity: 0.2,
              background: theme.fn.gradient({
                deg: 135,
                from: theme.fn.themeColor(theme.primaryColor, 3),
                to: theme.fn.themeColor(theme.primaryColor),
              }),
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
            },
          }
        }}
      />
    </Box>
  )
}
