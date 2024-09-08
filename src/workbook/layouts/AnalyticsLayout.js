/* eslint-disable import/prefer-default-export */
import {
  ANALYTICS_TABSET,
  ROW,
  TAB,
  TABSET,
  ANALYTICS_ROW,
  ANALYTICS_HOME_COMP,
  ANALYTICS_TAB_HOME,
} from './definitions';

export const AnalyticsLayout = {
  global: {
    tabEnableRename: false,
    tabSetEnableDrag: true,
    tabSetEnableDivide: false,
    tabSetEnableMaximize: false,
    tabSetHeaderHeight: 30,
    tabSetTabStripHeight: 30,
  },
  layout: {
    type: ROW,
    id: ANALYTICS_ROW,
    children: [
      {
        type: TABSET,
        id: ANALYTICS_TABSET,
        weight: 1.5625,
        active: true,
        enableClose: false,
        children: [
          {
            type: TAB,
            id: ANALYTICS_TAB_HOME,
            name: 'Analytics',
            component: ANALYTICS_HOME_COMP,
            config: {

            },
            enableClose: false,
          },
        ],
      },
    ],
  },
  borders: [],
};
