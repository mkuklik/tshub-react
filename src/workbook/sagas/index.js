import { fork, all } from 'redux-saga/effects';

import watchInitializeActions from './initialize';
import watchApiActions from './api';
import watchGraphActions from '../../viewer/sagas/graph';
import watchSpaceActions from '../../viewer/sagas/spaces';
import watchTimeSeriesActions from '../../viewer/sagas/timeseries';
import watchCollectionActions from '../../viewer/sagas/collections';
import watchAnnotationsActions from '../../viewer/sagas/annotations';
import watchTableActions from '../../viewer/sagas/table';
import watchSeriesActions from '../../viewer/sagas/series';
import watchUIActions from '../../viewer/sagas/ui';
import watchErrorActions from '../../viewer/sagas/errors';
import watchAnalyticsActions from '../analytics/sagas';
import watchWorkbookActions from './workbook/workbook';
import watchUiSeriesListActions from './ui/ui.seriesList';
import watchUploadActions from '../../uploader/sagas/upload/upload';
import watchVintagesActions from '../../vintages/sagas/vintages/index';
import watchFredActions from '../../viewer/sagas/fred';

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
    fork(watchSeriesActions),
    fork(watchErrorActions),
    fork(watchAnalyticsActions),
    fork(watchUiSeriesListActions),
    fork(watchWorkbookActions),
    fork(watchUploadActions),
    fork(watchVintagesActions),
    fork(watchUIActions),
    fork(watchFredActions),
  ]);
}
