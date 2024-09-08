import * as R from 'ramda';
import { keyBuilder } from '../reducers/namespaceReducer';

export const graphsReducerSelector = (state) => state.graphs;

export const obsSelector = (tsid) => (state) => state.obs[tsid];
export const defaultsSelector = (state) => state.defaults;


export const getGraphObjects = (state) => state.graphs.objects;

export const graphSelector = (gid) => (state) => state.graphs.objects[gid];

export const currentGraphUISelector = (gid) => (state) => {
  const graph = state.graphs.objects[gid];
  if (graph === undefined) return undefined;
  return graph.ui;
};

export const currentGraphGidSelector = (state) => state.graphs.currentGraphId;
export const currentGraphSelector = (state) => state.graphs.objects[state.graphs.currentGraphId];

export const currentGraphUI = (state) => {
  const graph = state.graphs.objects[state.graphs.currentGraphId];
  if (graph === undefined) return undefined;
  return graph.ui;
};

export const currentGraphSeriesDeterminedFreqSelector = (state) => {
  const graph = state.graphs.objects[state.graphs.currentGraphId];
  if (graph === undefined) return undefined;
  return graph.determinedFreq;
};

export const currentGraphSeriesTransformedSelector = (state) => {
  const graph = state.graphs.objects[state.graphs.currentGraphId];
  if (graph === undefined) return [];
  return graph.transformedSeries;
};

export const currentGraphDefSelector = (state) => {
  const graph = state.graphs.objects[state.graphs.currentGraphId];
  if (graph === undefined) return {};
  return graph.definition;
};

export const currentGraphSeriesDefSelector = (state) => {
  const graph = state.graphs.objects[state.graphs.currentGraphId];
  if (graph === undefined) return [];
  return graph.definition.series;
};

export const currentGraphErrorsSelector = (state) => {
  const graph = state.graphs.objects[state.graphs.currentGraphId];
  if (graph === undefined) return [];
  return graph.errors;
};

export const graphSeriesDefSelector = (gid) => (state) => {
  if (state.graphs.objects[gid] !== undefined) {
    return R.path(['definition', 'series'], state.graphs.objects[gid]);
  }
  return undefined;
};

export const currentGraphSelectedSeriesSelector = (state) => {
  const graph = state.graphs.objects[state.graphs.currentGraphId];
  if (R.isNil(graph)) return undefined;
  return R.path(['ui', 'selected'], graph);
};

export const currentGraphChartRefSelector = (state) => {
  const graph = state.graphs.objects[state.graphs.currentGraphId];
  if (R.isNil(graph)) return undefined;
  return R.path(['ui', 'chartRef'], graph);
};

export const currentGraphExportOptionsSelector = (state) => {
  const graph = state.graphs.objects[state.graphs.currentGraphId];
  if (R.isNil(graph)) return undefined;
  return R.path(['ui', 'export'], graph);
};

export const graphFreqSelector = (gid) => (state) => {
  if (state.graphs.objects[gid] !== undefined) {
    return state.graphs.objects[gid].determinedFreq;
  }
  return undefined;
};

export const namespaceTimeSeriesSelector = (spaceName, collName, tsName) => (state) => {
  const key = keyBuilder(spaceName, collName, tsName);
  return state.namespace[key];
};

export const graphRealtimeSelector = (gid) => (state) => {
  if (state.graphs.objects[gid] !== undefined) {
    return R.path(['definition', 'realtime'], state.graphs.objects[gid]);
  }
  return undefined;
}
