import {
  fork,
  all,
} from 'redux-saga/effects';
import watchVintagesActions from './vintages';


export default function* root() {
  yield all([
    fork(watchVintagesActions),
  ]);
}
