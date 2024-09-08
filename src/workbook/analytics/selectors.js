import * as R from 'ramda';

export const analyticsStoreSelector = (state) => state.analytics;
export const allAnalyticsSelector = (state) => state.analytics.objects;
export const analyticsSelector = (ayid) => (state) => state.analytics.objects[ayid];
export const analyticsKindSelector = (ayid) => (state) => R.path([ayid, 'kind'], state.analytics.objects);
export const analyticsStatusSelector = (ayid) => (state) => R.path([ayid, 'status'], state.analytics.objects);
export const analyticsParametersSelector = (ayid) => (state) => R.path([ayid, 'parameters'], state.analytics.objects);
export const analyticsResolvedParametersSelector = (ayid) => (state) => R.path([ayid, 'resolvedParameters'], state.analytics.objects);
export const analyticsResultsSelector = (ayid) => (state) => R.path([ayid, 'results'], state.analytics.objects);
export const analyticsUISelector = (ayid) => (state) => R.path([ayid, 'ui'], state.analytics.objects);
