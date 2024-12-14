import { path } from "ramda";
import { SeriesKind, TSeriesKind } from "../sagas/series.constants";
import { IRootState } from "../../workbook/reducers/index";
import { ISeriesState } from "../reducers/seriesReducer";
import { ISeries, IResolvedSeries } from "../types/TSeries";
import { IFreq } from "../types/Tcommon";

export const seriesStoreSelector = (state: IRootState): ISeriesState =>
  state.series;

export const seriesSelector =
  (wsid: string) =>
  (state: IRootState): { [wsid: string]: ISeries } =>
    state.series.definition[wsid];

export const seriesDefListSelector = (state: IRootState): SeriesDefinition =>
  state.series.definition;

export const resolvedSeriesListSelector = (
  state: IRootState
): { [wsid: string]: IResolvedSeries } => state.series.resolved;

export const resolvedSeriesSelector =
  (wsid: string) =>
  (state: IRootState): IResolvedSeries | undefined => {
    const seriesDef: ISeries | undefined = state.series.definition[wsid];
    if (seriesDef && seriesDef.kind === TSeriesKind.data) {
      // data series don't need to be resolved
      return seriesDef;
    }
    return state.series.resolved[wsid];
  };

export const resolvedSeriesFrequencySelector =
  (wsid: string) =>
  (state: IRootState): IFreq | undefined => {
    const seriesDef = state.series.definition[wsid];

    if (seriesDef && seriesDef.kind === SeriesKind.data) {
      return seriesDef.freq;
    }
    const resolvedSeries = state.series.resolved[wsid];
    return resolvedSeries ? resolvedSeries.freq : undefined; // Handle the case when resolvedSeries is undefined/null
  };

// import { path } from 'ramda';
// import { SeriesKind } from '../sagas/series.constants';

// export const seriesStoreSelector = (state) => state.series;

// export const seriesSelector = (wsid) => (state) => state.series.definition[wsid];

// export const seriesDefListSelector = (state) => state.series.definition;

// export const resolvedSeriesListSelector = (state) => state.series.resolved;

// export const resolvedSeriesSelector = (wsid) => (state) => {
//   if (path([wsid, 'kind'], state.series.definition) === SeriesKind.data) {
//     // data series don't need to be resolved
//     return state.series.definition[wsid];
//   }
//   return state.series.resolved[wsid];
// };

// export const resolvedSeriesFrequencySelector = (wsid) => (state) => {
//   if (path([wsid, 'kind'], state.series.definition) === SeriesKind.data) {
//     return path([wsid, 'freq'], state.series.definition);
//   }
//   return path([wsid, 'freq'], state.series.resolved);
// };
