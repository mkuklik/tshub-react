import { path, has, find } from "ramda";

const timeseriesStoreSelector = (state) => state.timeseries;
const timeseriesSelector = (tsid) => (state) => state.timeseries.timeseries[tsid];
const timeseriesListInCollSelector = (collId) => (state) => path(
  ['timeseries', 'timeseriesListByColl', collId], state,
);
const timeseriesNameSelector = (collId, tsid) => (state) => {
  if (has(tsid, state.timeseries)) return state.timeseries.timeseries[tsid];
  return path(['name'], find((x) => x.tsid === tsid, path(['timeseries', 'timeseriesListByColl', collId], state)));
};


export {
  timeseriesStoreSelector as getTimeseries,
  timeseriesSelector,
  timeseriesListInCollSelector,
  timeseriesNameSelector,
};
