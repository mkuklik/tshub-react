import { select, put } from 'redux-saga/effects';
import FlexLayout, { Model, Actions, DockLocation } from 'flexlayout-react';
import { isNil } from 'ramda';
import {
  FORTH_LAYOUT,
  FIRST_LAYOUT,
  GraphTabsetId,
  SECOND_LAYOUT,
  THIRD_LAYOUT,
  GraphTabId,
} from '../../layouts/definitions';
import { flexLayoutModelSelector } from '../../selectors/workbookSelectors';
import { currentGraphGidSelector, getGraphObjects } from '../../../viewer/selectors/graph';
import { MainLayout } from '../../layouts/MainLayout';
import {
  saveActiveGraphLayoutAction,
} from '../../action/workbookActions';
import { graphLayouts, graphLayoutSize } from '../../layouts/GraphLayouts';
import { selectGraphTabTabset } from './selectGraphTabTabset';
import { addGraphTabToModel } from './addGraphTabToModel';
import saveModel from './saveModel';

const getLayoutName = (model) => {
  if (model instanceof Model) {
    const root = model.getRoot();
    if (!isNil(root)) return root.getId();
  }
  return undefined;
};

export const blankLayout = (layoutIndex) => ({
  ...MainLayout,
  layout: graphLayouts[layoutIndex],
});

function transfer(fromTabset, toTabset) {
  const toModel = toTabset.getModel();
  const tabs = fromTabset.getChildren();
  tabs.forEach((tab) => {
    const newNodeJson = tab._toJson();
    toModel.doAction(Actions.addNode(newNodeJson, toTabset.getId(), DockLocation.CENTER, -1));
  });
}

export function* changeGraphLayouts({ layoutIndex }) {
  const currentModel = yield select(flexLayoutModelSelector);
  const tmp = currentModel.toJson();
  tmp.layout = graphLayouts[layoutIndex];
  const newModel = FlexLayout.Model.fromJson(tmp);

  // move graph tabs around
  if (graphLayoutSize[getLayoutName(newModel)] >= graphLayoutSize[getLayoutName(currentModel)]) {
    Array(4).fill().forEach((_, i) => {
      console.log(i);
      const tabsetNode = currentModel.getNodeById(GraphTabsetId(i));
      const newTabsetNode = newModel.getNodeById(GraphTabsetId(i));
      console.log(tabsetNode, newTabsetNode);
      if (!isNil(tabsetNode) && !isNil(newTabsetNode)) {
        transfer(tabsetNode, newTabsetNode);
      }
    });
  } else if (getLayoutName(newModel) === FIRST_LAYOUT) {
    // aggregate from all the others
    const newTabsetNode = newModel.getNodeById(GraphTabsetId(0));
    Array(4).fill().forEach((_, i) => {
      const tabsetNode = currentModel.getNodeById(GraphTabsetId(i));
      if (!isNil(tabsetNode)) {
        transfer(tabsetNode, newTabsetNode);
      }
    });
  } else if ([SECOND_LAYOUT, THIRD_LAYOUT].includes(getLayoutName(newModel))
            && getLayoutName(currentModel) === FORTH_LAYOUT) {
    [0, 1].forEach((i) => {
      console.log(i);
      const tabsetNode = currentModel.getNodeById(GraphTabsetId(i));
      const newTabsetNode = newModel.getNodeById(GraphTabsetId(0));
      console.log(tabsetNode, newTabsetNode);
      if (!isNil(tabsetNode) && !isNil(newTabsetNode)) {
        transfer(tabsetNode, newTabsetNode);
      }
    });
    [2, 3].forEach((i) => {
      console.log(i);
      const tabsetNode = currentModel.getNodeById(GraphTabsetId(i));
      const newTabsetNode = newModel.getNodeById(GraphTabsetId(1));
      console.log(tabsetNode, newTabsetNode);
      if (!isNil(tabsetNode) && !isNil(newTabsetNode)) {
        transfer(tabsetNode, newTabsetNode);
      }
    });
  }

  // find graphs that may have been lost
  const graphObjects = yield select(getGraphObjects);
  // eslint-disable-next-line no-restricted-syntax
  for (const gid of Object.keys(graphObjects)) {
    if (isNil(newModel.getNodeById(GraphTabId(gid)))) {
      yield addGraphTabToModel({ gid, model: newModel });
    }
  }

  yield saveModel(newModel);

  const gid = yield select(currentGraphGidSelector);
  yield selectGraphTabTabset({ gid });
}


