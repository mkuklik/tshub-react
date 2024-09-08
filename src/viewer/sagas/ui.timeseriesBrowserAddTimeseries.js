import { select, put } from 'redux-saga/effects';
import { isNil } from 'ramda';
import { currentGraphGidSelector } from '../selectors/graph';
import { addRefSeriesToGraphAction } from '../actions/graphActions';
import { workbookAddNewGraphTabAction } from '../../workbook/action/workbookActions';
import { reportErrorAction } from '../actions/errorActions';
import createGraph from './graph.createGraph';


function* addTimeseries({ timeseries, collection }) {
  if (isNil(timeseries) || isNil(collection)) {
    yield put(reportErrorAction('Internal Error: addTimeseries: timeseires or collection is not specified'));
  }
  let gid = yield select(currentGraphGidSelector);
  if (isNil(gid)) {
    gid = yield createGraph({ gid }, false);
    yield put(workbookAddNewGraphTabAction(undefined, gid));
  }
  yield put(addRefSeriesToGraphAction({
    gid,
    name: timeseries.name,
    spaceId: collection.spaceId,
    collId: collection.collId,
    tsid: timeseries.tsid,
  }));
}

export default addTimeseries;
