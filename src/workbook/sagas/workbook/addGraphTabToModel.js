/* eslint-disable import/prefer-default-export */
import { select } from 'redux-saga/effects';
import { Actions, DockLocation } from 'flexlayout-react';
import { isNil } from 'ramda';
import {
  TAB, GRAPH, generateGraphTabName, GraphTabId, DefaultTabsetId,
} from '../../layouts/definitions';
import { flexLayoutModelSelector, getActiveTabsetSelector } from '../../selectors/workbookSelectors';


export function* addGraphTabToModel({ gid, tabsetId, model }) {
  let targetModel = model;
  if (isNil(targetModel)) {
    targetModel = yield select(flexLayoutModelSelector);
  }
  const activeTabset = yield select(getActiveTabsetSelector);
  const nodeId = tabsetId || activeTabset || DefaultTabsetId;
  const newNodeJson = {
    type: TAB,
    component: GRAPH,
    name: generateGraphTabName(gid),
    id: GraphTabId(gid),
  };
  targetModel.doAction(Actions.addNode(newNodeJson, nodeId, DockLocation.CENTER, 0));
}
