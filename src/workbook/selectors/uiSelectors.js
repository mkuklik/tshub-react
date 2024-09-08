import { path } from "ramda";

// seriesList Selectors
export const uiStoreSelector = (state) => state.ui;
export const isFuncEditorOpenSelector = (state) => state.ui.seriesList.isFuncEditorOpen;
export const funcEditorErrorsSelector = (state) => state.ui.seriesList.funcEditorErrors;
export const selectedSeriesSelector = (state) => state.ui.seriesList.selectedSeries;
export const seriesInfoActiveSeriesSelector = (state) => path(['ui', 'seriesInfo', 'activeSeries'], state);
