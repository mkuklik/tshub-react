import {
  put,
} from 'redux-saga/effects';
import { isNil } from 'ramda';
import Evaluator from '../../../expressions/Evaluator';
import { saveErrorsFuncEditorAction, closeFuncEditorAction } from '../../action/uiActions';
import updateSeriesExpr from '../../../viewer/sagas/graph.updateSeriesExpr';
import { addExprSeries } from '../../../viewer/sagas/graph.addSeries';

function* confirmExprFuncEditor({ gid, wsid, expr }) {

  const evaluator = new Evaluator(expr);

  if (evaluator.hasErrors()) {
    yield put(saveErrorsFuncEditorAction(evaluator.errors));
    return;
  }
  if (isNil(wsid)) {
    // create a new series
    yield addExprSeries({ gid, expr });

  } else {
    const [_, error] = yield updateSeriesExpr({ gid, wsid, expr });
    // todo handle resolving errors
  }
  yield put(closeFuncEditorAction());
}

export default confirmExprFuncEditor;
