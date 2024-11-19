import { path } from 'ramda';

import {
  RootState,
} from '../reducers/index';

// seriesList Selectors
export const uiStoreSelector = (state: RootState) => state.ui;
export const isFuncEditorOpenSelector = (state: RootState) => state.ui.seriesList.isFuncEditorOpen;
export const funcEditorErrorsSelector = (state: RootState) => state.ui.seriesList.funcEditorErrors;
export const selectedSeriesSelector = (state: RootState) => state.ui.seriesList.selectedSeries;
export const seriesInfoActiveSeriesSelector = (state: RootState) => path(['ui', 'seriesInfo', 'activeSeries'], state);
