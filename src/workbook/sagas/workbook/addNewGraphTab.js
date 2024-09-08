import { put, select } from 'redux-saga/effects';
import { isNil } from 'ramda';
import createGraph from '../../../viewer/sagas/graph.createGraph';
import { focusOnGraphAction } from '../../../viewer/actions/graphActions';
import { selectGraphTabTabset } from './selectGraphTabTabset';
import { addGraphTabToModel } from './addGraphTabToModel';
import { getActiveTabsetSelector } from '../../selectors/workbookSelectors';


export default function* addNewGraphTab(actions) {
  let { tabsetId, gid } = actions;
  // add tab in given graph tabset and add object in graph reducer
  if (isNil(tabsetId)) tabsetId = yield select(getActiveTabsetSelector);
  if (isNil(gid)) gid = yield createGraph();
  yield addGraphTabToModel({ gid, tabsetId });
  yield selectGraphTabTabset({ gid });
  yield put(focusOnGraphAction(gid)); // update currentGraphId
}
