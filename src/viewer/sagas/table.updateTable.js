/* eslint-disable import/prefer-default-export */
import { put, select } from 'redux-saga/effects';
import {
  isNil, map, filter,
} from 'ramda';
import {
  currentGraphSeriesTransformedSelector,
  currentGraphSeriesDefSelector,
  currentGraphSeriesDeterminedFreqSelector,
} from '../selectors/graph';
import NameInterpolator from '../components/NameInterpolator';
import { saveTableAction } from '../actions/tableActions';
import { seriesDefListSelector } from '../selectors/series';
import { collectionSummarySelector } from '../selectors/collections';
import { fetchAnnotationsAction } from '../actions/annotationActions';
import { uiAnnotationsisAnnotationsVisibleSelector, annotationsByCollIdSelector } from '../selectors/annotations';

function* updateTable() {
  let columnDefs = [
    {
      headerName: 'Date',
      field: 'index',
      cellRenderer: 'indexRenderer',
      collId: 'index',
      resizable: true,
      suppressMovable: true,
    },
  ];

  let rowData = [];
  const collections = [];

  const freq = yield select(currentGraphSeriesDeterminedFreqSelector);
  const data = yield select(currentGraphSeriesTransformedSelector);
  const graphSeries = yield select(currentGraphSeriesDefSelector);
  const series = yield select(seriesDefListSelector);
  const timeseries = yield select((state) => state.timeseries);

  if (data !== undefined) {
    const dataColumnDefs = graphSeries.map((x) => {
      const s = series[x.wsid];
      if (!isNil(data[x.wsid])) {
        let headerName;
        if (!isNil(s.tsid)) {
          headerName = timeseries[x.tsid] === undefined ? s.name : NameInterpolator(s.name, timeseries[x.tsid]);
        }

        return {
          headerName: headerName || s.name, // NameInterpolator(x.name, x), // TODO
          field: x.wsid,
          collId: data[x.wsid].collId,
          tsid: data[x.wsid].tsid,
          cellRenderer: 'valueRenderer',
          headerComponent: 'timeSeriesRenderer',
          resizable: true,
          suppressMovable: true,
        };
      }
      return undefined;
    }).filter((x) => x !== undefined);

    const collIds1 = filter((x) => !isNil(x), map((x) => x.collId, Object.values(data)));
    const collIds = collIds1.filter((item, index) => collIds1.indexOf(item) === index);
    // eslint-disable-next-line no-restricted-syntax
    for (const collId of collIds) {
      const tmp = yield select(collectionSummarySelector(collId));
      collections.push(isNil(tmp) ? { collId, name: '`pending`' } : tmp);
    }

    // eslint-disable-next-line no-console
    columnDefs = [
      ...columnDefs,
      ...dataColumnDefs,
    ];

    // merge index ToDO
    const index = Array.from(graphSeries.reduce((result, item) => {
      if (data[item.wsid].data !== undefined) data[item.wsid].data.map((x) => result.add(x[0]));
      return result;
    }, new Set([])));

    index.sort((a, b) => a - b);

    // this.props.data
    rowData = index.map((inx) => graphSeries.reduce((result, item) => {
      let x;
      if (data[item.wsid].data !== undefined) x = data[item.wsid].data.find((y) => y[0] === inx);
      return {
        ...result,
        [item.wsid]: (x === undefined) ? undefined : x[1],
      };
    }, { index: inx }));
  }

  yield put(saveTableAction({
    columnDefs, rowData, freq, collections,
  }));

  /*
      Fetch annotations is they are visible
  */
  const isAnnotationsVisible = yield select(uiAnnotationsisAnnotationsVisibleSelector);
  if (isAnnotationsVisible) {
    for (const collId of collIds) {
      const ann = yield select(annotationsByCollIdSelector(collId));
      if (isNil(ann)) {
        yield put(fetchAnnotationsAction(collId));
      }
    }
  }
}

export default updateTable;
