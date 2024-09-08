// import 'babel-polyfill';    // React Habitat requires Object.assign pollyfill for old IE support
import ReactHabitat from 'react-habitat';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './viewer/reducers';
import ReduxDomFactory from './ReduxDomFactory';
import ExpressionsParser from './viewer/components/ExpressionsParser';

class App extends ReactHabitat.Bootstrapper {
  constructor() {
    super();

    // Create a new container builder
    const containerBuilder = new ReactHabitat.ContainerBuilder();


    // Create a redux store
    // const store = configureStore() //window.__INITIAL_STATE__
    // store.runSaga(rootSaga)

    const store = createStore(
      rootReducer,
      composeWithDevTools(
        applyMiddleware(
        // thunk,
        // promise,
        // sagaMiddleware
        ),
      ),
    );

    // Set the container to use our redux factory
    containerBuilder.factory = new ReduxDomFactory(store);

    containerBuilder.register(ExpressionsParser).as('RExpressionApp');

    this.setContainer(containerBuilder.build());
  }
}

// Create a single instance of our app
const instance = new App();

window.updateHabitat = instance.update.bind(instance);

export default instance;
