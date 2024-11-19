import {
  call, put, takeEvery, select,
} from 'redux-saga/effects';
import { Actions, DockLocation } from 'flexlayout-react';
import { isNil } from 'ramda';
import { INITIALIZE } from '../../viewer/actions/ActionTypes';
import { setApiParametersAction } from '../../viewer/actions';
import { saveWidAction } from '../action/workbookActions';
import { fetchMetadata } from './workbook/metadata';
import { fetchFavorite } from './workbook/favorite';
import { loadWorkbook } from './workbook/loadWorkbook';
import { flexLayoutModelSelector } from '../selectors/workbookSelectors';
import { ANALYTICS_BORDER_TAB } from '../layouts/definitions';

function* initialize({
  wid, jwt, chronos_address, analytics_address,
}) {
  yield put(setApiParametersAction({
    wid, jwt, chronos_address, analytics_address,
  }));
  // yield setDefaultLayout();
  yield put(saveWidAction(wid));
  // yield call(fetchMetadata, { wid });
  // yield call(fetchFavorite);

  // axios.defaults.baseURL = 'https://www.tshub.io';
  // axios.defaults.headers.common.Authorization = jwt;

  // try to fetch workbook
  // yield call(fetchFavorite);
  // if empty create new defautl model
  yield loadWorkbook();

  // activate analytics so that A button work properly
  try {
    const model = yield select(flexLayoutModelSelector);
    if (!isNil(model)) {
      const borderSet = model.getBorderSet();
      const borders = borderSet.getBorders();
      const bottom = borders.find((x) => x.getLocation() === DockLocation.BOTTOM);
      const selectedNode = bottom.getSelectedNode();
      if (isNil(selectedNode)) {
        model.doAction(Actions.selectTab(ANALYTICS_BORDER_TAB));
        model.doAction(Actions.selectTab(ANALYTICS_BORDER_TAB));
      } else {
        const previousTab = selectedNode.getId();
        model.doAction(Actions.selectTab(ANALYTICS_BORDER_TAB));
        model.doAction(Actions.selectTab(previousTab));
      }
    }
  } catch (error) {
    console.error(error);
  }
}

export default function* watchInitializeActions() {
  yield takeEvery(INITIALIZE, initialize);
}
