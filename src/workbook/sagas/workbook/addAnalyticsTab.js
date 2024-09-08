import { select } from 'redux-saga/effects';
import { Actions, DockLocation } from 'flexlayout-react';

import { isNil } from 'ramda';
import {
  TAB,
  AnalyticsTabId,
  ANALYTICS_COMP,
  generateAnalyticsTabName,
  ANALYTICS_TABSET,
} from '../../layouts/definitions';
import {
  analyticsModelSelector,
} from '../../selectors/workbookSelectors';


// addNewTab = (tabsetId, ayid) => {
//     const tabComponent = {
//       type: TAB,
//       component: ANALYTICS_COMP,
//       name: this.generateTabName(ayid),
//       id: `a:${ayid}`,
//     };
//     // this.refs.layout.addTabToTabSet('ANALYTICS_TABSET1', tabComponent);
//   }

//   handleAddNewAnalytics = (tabsetId, kind, ayid) => {
//     const { createAnalytics } = this.props;
//     const ayid = ayid || ObjectID().toHexString();
//     createAnalytics({ ayid, kind });
//     this.addNewTab(tabsetId, ayid);
//   }

export default function* addAnalyticsTab({ ayid }) {
  const model = yield select(analyticsModelSelector);

  if (isNil(model)) {
    console.error('analyticsModel is not initiated');
    return;
  }

  const newNodeJson = {
    type: TAB,
    component: ANALYTICS_COMP,
    name: generateAnalyticsTabName(ayid),
    id: AnalyticsTabId(ayid),
  };
  model.doAction(Actions.addNode(newNodeJson, ANALYTICS_TABSET, DockLocation.CENTER, -1));

  // TODO update selectedAnalyticsTab
}
