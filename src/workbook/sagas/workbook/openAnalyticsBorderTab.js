import { select } from 'redux-saga/effects';
import { Actions, DockLocation } from 'flexlayout-react';
import { isNil } from 'ramda';
import { ANALYTICS_BORDER_TAB } from '../../layouts/definitions';
import { flexLayoutModelSelector } from '../../selectors/workbookSelectors';

export default function* openAnalyticsBorderTab() {
  try {
    const model = yield select(flexLayoutModelSelector);
    const borderSet = model.getBorderSet();
    const borders = borderSet.getBorders();
    const bottom = borders.find((x) => x.getLocation() === DockLocation.BOTTOM);
    const selectedNode = bottom.getSelectedNode();
    if (isNil(selectedNode) || selectedNode.getId() !== ANALYTICS_BORDER_TAB) {
      model.doAction(Actions.selectTab(ANALYTICS_BORDER_TAB));
    }
  } catch (error) {
    console.error(error);
  }
}
