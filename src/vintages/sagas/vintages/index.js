import {
  takeEvery,
} from 'redux-saga/effects';
import {
  VINTAGES_FETCH_LIST,
  VINTAGES_FETCH_OBJECT,
  VINTAGES_REFRESH_LIST,
} from '../../actions/vintagesActions';
import fetchVintageList from './fetchVintageList';
import { fetchVintageObject } from './fetchVintageObject';
import refreshList from './refreshList';


export default function* watchVintagesActions() {
  yield takeEvery(VINTAGES_FETCH_LIST, fetchVintageList);
  yield takeEvery(VINTAGES_FETCH_OBJECT, fetchVintageObject);
  yield takeEvery(VINTAGES_REFRESH_LIST, refreshList);
}
