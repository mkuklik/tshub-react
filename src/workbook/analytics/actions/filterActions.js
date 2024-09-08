/* eslint-disable import/prefer-default-export */
import {
  ANALYTICS_FILTER_GRAPH,
} from './actionTypes';


export const analyticsHPGraphAction = ({ayid, name, create}={}) => ({
  type: ANALYTICS_FILTER_GRAPH,
  ayid, name, create,
});

