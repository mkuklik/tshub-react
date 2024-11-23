import { path } from "ramda";

import { IRootState } from "../reducers/index";

export const activeLayoutSelector = (state: IRootState) =>
  state.workbook.activeLayout;
export const getActiveTabsetSelector = (state: IRootState) =>
  state.workbook.activeGraphTabset;
// export const getGraphLayoutsSelector = (state: RootState) => state.workbook.graphLayouts;

export const flexLayoutModelSelector = (state: IRootState) =>
  state.workbook.mainModel;
export const analyticsModelSelector = (state: IRootState) =>
  state.workbook.analyticsModel;
export const timeseriesBrowserModelSelector = (state: IRootState) =>
  state.workbook.timeseriesBrowserModel;
export const workbookWidSelector = () => window._chronosdb.wid;
// export const workbookWidSelector = (state: RootState) => path(['workbook', 'wid'], state);
export const workbookIsFavoriteSelector = (state: IRootState) =>
  state.workbook.isFavorite;
export const workbookTitleSelector = (state: IRootState) =>
  path(["workbook", "metadata", "title"], state);
export const workbookUIPropsSelector = (state: IRootState) =>
  path(["ui", "workbook"], state);
export const workbookIsTourOpenSelector = (state: IRootState) =>
  path(["ui", "workbook", "isTourOpen"], state);
