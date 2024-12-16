import * as R from 'ramda';
import {
  put,
  select,
} from 'redux-saga/effects';
import { namespaceTimeSeriesSelector } from '../selectors/graph';
import { fetchTimeseriesDetailsByName } from './timeseries';
import { updateNamespace, Namespace } from '../actions/namespaceActions';
import { Moment } from 'moment';
import { IRefs } from '../../expressions/Evaluator';


/**
 * fetch data which is required for evaluating an expression
 *
 * @param refs - An object containing references to time series data.
 * @yields {object} An object containing the resolved references and any errors encountered.
 */
function* resolveReference(refs: IRefs) {
  // fetch time series details
  // 'tsName', 'collName', 'spaceName', 'start', 'end', 'realtime'
  const errors: string[] = [];

  for (const refId in refs) {
    if (R.has(refId, refs)) {
      const ref = refs[refId];

      if (ref.wsid === undefined && (ref.collId === undefined || ref.tsid === undefined)) {
        // if either collId or tsid is missing, try to get them using (spaceName, collName, tsName)
        if (ref.tsName !== undefined
          && ref.collName !== undefined
          && ref.spaceName !== undefined) {
          // check cached namespace queries
          const query: Namespace | undefined = yield select(namespaceTimeSeriesSelector(
            ref.spaceName, ref.collName, ref.tsName,
          ));
          if (query === undefined) {
            const [ts, err]: [
              { tsid: string; collId: string; spaceId: string } | undefined,
              string | undefined
            ] = yield fetchTimeseriesDetailsByName({
              spaceName: ref.spaceName,
              collName: ref.collName,
              tsName: ref.tsName,
            });
            if (err !== undefined) {
              // handle error
              ref.error = "couldn't resolve the series";
              errors.push(ref.error);
            } else if (ts !== undefined) { // Null check for ts
              ref.tsid = ts.tsid;
              ref.collId = ts.collId;
              ref.spaceId = ts.spaceId;
              // save the query
              yield put(updateNamespace({
                spaceName: ref.spaceName,
                collName: ref.collName,
                tsName: ref.tsName,
                spaceId: ts.spaceId,
                collId: ts.collId,
                tsid: ts.tsid,
              }));
              yield put(updateNamespace({
                spaceName: ref.spaceName,
                collName: ref.collName,
                spaceId: ts.spaceId,
                collId: ts.collId,
              }));
              yield put(updateNamespace({
                spaceName: ref.spaceName,
                spaceId: ts.spaceId,
              }));
            }
          } else {
            ref.tsid = query.tsid;
            ref.collId = query.collId;
            ref.spaceId = query.spaceId;
          }
        } else {
          ref.error = "couldn't resolve the series";
          errors.push(ref.error);
        }
      }
    }
  }
  // save references
  return { refs, errors };
}

export default resolveReference;



// import * as R from 'ramda';
// import {
//   put,
//   select,
// } from 'redux-saga/effects';
// import { namespaceTimeSeriesSelector } from '../selectors/graph';
// import { fetchTimeseriesDetailsByName } from './timeseries';
// import { updateNamespace } from '../actions/namespaceActions';

// function* resolveReference(refs) {
//   /*
//     fetch data which is required for evaluating an expression
//   */

//   // fetch time series details
//   // 'tsName', 'collName', 'spaceName', 'start', 'end', 'realtime'
//   let errors = [];
//   // eslint-disable-next-line no-restricted-syntax
//   // yield all(refs.map(x => call(foo, bar)));
//   // eslint-disable-next-line no-restricted-syntax
//   for (const refId in refs) {
//     if (R.has(refId, refs)) {
//       const ref = refs[refId];

//       if (refs[refId].wsid === undefined && (refs[refId].collId === undefined || refs[refId].tsid === undefined)) {
//         // if eitehr collId or tsid is missing, try to get them using (spaceName, collName, tsName)
//         if (ref.tsName !== undefined
//           && ref.collName !== undefined
//           && ref.spaceName !== undefined) {
//           // check cached namespace quaries
//           const query = yield select(namespaceTimeSeriesSelector(
//             ref.spaceName, ref.collName, ref.tsName,
//           ));
//           if (query === undefined) {
//             const [ts, err] = yield fetchTimeseriesDetailsByName({
//               spaceName: ref.spaceName,
//               collName: ref.collName,
//               tsName: ref.tsName,
//             });
//             if (err !== undefined) {
//               // handle error
//               ref.error = "couldn't resolve the series";
//               errors.push(ref.error);
//             } else {
//               ref.tsid = ts.tsid;
//               ref.collId = ts.collId;
//               ref.spaceId = ts.spaceId;
//               // save the query
//               yield put(updateNamespace({
//                 spaceName: ref.spaceName,
//                 collName: ref.collName,
//                 tsName: ref.tsName,
//                 spaceId: ts.spaceId,
//                 collId: ts.collId,
//                 tsid: ts.tsid,
//               }));
//               yield put(updateNamespace({
//                 spaceName: ref.spaceName,
//                 collName: ref.collName,
//                 spaceId: ts.spaceId,
//                 collId: ts.collId,
//               }));
//               yield put(updateNamespace({
//                 spaceName: ref.spaceName,
//                 spaceId: ts.spaceId,
//               }));
//             }
//           } else {
//             ref.tsid = query.tsid;
//             ref.collId = query.collId;
//             ref.spaceId = query.spaceId;
//           }
//         } else {
//           ref.error = "couldn't resolve the series";
//           errors.push(ref.error);
//         }
//       }
//     }
//   }
//   // save references
//   return { refs, errors };
// }

// export default resolveReference;
