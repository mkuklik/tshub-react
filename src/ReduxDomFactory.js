/**
 * Copyright 2016-present, Deloitte Digital.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import { Provider } from 'react-redux';
import * as React from 'react';
import * as ReactDom from 'react-dom';

/**
 * React Redux DOM Factory
 */
export default class ReduxDomFactory {
  constructor(store = null) {
    this.store = store;
  }

  inject(module, props = {}, target) {
    if (target) {
      ReactDom.render(
        React.createElement(
          Provider,
          { store: this.store },
          React.createElement(module, props),
        ),
        target,
      );
    } else {
      // eslint-disable-next-line no-console
      console.warn('Target element is null or undefined. Cannot inject component');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  dispose(target) {
    if (target) {
      ReactDom.unmountComponentAtNode(target);
    }
  }
}
