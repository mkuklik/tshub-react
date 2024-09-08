// https://stackoverflow.com/questions/49415258/redux-saga-takeleading-action-plus-additional-parameter
import {
  take,
  fork,
  call,
  takeLeading,
} from 'redux-saga/effects';

const takeLeadingForFunc = (f) => (patternOrChannel, saga, ...args) => fork(function* () {
  const takeLeadings = {};
  while (true) {
    const action = yield take(patternOrChannel);
    if (!(f(action) in takeLeadings)) {
      yield call(saga, ...args.concat(action));
      takeLeadings[f(action)] = yield takeLeading((ac) => f(ac) === f(action) && ac.type === action.type, saga, ...args);
    }
  }
});

export default takeLeadingForFunc;
