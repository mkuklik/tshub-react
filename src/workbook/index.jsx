import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { isNil } from 'ramda';
import * as Sentry from '@sentry/react';
import configureStore from './store';
import rootSaga from './sagas';
import App from './App';

import './light.css';

// Create a redux store
const store = configureStore({}, rootSaga);

const rootElement = document.getElementById('container');
const isFavorite = rootElement.getAttribute('data-prop-is_favorite');

Sentry.init({ dsn: 'https://9cc4792b8c8f4e60849ad3ba2210de1e@o337196.ingest.sentry.io/5176927' });

// if (process.env.NODE_ENV === 'production') {
//   Sentry.init({dsn: 'https://9cc4792b8c8f4e60849ad3ba2210de1e@o337196.ingest.sentry.io/5176927'});
// }

ReactDOM.render(
  <Provider store={store}>
    <App
      wid={rootElement.getAttribute('data-prop-wid')}
      chronos_address={rootElement.getAttribute('data-prop-chronos_address')}
      analytics_address={rootElement.getAttribute('data-prop-analytics_address')}
      jwt={rootElement.getAttribute('data-prop-jwt')}
      title={rootElement.getAttribute('data-prop-title')}
      isFavorite={(!isNil(isFavorite)) ? JSON.parse(isFavorite.toLowerCase()) : undefined}
    />
  </Provider>,
  rootElement,
);
