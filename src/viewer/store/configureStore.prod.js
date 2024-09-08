import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import createSagaMiddleware, { END } from 'redux-saga';
import sagaMonitor from '@redux-saga/simple-saga-monitor';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk,
      promise,
      sagaMiddleware,
    ),
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
