import { CSSObject } from '@mantine/core'
import { THEME_TRANSITIONS } from './transition.constants'
import { IThemeTransitionsProps } from './transition.types'

const createTransitions = (
  options?: IThemeTransitionsProps
): Pick<
  CSSObject,
  'transitionDuration' | 'transitionTimingFunction' | 'transitionProperty'
> => ({
  transitionDuration: THEME_TRANSITIONS.duration[options?.duration ?? 'md'],
  transitionProperty:
    THEME_TRANSITIONS.property[options?.property ?? 'default'],
  transitionTimingFunction:
    THEME_TRANSITIONS.timing[options?.timing ?? 'in-out'],
})

export const ThemeTransitions = createTransitions
