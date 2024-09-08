/* eslint-disable import/prefer-default-export */
import {
  TAB,
  TSB_COMP,
  ROW,
  TABSET,
  TSB_TABLE_COMP,
} from './definitions';

export const TSB_ROW_HORI = 'TSB_ROW_HORI';
export const TSB_ROW_VERT = 'TSB_ROW_VERT';
export const TSB_TOP_TABSET = 'TSB_TOP_TABSET';
export const TSB_TOP_TAB = 'TSB_TOP_TAB';
export const TSB_BOTTOM_TABSET = 'TSB_BOTTOM_TABSET';
export const TSB_BOTTOM_TAB = 'TSB_BOTTOM_TAB';


export const TimeseriesBrowserLayout = {
  global: {
    tabEnableRename: false,
    tabSetEnableMaximize: false,
    tabSetHeaderHeight: 30,
    tabSetTabStripHeight: 30,
  },
  layout: {
    type: ROW,
    id: TSB_ROW_HORI,
    children: [
      {
        type: ROW,
        id: TSB_ROW_VERT,
        weight: 50,
        children: [
          {
            type: TABSET,
            id: TSB_TOP_TABSET,
            weight: 50,
            tabStripHeight: 0,
            children: [
              {
                type: TAB,
                id: TSB_TOP_TAB,
                name: '',
                component: TSB_COMP,
                enableClose: false,
              },
            ],
            active: true,
          },
          {
            type: TABSET,
            id: TSB_BOTTOM_TABSET,
            weight: 50,
            enableMaximize: false,
            tabStripHeight: 0,
            children: [
              {
                type: TAB,
                id: TSB_BOTTOM_TAB,
                name: ' ',
                component: TSB_TABLE_COMP,
                enableClose: false,
              },
            ],
          },
        ],
      },
    ],
  },
  borders: [],
};
