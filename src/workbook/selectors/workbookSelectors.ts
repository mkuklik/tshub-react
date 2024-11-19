import {
  path,
} from 'ramda';

import {
  RootState,
} from '../reducers/index';

// import '../../global';
// this should be imported from golbal.d.ts
declare global {
  interface Window {
    _chronosdb: { wid: string, rawTimeSeriesApi: any};
  }
}

export const activeLayoutSelector = (state: RootState) => state.workbook.activeLayout;
export const getActiveTabsetSelector = (state: RootState) => state.workbook.activeGraphTabset;
// export const getGraphLayoutsSelector = (state: RootState) => state.workbook.graphLayouts;

export const flexLayoutModelSelector = (state: RootState) => state.workbook.mainModel;
export const analyticsModelSelector = (state: RootState) => state.workbook.analyticsModel;
export const timeseriesBrowserModelSelector = (state: RootState) => state.workbook.timeseriesBrowserModel;
export const workbookWidSelector = () => window._chronosdb.wid;
// export const workbookWidSelector = (state: RootState) => path(['workbook', 'wid'], state);
export const workbookIsFavoriteSelector = (state: RootState) => state.workbook.isFavorite;
export const workbookTitleSelector = (state: RootState) => path(['workbook', 'metadata', 'title'], state);
export const workbookUIPropsSelector = (state: RootState) => path(['ui', 'workbook'], state);
export const workbookIsTourOpenSelector = (state: RootState) => path(['ui', 'workbook', 'isTourOpen'], state);
