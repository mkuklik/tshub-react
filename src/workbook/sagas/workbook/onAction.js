import { put, select } from 'redux-saga/effects';
import { isNil } from 'ramda';
import { Actions } from 'flexlayout-react';
import { focusOnGraphAction } from '../../../viewer/actions/graphActions';
import {
  isNodeGraphTab, isNodeAnalyticsTab, nodeIdToGid, nodeIdToAyid, isNodeGraphTabset,
} from '../../layouts/definitions';
import { saveActiveGraphTabsetAction } from '../../action/workbookActions';
import { flexLayoutModelSelector } from '../../selectors/workbookSelectors';
import { selectGraphTabTabset } from './selectGraphTabTabset';


export default function* onAction({ layout, action }) {

  if (action.type === Actions.SELECT_TAB) {
    const { tabNode } = action.data;
    if (isNodeGraphTab(tabNode)) {
      const gid = nodeIdToGid(tabNode);
      // set currentGraphGid and activeGraphTabset
      yield selectGraphTabTabset({ gid });
    } else if (isNodeAnalyticsTab(tabNode)) {
      const ayid = nodeIdToAyid(tabNode);
      // todo
    }
  } else if (action.type === Actions.SET_ACTIVE_TABSET) {
    const { tabsetNode } = action.data;
    if (isNodeGraphTabset(tabsetNode)) {
      yield put(saveActiveGraphTabsetAction(tabsetNode));
      const model = yield select(flexLayoutModelSelector);
      const tabset = model.getNodeById(tabsetNode);
      const graphtab = tabset.getSelectedNode();
      const gid = (!isNil(graphtab)) ? nodeIdToGid(graphtab.getId()) : undefined;
      yield put(focusOnGraphAction(gid));
    }
  } else if (action.type === Actions.MOVE_NODE) {
    const { fromNode, toNode } = action.data;
    if (isNodeGraphTab(fromNode)) {
      const gid = nodeIdToGid(fromNode);
      // set currentGraphGid and activeGraphTabset
      yield selectGraphTabTabset({ gid });
    }
  }
  // else if (action.type === Actions.DELETE_TAB) {
  // }
}
