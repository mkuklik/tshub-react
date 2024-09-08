/* eslint-disable import/prefer-default-export */
import * as r from 'ramda';

export const tableCollectionsSelector = (state) => r.path(['table', 'collections'], state);

export const tableRowDataSelector = (state) => r.path(['table', 'rowData'], state);
export const tableFreqSelector = (state) => r.path(['table', 'freq'], state);
export const tableColumnDefsSelector = (state) => r.path(['table', 'columnDefs'], state);
