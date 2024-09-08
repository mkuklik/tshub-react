import {
  takeEvery,
} from 'redux-saga/effects';
import {
  SERIESLIST_FUNC_EDITOR_SAGE_CONFIRM_EXPR,
} from '../../action/ActionTypes';
import confirmExprFuncEditor from './ui.seriesList.confirmExprFuncEditor';

export default function* watchStorageActions() {
  yield takeEvery(SERIESLIST_FUNC_EDITOR_SAGE_CONFIRM_EXPR, confirmExprFuncEditor);
}
