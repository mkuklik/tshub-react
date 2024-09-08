import {
  path,
} from 'ramda';

export const activeLayoutSelector = (state) => state.workbook.activeLayout;
export const getActiveTabsetSelector = (state) => state.workbook.activeGraphTabset;
export const getGraphLayoutsSelector = (state) => state.workbook.graphLayouts;

export const flexLayoutModelSelector = (state) => state.workbook.mainModel;
export const analyticsModelSelector = (state) => state.workbook.analyticsModel;
export const timeseriesBrowserModelSelector = (state) => state.workbook.timeseriesBrowserModel;

export const workbookWidSelector = (state) => window._chronosdb.wid; //path(['workbook', 'wid'], state);
export const workbookIsFavoriteSelector = (state) => state.workbook.isFavorite;
export const workbookTitleSelector = (state) => path(['workbook', 'metadata', 'title'], state);
export const workbookUIPropsSelector = (state) => path(['ui', 'workbook'], state);
export const workbookIsTourOpenSelector = (state) => path(['ui', 'workbook', 'isTourOpen'], state);