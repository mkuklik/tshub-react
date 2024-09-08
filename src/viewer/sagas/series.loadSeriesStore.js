import {
  put,
} from 'redux-saga/effects';
import { map, mergeAll, isNil } from 'ramda';
import { restoreSeriesStoreAction } from '../actions/seriesActions';
import { fetchTimeseriesDetailsAction } from '../actions/timeseriesActions';
import { fetchCollectionDetailsAction } from '../actions/collectionsActions';

export default function* loadSeriesStore({ series } = {}) {
  // to do process

  if (!isNil(series)) {

    yield put(restoreSeriesStoreAction(series));

    const collections = map((x) => x.collId, Object.values(series.definition));
    for (const collId of collections) {
      yield put(fetchCollectionDetailsAction(collId));
    }

    // fetch time series
    const tsids = mergeAll(map((x) => ({
      [x.collId + x.tsid]: [x.collId, x.tsid],
    }), Object.values(series.definition)));
    for (const [collId, tsid] of Object.values(tsids)) {
      yield put(fetchTimeseriesDetailsAction({collId, tsid}));
    }
  }
}
