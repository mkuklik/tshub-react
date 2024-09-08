/* eslint-disable import/prefer-default-export */

import {
  GRAPH_VIEWER_FETCH_GRAPH,
  GRAPH_VIEWER_INITIATE,
} from './ActionTypes';


// SAGAS

export const initiateGraphViewerAction = ({ collId } = {}) => ({
  type: GRAPH_VIEWER_INITIATE,
  collId,
});

export const fetchGraphAction = ({ wid, gid, key } = {}) => ({
  type: GRAPH_VIEWER_FETCH_GRAPH,
  wid,
  gid,
  key,
});
