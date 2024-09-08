import { path, isNil, map } from 'ramda';

export const vintagesVariableSelector = (state) => path(['vintages', 'variable'], state);
export const vintagesCollIdSelector = (state) => path(['vintages', 'collId'], state);
export const vintagesTsidSelector = (state) => path(['vintages', 'tsid'], state);

export const vintageObjectSelector = (vid) => (state) => path(['vintages', 'objects', vid], state);
export const vintagesListSelector = (tsid) => (state) => {
  const objects = path(['vintages', 'objects'], state);
  const vids = path(['vintages', 'byTsid', tsid], state);
  if (isNil(vids)) return undefined;
  return map((vid) => objects[vid], vids);
};
