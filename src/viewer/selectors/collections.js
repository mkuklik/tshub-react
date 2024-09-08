import * as r from 'ramda';

const getRoot = r.prop('collections');

const getCollections = r.pipe(getRoot, r.prop('collections'));

const collectionSummarySelector = (collId) => (state) => r.path(['collections', 'collectionsByID', collId], state);

export {
  getCollections,
  collectionSummarySelector,
};
