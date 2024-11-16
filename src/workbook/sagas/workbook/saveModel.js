import { put } from 'redux-saga/effects';
import { modelAllowDrop } from '../../layouts/definitions';
import { saveModelAction } from '../../action/workbookActions';

export default function* saveModel(model) {
  model.setOnAllowDrop(modelAllowDrop);
  yield put(saveModelAction(model));
}
