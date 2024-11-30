// setup-jest.js
import '@testing-library/jest-dom';  // This is what adds the custom matchers
import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'id' }); // Configure id for tests

// Explicit jsdom setup for older Jest versions or if not configured automatically
if (!global.document || !global.document.body) {
    require('jsdom-global')(); // If necessary for older Jest versions
}
