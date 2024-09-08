import { path } from 'ramda';
import { SeriesKind } from '../sagas/series.constants';

export const seriesStoreSelector = (state) => state.series;

export const seriesSelector = (wsid) => (state) => state.series.definition[wsid];

export const seriesDefListSelector = (state) => state.series.definition;

export const resolvedSeriesListSelector = (state) => state.series.resolved;

export const resolvedSeriesSelector = (wsid) => (state) => {
  if (path([wsid, 'kind'], state.series.definition) === SeriesKind.data) {
    // data series don't need to be resolved
    return state.series.definition[wsid];
  }
  return state.series.resolved[wsid];
};

export const resolvedSeriesFrequencySelector = (wsid) => (state) => {
  if (path([wsid, 'kind'], state.series.definition) === SeriesKind.data) {
    return path([wsid, 'freq'], state.series.definition);
  }
  return path([wsid, 'freq'], state.series.resolved);
};
