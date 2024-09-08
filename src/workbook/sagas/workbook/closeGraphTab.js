import { put } from 'redux-saga/effects';
import { deleteGraphObjectAction } from '../../../viewer/actions/graphActions';
import { nodeIdToGid } from '../../layouts/definitions';

export default function* closeGraphTab({ nodeId }) {
  const gid = nodeIdToGid(nodeId);
  yield put(deleteGraphObjectAction(gid));

  // we moved this update to onAction as it was fired later, but it didn't work there for
  // the same reason it didn't work here; flexlayout hasn't been updated yet to reflect 
  // action!
  //
  // // get active GraphTabset and selected Graphtab
  // const model = yield select(flexLayoutModelSelector);

  // const tabset = model.getActiveTabset();
  // const tabsetId = tabset.getId();
  // if (isNodeGraphTabset(tabsetId)) {
  //   const graphtab = tabset.getSelectedNode();
  //   const newGid = (isNil(graphtab)) ? undefined : nodeIdToGid(graphtab.getId());
  //   // save currentGraphId and activeGraphTabset
  //   yield put(saveActiveGraphTabsetAction(tabset.getId()));
  //   yield put(focusOnGraphAction(newGid));
  // }
}
