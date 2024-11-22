import { path } from 'ramda';

import {
  IRootState,
} from '../reducers/index';

// seriesList Selectors
export const uiStoreSelector = (state: IRootState) => state.ui;
export const isFuncEditorOpenSelector = (state: IRootState) => state.ui.seriesList.isFuncEditorOpen;
export const funcEditorErrorsSelector = (state: IRootState) => state.ui.seriesList.funcEditorErrors;
export const selectedSeriesSelector = (state: IRootState) => state.ui.seriesList.selectedSeries;
export const seriesInfoActiveSeriesSelector = (state: IRootState) => path(['ui', 'seriesInfo', 'activeSeries'], state);
