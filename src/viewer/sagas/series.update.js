import {
  put,
} from 'redux-saga/effects';
import { isNil } from 'ramda';
import { saveUpdateSeriesAction, signalSeriesUpdatedAction } from '../actions/seriesActions';
import { reportErrorAction } from '../actions/errorActions';


function* updateSeries({ wsid, series } = {}) {
  if (isNil(wsid)) {
    // todo error
    yield put(reportErrorAction('Internal Error: Unknown series id'));
    return;
  }
  yield put(saveUpdateSeriesAction({ wsid, series }));
  yield put(signalSeriesUpdatedAction({ wsid }));
}

export default updateSeries;
