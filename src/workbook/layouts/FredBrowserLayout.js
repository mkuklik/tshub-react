/* eslint-disable import/prefer-default-export */
import { TAB, FRED_COMP, ROW, TABSET, FRED_TABLE_COMP } from "./definitions";

export const FRED_ROW_HORI = "FRED_ROW_HORI";
export const FRED_ROW_VERT = "FRED_ROW_VERT";
export const FRED_TOP_TABSET = "FRED_TOP_TABSET";
export const FRED_TOP_TAB = "FRED_TOP_TAB";
export const FRED_BOTTOM_TABSET = "FRED_BOTTOM_TABSET";
export const FRED_BOTTOM_TAB = "FRED_BOTTOM_TAB";

export const FredBrowserLayout = {
  global: {
    tabEnableRename: false,
    tabSetEnableMaximize: false,
    tabSetHeaderHeight: 30,
    tabSetTabStripHeight: 30,
  },
  layout: {
    type: ROW,
    id: FRED_ROW_HORI,
    children: [
      {
        type: ROW,
        id: FRED_ROW_VERT,
        weight: 50,
        children: [
          {
            type: TABSET,
            id: FRED_TOP_TABSET,
            weight: 50,
            tabStripHeight: 0,
            children: [
              {
                type: TAB,
                id: FRED_TOP_TAB,
                name: "",
                component: FRED_COMP,
                enableClose: false,
              },
            ],
            active: true,
          },
          {
            type: TABSET,
            id: FRED_BOTTOM_TABSET,
            weight: 50,
            enableMaximize: false,
            tabStripHeight: 0,
            children: [
              {
                type: TAB,
                id: FRED_BOTTOM_TAB,
                name: " ",
                component: FRED_TABLE_COMP,
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
