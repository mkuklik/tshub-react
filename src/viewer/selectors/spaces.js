/* eslint-disable import/prefer-default-export */
import * as r from 'ramda';

export const spaceSelector = (spaceId) => (state) => r.find((x) => x.spaceId === spaceId, r.path(['spaces', 'spaces'], state));
