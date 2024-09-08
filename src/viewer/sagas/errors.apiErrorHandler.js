import { put } from 'redux-saga/effects';
import { showLoginError } from '../actions/errorActions';
import { AppToaster } from '../components/errors/AppToaster';

export default function* apiErrorHandler({ error }) {
  console.log("error", error);
  switch (error.status) {
    case 401:
      // Unauthorized
      // yield put(showLoginError());
      AppToaster.show({ message: "Unauthorized", intent: 'danger', timeout: 5000 });
      break;
    //todo other api errors
    default:
      break;
  }
}