export function* switchGraphLayout({ layoutIndex }) {
  yield put(saveActiveGraphLayoutAction(layoutIndex));
  yield changeGraphLayouts({ layoutIndex });
}

// export function* changeGraphLayouts({ layoutIndex }) {
//   const activeLayoutIndex = layoutIndex || (yield select(activeLayoutSelector));
//   // const graphLayout = yield select(getGraphLayoutSelector(activeLayoutIndex));
//   const graphLayout = path([activeLayoutIndex], graphLayouts);
//   const getMainLayout = layoutIndex === undefined ? mainLayoutJson : (yield select(flexLayoutModelSelector)).toJson();

//   const newMainLayout = getMainLayout;
//   newMainLayout.layout = graphLayout;
//   const tempMainLayout = FlexLayout.Model.fromJson(newMainLayout);
//   yield saveModel(tempMainLayout);
// }


// function* updateGraphLayoutJson() {
//   const graphLayouts = yield select(getGraphLayoutsSelector);
//   const activeLayout = yield select(activeLayoutSelector);
//   const mainLayout = yield select(flexLayoutModelSelector);
//   const newLayouts = graphLayouts;
//   newLayouts[activeLayout] = mainLayout.toJson().layout;

//   yield put(updateGraphLayoutJsonAction(newLayouts));
// }

// const layoutTabsMapping = (tabIds, tab) => {
//   const index = tabIds.indexOf(tab.id);
//   if (index > -1) return true;
//   return false;
// };

// const checkDeletingGraphObjects = (tabIds, graphObjects) => {
//   const graphTabIds = tabIds.filter((tabId) => tabId.charAt(1) === ':');
//   const checkDeltingObjects = Boolean(graphTabIds) && graphTabIds.map((graphTabId) => {
//     if (graphObjects.indexOf(graphTabId.slice(2)) > -1) return true;
//     return graphTabId;
//   });
//   return checkDeltingObjects.filter((objectTabId) => objectTabId !== true);
// };

// export function* switchGraphLayout({ layoutIndex }) {
//   // yield updateGraphLayoutJson();

//   yield put(saveActiveGraphLayoutAction(layoutIndex));

//   yield changeGraphLayouts({ layoutIndex });


//   // const graphObjects = yield select(getGraphObjects);
//   // const model = yield select(flexLayoutModelSelector);
//   // const nodeId = yield select(getActiveTabsetSelector);

//   // const allGraphKey = Object.keys(graphObjects);
//   // const allTabIdOfModel = Object.keys(model._idMap);
//   // Boolean(allGraphKey)
//   //       && allGraphKey.length > 0
//   //       && allGraphKey.forEach((gid) => {
//   //         const newNodeJson = {
//   //           type: TAB,
//   //           component: GRAPH,
//   //           name: generateGraphTabName(gid),
//   //           id: GraphTabId(gid),
//   //         };
//   //         const res = layoutTabsMapping(
//   //           allTabIdOfModel,
//   //           newNodeJson,
//   //         );
//   //         if (!res) model.doAction(Actions.addNode(newNodeJson, nodeId, DockLocation.CENTER, 0));
//   //       });

//   // const res = checkDeletingGraphObjects(allTabIdOfModel, allGraphKey);
//   // if (res.length > 0) {
//   //   res.forEach((nodeId) => {
//   //     model.doAction(Actions.deleteTab(nodeId));
//   //   });
//   // }
// }
