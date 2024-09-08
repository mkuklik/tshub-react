/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  TIMESERIES_BROWSER_TAB,
  SERIES_OPTIONS_TAB,
  GRAPH_OPTIONS_TAB,
  GRAPH_SERIES_LIST_BORDER_TAB,
  ANALYTICS_BORDER_TAB,
  TABLE_BORDER_TAB,
  TAB,
  UPLOAD_TAB,
  UPLOAD_COMP,
  GRAPH_OPTIONS_COMP,
  SERIES_OPTIONS_COMP,
  TABLE_COMP,
  GRAPH_SERIES_LIST_COMP,
  ANALYTICS_FLEXLAYOUT,
  TIMESERIES_BROWSER_FLEXLAYOUT,
  GRAPH_EXPORT_TAB,
  GRAPH_EXPORT_COMP,
  SERIESINFO_TAB,
  SERIESINFO_COMP,
} from './definitions';
import { AnalyticsLayout } from './AnalyticsLayout';
import { TimeseriesBrowserLayout } from './TimeSeriesBrowserLayout';


export const MainLayout = {
  global: {
    tabEnableRename: false,
    tabSetEnableDrag: true,
    tabSetEnableDivide: false,
    tabSetEnableDeleteWhenEmpty: false,
    tabSetHeaderHeight: 30,
    tabSetTabStripHeight: 30,
  },
  layout: {

  },
  borders: [
    {
      type: 'border',
      selected: 0,
      location: 'left',
      size: 400,
      children: [
        {
          type: TAB,
          id: TIMESERIES_BROWSER_TAB,
          name: 'Timeseries Browser',
          // component: TIMESERIES_BROWSER,
          component: TIMESERIES_BROWSER_FLEXLAYOUT,
          enableClose: false,
          config: {
            model: TimeseriesBrowserLayout,
          },
        },
        {
          type: TAB,
          id: UPLOAD_TAB,
          name: 'Upload',
          component: UPLOAD_COMP,
          config: {
          },
          enableClose: false,
        },
        {
          type: TAB,
          id: SERIESINFO_TAB,
          name: 'Series Info',
          component: SERIESINFO_COMP,
          config: {
          },
          enableClose: false,
        },
      ],
    },
    {
      type: 'border',
      location: 'right',
      children: [
        {
          type: TAB,
          id: GRAPH_OPTIONS_TAB,
          name: 'Graph Options',
          component: GRAPH_OPTIONS_COMP,
          config: {
          },
          enableClose: false,
        },
        {
          type: TAB,
          id: SERIES_OPTIONS_TAB,
          name: 'Series Options',
          component: SERIES_OPTIONS_COMP,
          config: {
          },
          enableClose: false,
        },
        {
          type: TAB,
          id: GRAPH_EXPORT_TAB,
          name: 'Graph Export',
          component: GRAPH_EXPORT_COMP,
          config: {
          },
          enableClose: false,
        },

      ],
    },
    {
      type: 'border',
      location: 'bottom',
      size: 359,
      children: [
        {
          type: TAB,
          id: ANALYTICS_BORDER_TAB,
          name: 'Analytics',
          component: ANALYTICS_FLEXLAYOUT,
          config: {
            model: AnalyticsLayout,
          },
          enableClose: false,
        },
        {
          type: TAB,
          id: TABLE_BORDER_TAB,
          name: 'Table',
          component: TABLE_COMP,
          config: {
          },
          enableClose: false,
        },
        {
          type: TAB,
          id: GRAPH_SERIES_LIST_BORDER_TAB,
          name: 'Graph Series',
          component: GRAPH_SERIES_LIST_COMP,
          config: {
          },
          enableClose: false,
        },
      ],
    },
  ],
};
