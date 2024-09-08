import { put } from 'redux-saga/effects';
import ObjectID from 'bson-objectid';
import { addErrorAction } from '../actions/errorActions';
import { AppToaster } from '../components/errors/AppToaster';

export default function* genericErrorHandler({ error }) {
  let message;
  if (error instanceof Error) {
    message = error.message;
  } else if (error instanceof Object) {
    message = error.message;
  } else if (error instanceof String) {
    message = error;
  } else {
    message = String(error);
  }
  yield put(addErrorAction({
    eid: ObjectID().toHexString(),
    message,
  }));
  AppToaster.show({ message, intent: 'danger', timeout: 5000 });
}
