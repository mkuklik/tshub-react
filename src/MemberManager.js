// import 'babel-polyfill';    // React Habitat requires Object.assign pollyfill for old IE support
import ReactHabitat from 'react-habitat';
import Members from './members/Members';
import * as Sentry from '@sentry/react';

class App extends ReactHabitat.Bootstrapper {
  constructor() {
    super();

    // Create a new container builder
    const containerBuilder = new ReactHabitat.ContainerBuilder();

    containerBuilder.register(Members).as('RMembers');

    this.setContainer(containerBuilder.build());
  }
}

Sentry.init({dsn: "https://5adf0481b00f47a493bf0635a7b22a95@o337196.ingest.sentry.io/5352336"});

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
