/* eslint-disable import/prefer-default-export */
import { path } from 'ramda';

export const uploadObjectSelector = (state) => path(['upload', 'objects'], state);
export const uploadFetchPendingSelector = (state) => path(['upload', 'fetchPending'], state);
export const uploadHasPermissionSelector = (state) => path(['upload', 'hasPermission'], state);
