import { select, put } from 'redux-saga/effects';
import { isNil } from 'ramda';
import { Actions } from 'flexlayout-react';
import { flexLayoutModelSelector } from '../../selectors/workbookSelectors';
import { reportErrorAction } from '../../../viewer/actions/errorActions';
import { UPLOAD_TAB } from '../../layouts/definitions';


export default function* openUpload() {
  const model = yield select(flexLayoutModelSelector);

  if (isNil(model)) {
    yield put(reportErrorAction({ message: 'windows module hasn\'t been initiated' }));
    return;
  }

  model.doAction(Actions.selectTab(UPLOAD_TAB));
}
