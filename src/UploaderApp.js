// import 'babel-polyfill';    // React Habitat requires Object.assign pollyfill for old IE support
import ReactHabitat from 'react-habitat';
// import { composeWithDevTools } from 'redux-devtools-extension';
import configureStore from './uploader/store/configureStore';
import rootSaga from './uploader/sagas';
import ReduxDomFactory from './ReduxDomFactory';
import Uploader from './uploader/components/main';

class App extends ReactHabitat.Bootstrapper {
  constructor() {
    super();

    // Create a new container builder
    const containerBuilder = new ReactHabitat.ContainerBuilder();


    // Create a redux store
    const store = configureStore(); // window.__INITIAL_STATE__
    store.runSaga(rootSaga);

    // Set the container to use our redux factory
    containerBuilder.factory = new ReduxDomFactory(store);

    containerBuilder.register(Uploader).as('RUploader');

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
