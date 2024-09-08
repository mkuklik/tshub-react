
import {
  call, put, select,
} from 'redux-saga/effects';
import axios from 'axios';
import { isNil, pick } from 'ramda';
import {
  saveMetadataAction, saveWorkbookUIPropsAction,
} from '../../action/workbookActions';
import { reportErrorAction } from '../../../viewer/actions/errorActions';
import { workbookTitleSelector, workbookWidSelector } from '../../selectors/workbookSelectors';


function* getMetadata(wid) {
  try {
    const response = yield call(axios.get, `/workbook/${wid}/api/metadata`);
    console.log(response);
    return [response, undefined];
  } catch (error) {
    console.error(error);
    yield put(reportErrorAction(new Error(String(error))));
    // todo
    return [undefined, error];
  }
}


function* putMetadata(wid, payload) {
  try {
    const response = yield call(axios.post, `workbook/${wid}/api/metadata`, payload);
    return [response, undefined];
  } catch (error) {
    console.error(error);
    // todo
    return [undefined, error];
  }
}

export function* fetchMetadata({ wid } = {}) {
  const [payload, error] = yield call(getMetadata, wid);
  if (!isNil(error)) {
    // report errors
    yield put(reportErrorAction({ message: 'Failed to fetch workbook metadata ' }));
    return;
  }
  console.log('fetchMetadata', payload);
  console.log(pick(['title', 'description'], payload.data));
  yield put(saveMetadataAction(pick(['title', 'description'], payload.data)));
  yield put(saveWorkbookUIPropsAction(pick(['title', 'description'], payload.data)));
}


export function* updateMetadata({ title, description } = {}) {
  const payload = { title, description };
  const wid = yield select(workbookWidSelector);
  const [payload, error] = yield call(putMetadata, wid, payload);
  if (!isNil(error)) {
    // report errors
    yield put(reportErrorAction({ message: '' }));
    const origTitle = yield select(workbookTitleSelector);
    yield put(saveWorkbookUIPropsAction({ title: origTitle }));
    return;
  }
  yield put(saveMetadataAction({ title, description }));
}
