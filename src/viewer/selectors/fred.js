import { path } from 'ramda';

// const fredStoreSelector = (state) => state.fred;
const fredApiKeySelector = path(['fred', 'config', 'apiKey']);
const fredRemoveDiscontinuedSelector = path(['fred', 'config', 'removeDiscontinued']);

export {
  fredApiKeySelector,
  fredRemoveDiscontinuedSelector,
};
