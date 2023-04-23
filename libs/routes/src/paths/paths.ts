import { createPath } from './paths.utils'

const ROOTS_AUTH = '/auth'
const ROOTS_DASHBOARD = '/dashboard'

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: createPath(ROOTS_DASHBOARD, '/app'),
  },
}

export const PATH_AUTH = {
  root: ROOTS_AUTH,
}

export const PATH_MISC = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/403',
  page404: '/404',
  page500: '/500',
}

export const PATH_AFTER_LOGIN = PATH_DASHBOARD.general.app
