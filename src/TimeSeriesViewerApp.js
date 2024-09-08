// import 'babel-polyfill';    // React Habitat requires Object.assign pollyfill for old IE support
import ReactHabitat from 'react-habitat';
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import configureStore from './viewer/store/configureStore';
import rootSaga from './viewer/sagas';
// import rootReducer from './viewer/reducers';
import ReduxDomFactory from './ReduxDomFactory';
import TimeSeriesViewer from './viewer/components/TimeSeriesViewer';

class App extends ReactHabitat.Bootstrapper {
  constructor() {
    super();

    // Create a new container builder
    const containerBuilder = new ReactHabitat.ContainerBuilder();


    // Create a redux store
    const store = configureStore(); // window.__INITIAL_STATE__
    store.runSaga(rootSaga);

    // const store = createStore(
    //   rootReducer,
    //   composeWithDevTools(
    //   applyMiddleware(
    //     thunk,
    //     promise,
    //     sagaMiddleware
    //     )
    //   )
    // // So we can debug redux in browser extension (optional)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // );

    // Set the container to use our redux factory
    containerBuilder.factory = new ReduxDomFactory(store);

    containerBuilder.register(TimeSeriesViewer).as('RTimeSeriesViewer');

    this.setContainer(containerBuilder.build());
  }
}

// Create a single instance of our app
const instance = new App();

// Bind the update method onto the window for the dynamic demo
// Alternatively we could have imported this file into another
// eg
//
// import App from './App';
//
// App.update();
//
window.updateHabitat = instance.update.bind(instance);

export default instance;
