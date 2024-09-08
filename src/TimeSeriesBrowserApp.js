import ReactHabitat from 'react-habitat';

import rootSaga from './viewer/sagas';
import configureStore from './viewer/store/configureStore';

import ReduxDomFactory from './ReduxDomFactory';
import TimeseriesBrowserPage from './viewer/pages';

class App extends ReactHabitat.Bootstrapper {
  constructor() {
    super();

    const containerBuilder = new ReactHabitat.ContainerBuilder();

    const store = configureStore();
    store.runSaga(rootSaga);

    containerBuilder.factory = new ReduxDomFactory(store);
    containerBuilder.register(TimeseriesBrowserPage).as('RTimeSeriesBrowser');

    this.setContainer(containerBuilder.build());
  }
}

const instance = new App();
window.updateHabitat = instance.update.bind(instance);

export default instance;
