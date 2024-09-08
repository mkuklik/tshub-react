import {
  put, select,
} from 'redux-saga/effects';
import { isNil } from 'ramda';
import {
  updateGraphAction,
} from '../actions/graphActions';

import { selectTimeseriesAction } from '../actions/uiActions';
import { currentGraphGidSelector } from '../selectors/graph';
import { GraphProcessingStage } from './graph.constants';
import { addRefSeries } from './graph.addSeries';


function* addManyRefSeries({ gid, timeseriesList}) {
  const _gid = (isNil(gid)) ? yield select(currentGraphGidSelector) : gid;
  
  for (let i = 0; i < timeseriesList.length; i += 1) {
    yield addRefSeries({
      gid: _gid,
      collId: timeseriesList[i].collId,
      tsid: timeseriesList[i].tsid,
      name: timeseriesList[i].name,
    }, false)
  }
  yield put(updateGraphAction({ gid: _gid, wsid: undefined, stage: GraphProcessingStage.RESOLVE }));
  yield put(selectTimeseriesAction([]));
}

export default addManyRefSeries;
