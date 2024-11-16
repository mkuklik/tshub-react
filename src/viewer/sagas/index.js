import { fork, all } from 'redux-saga/effects';

import watchGraphActions from './graph';
import watchErrorActions from './errors';
import watchSpaceActions from './spaces';
import watchCollectionActions from './collections';
import watchTimeSeriesActions from './timeseries';
import watchTableActions from './table';
import watchAnnotationsActions from './annotations';
import watchInitializeActions from './initialize';
import watchSeriesActions from './series';
import watchApiActions from './api';
import watchVintagesActions from '../../vintages/sagas/vintages';
import watchUIActions from './ui';
import watchFredActions from './fred';

// NOT USED IN WORKBOOK !!!

export default function* root() {
  yield all([
    fork(watchInitializeActions),
    fork(watchApiActions),
    fork(watchGraphActions),
    fork(watchSpaceActions),
    fork(watchTimeSeriesActions),
    fork(watchCollectionActions),
    fork(watchAnnotationsActions),
    fork(watchTableActions),
    fork(watchErrorActions),
    fork(watchSeriesActions),
    fork(watchVintagesActions),
    fork(watchUIActions),
    fork(watchFredActions),
  ]);
}
