import createAnalytics from '../../analytics/sagas/createAnalytics';
import addAnalyticsTab from './addAnalyticsTab';

export default function* createAnalyticsTab(action) {
  const { kind } = action;
  let { ayid } = action;

  ayid = yield createAnalytics({ ayid, kind });

  // create analytics tab
  yield addAnalyticsTab({ ayid });

  return ayid;
}
