import { put, select } from 'redux-saga/effects';
import { isNil } from 'ramda';
import { focusOnGraphAction } from '../../../viewer/actions/graphActions';

import {
  MAIN_LAYOUT,
  isNodeGraphTabset,
  isNodeGraphTab,
  nodeIdToGid,
} from '../../layouts/definitions';
import { currentGraphGidSelector } from '../../../viewer/selectors/graph';


export default function* onModelChange({ layout, model }) {

  // check if currentGid is different from graph in active tabset, set currentgraphId to tabset gid
  if (layout === MAIN_LAYOUT) {
    const currentGid = yield select(currentGraphGidSelector);
    const tabset = model.getActiveTabset();
    if (isNodeGraphTabset(tabset.getId())) {
      // set active GraphTabset
      // yield put(saveActiveGraphTabsetAction(tabset.getId())); // update currentGraphId
      const selectedTab = tabset.getSelectedNode();
      if (!isNil(selectedTab)) {
        const nodeId = selectedTab.getId();
        if (isNodeGraphTab(nodeId)) {
          const gid = nodeIdToGid(nodeId);
          if (currentGid !== gid) {
            yield put(focusOnGraphAction(gid)); // update currentGraphId
          }
        }
      }
    }
  }
}
