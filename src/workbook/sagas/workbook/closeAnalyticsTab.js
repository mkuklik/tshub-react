import { put } from 'redux-saga/effects';
import { deleteAnalyticsObjectAction } from '../../analytics/actions';
import { nodeIdToAyid } from '../../layouts/definitions';

export default function* closeAnalyticsTab({ nodeId }) {
  const ayid = nodeIdToAyid(nodeId);
  yield put(deleteAnalyticsObjectAction(ayid));
}
