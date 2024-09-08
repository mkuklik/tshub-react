/* eslint-disable import/prefer-default-export */
import { select, put } from 'redux-saga/effects';
import { Actions } from 'flexlayout-react';
import { isNil } from 'ramda';
import { GraphTabId, GraphTabsetId } from '../../layouts/definitions';
import { flexLayoutModelSelector } from '../../selectors/workbookSelectors';
import { focusOnGraphAction } from '../../../viewer/actions/graphActions';
import { saveActiveGraphTabsetAction } from '../../action/workbookActions';
import { DefaultTabsetId } from '../../layouts/definitions';

export function* selectGraphTabTabset({ gid }) {
  if (isNil(gid)) return;

  const model = yield select(flexLayoutModelSelector);
  // select graph
  const nodeId = GraphTabId(gid);
  model.doAction(Actions.selectTab(nodeId));
  // set active tabset
  const tab = model.getNodeById(nodeId);
  const tabsetName = (!isNil(tab))
    ? model.getNodeById(nodeId).getParent().getId()
    : DefaultTabsetId;
  model.doAction(Actions.setActiveTabset(tabsetName));
  // save currentGraphId and activeGraphTabset
  yield put(saveActiveGraphTabsetAction(tabsetName));
  yield put(focusOnGraphAction(gid));
}
