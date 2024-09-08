import * as r from 'ramda';

const getRoot = r.prop('ui');

const getTimeseriesBrowser = r.pipe(getRoot, r.prop('timeseriesBrowser'));
const getTimeseriesBrowserExpandedSpaces = r.pipe(getTimeseriesBrowser, r.prop('expandedSpaces'));
const timeseriesBrowserSelectedCollectionIDSelector = (state) => r.path(['ui', 'timeseriesBrowser', 'selectedCollectionID'], state);
const timeseriesBrowserSelectedTimeseriesSelector = (state) => r.path(['ui', 'timeseriesBrowser', 'selectedTimeseries'], state);
const api = r.prop('api');
const apiCollIdSelector = r.pipe(api, r.prop('collId'));
const apiTsidSelector = r.pipe(api, r.prop('tsid'));
const isCreateSpaceOverlayOpenSelector = r.path(['ui', 'timeseriesBrowser', 'isCreateSpaceOverlayOpen']);
const isCreateCollectionOverlayOpenSelector = r.path(['ui', 'timeseriesBrowser', 'isCreateCollectionOverlayOpen']);
const timeseriesBrowserOverSpaceIdSelector = r.path(['ui', 'timeseriesBrowser', 'overSpaceId']);
const timeseriesBrowserCreateCollectioninSpaceIdSelector = r.path(['ui', 'timeseriesBrowser', 'createCollectioninSpaceId']);
const isCreateTimeseriesOverlayOpenSelector = r.path(['ui', 'timeseriesBrowser', 'isCreateTimeseriesOverlayOpen']);
const timeseriesBrowserCreateTimeseriesInCollIdSelector = r.path(['ui', 'timeseriesBrowser', 'createTimeseriesInCollId']);
const isDeleteSpaceCollectionOverlayOpenSelector = r.path(['ui', 'timeseriesBrowser', 'isDeleteSpaceCollectionOverlayOpen']);

export {
  getTimeseriesBrowser,
  getTimeseriesBrowserExpandedSpaces,
  apiCollIdSelector,
  apiTsidSelector,
  timeseriesBrowserSelectedCollectionIDSelector,
  timeseriesBrowserSelectedTimeseriesSelector,
  isCreateSpaceOverlayOpenSelector,
  isCreateCollectionOverlayOpenSelector,
  timeseriesBrowserOverSpaceIdSelector,
  timeseriesBrowserCreateCollectioninSpaceIdSelector,
  isCreateTimeseriesOverlayOpenSelector,
  timeseriesBrowserCreateTimeseriesInCollIdSelector,
  isDeleteSpaceCollectionOverlayOpenSelector,
};
