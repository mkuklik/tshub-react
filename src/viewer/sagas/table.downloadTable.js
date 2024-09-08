/* eslint-disable import/prefer-default-export */
import { select, put } from 'redux-saga/effects';
import { tableFreqSelector } from '../selectors/table';
import { WSeries, WSeriesDownload } from '../../analytics_client';
import { currentGraphSeriesTransformedSelector } from '../selectors/graph';
import { reportErrorAction } from '../actions/errorActions';


export const callDownloadAnalytics = (params) => (
  // TODO
  new Promise((resolve, reject) => {
    window._chronosdb.wseriesApi.analyticsApiDownloadPost(
      params,
      (error, data) => (
        error ? reject(error) : resolve(data)
      ),
    );
  })
);


function* downloadTable() {
  const freq = yield select(tableFreqSelector);
  const data = yield select(currentGraphSeriesTransformedSelector);

  const params = new WSeriesDownload();
  params.freq = freq;
  params.file_format = 'xlsx';
  params.series = [];

  for (const x in data) {
    params.series.push(WSeries.constructFromObject(data[x]));
  }

  try {
    const response = await callDownloadAnalytics(params);
    const filename = `download.${params.file_format}`; // response.headers['X-Suggested-Filename'] ||
    // response.data.pipe(fs.createWriteStream("todays_picture.png"));
    // FileDownload(new Blob([response.data]), filename, response.headers['content-type']);
    const url = window.URL.createObjectURL(new Blob([response])); // , {type: 'application/octet-stream'});
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    yield put(reportErrorAction({ message: `Error downloading table, ${error}` }));
  }
}

export default downloadTable;
