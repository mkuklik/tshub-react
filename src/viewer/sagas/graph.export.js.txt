import {
  select,
} from 'redux-saga/effects';
import { isNil } from 'ramda';
import { currentGraphExportOptionsSelector, currentGraphChartRefSelector } from '../selectors/graph';

const defaultExportOptions = {
  fallbackToExportServer: false,
  scale: 1.0,
};

const options = {
  png: 'image/png',
  jpeg: 'image/jpeg',
  pdf: 'image/pdf',
  svg: 'image/svg+xml',
};


export default function* exportGraph({ gid } = {}) {
  /*
  remove series from a graph
  */
  const chartRef = yield select(currentGraphChartRefSelector);
  const exportOptions = yield select(currentGraphExportOptionsSelector);

  if (!isNil(chartRef)) {
    console.log("export options", {
      ...defaultExportOptions,
      ...exportOptions,
      type: options[exportOptions.type],
    });
    chartRef.exportChartLocal({
      ...defaultExportOptions,
      ...exportOptions,
      type: options[exportOptions.type],
    });
  //   {
  //   // url: undefined,
  //   fallbackToExportServer: false,
  //   type: 'image/png', //  image/png, image/jpeg, application/pdf
  //   scale: 2.0,
  //   // filename
  //   // sourceWidth:
  //   showTable: true,
  // });
  }
}
