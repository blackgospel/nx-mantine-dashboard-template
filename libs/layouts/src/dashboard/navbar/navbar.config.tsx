import { PATH_DASHBOARD } from '@omnidash/routes'

export const NAV_CONFIG = [
  {
    subheader: 'general',
    items: [
      {
        title: 'app',
        path: PATH_DASHBOARD.general.app,
        icon: 'solar:gamepad-bold',
      },
      {
        title: 'settings',
        path: PATH_DASHBOARD.general.settings,
        icon: 'solar:settings-bold',
      },
    ],
  },
]
