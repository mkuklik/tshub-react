import {
  put, select,
} from 'redux-saga/effects';
import * as R from 'ramda';
import { graphSelector, currentGraphUISelector } from '../selectors/graph';
import { saveGeneratedGraphAction } from '../actions/graphActions';
import getTheme from '../components/themes';
import { getFormat } from '../utilities/format';
import highchartBase from './graph.highchartBase';
import { seriesDefListSelector } from '../selectors/series';

export default function* generateGraph(action) {
  /*
    this function takes graph object, which consists of graph definitions etc
    and resolves it into a direct input to Highchart library
  */
  const { gid } = action;
  const graph = yield select(graphSelector(gid));
  const ui = yield select(currentGraphUISelector(gid));
  const allSeries = yield select(seriesDefListSelector);
  const selectedSeries = (ui === undefined) ? [] : ui.selected;

  let opt = highchartBase(graph.determinedFreq);

  const themeOptions = R.has('theme', graph.definition) ? getTheme(graph.theme) : {};

  opt = {
    ...opt,
  };

  // merge theme to opt
  // Object.keys(opt).forEach((k) => {
  //   opt[k] = {
  //     ...opt[k],
  //     ...((has(themeOptions, k)) ? themeOptions[k] : {}),
  //   };
  //   if (has(graph, k)) {
  //     opt[k] = {
  //       ...opt[k],
  //       ...Object.entries(graph.title).reduce((a, [kk, v]) => (v ? { ...a, [kk]: v } : a), {}),
  //     };
  //   }
  // });

  // Graph definitions
  opt = R.mergeDeepRight(opt, { legend: R.pickBy((v) => !R.isNil(v), R.path(['legend'], graph.definition)) });
  opt = R.mergeDeepRight(opt, { title: R.pickBy((v) => !R.isNil(v), R.path(['title'], graph.definition)) });
  opt = R.mergeDeepRight(opt, { subtitle: R.pickBy((v) => !R.isNil(v), R.path(['subtitle'], graph.definition)) });
  // merge first xAxis
  opt.xAxis[0] = R.mergeDeepRight(opt.xAxis[0], R.pickBy((v) => !R.isNil(v), R.path(['xAxis', 0], graph.definition)));
  opt.yAxis[0] = R.mergeDeepRight(opt.yAxis[0], R.pickBy((v) => !R.isNil(v), R.path(['yAxis', 0], graph.definition)));
  opt.yAxis[1] = R.mergeDeepRight(opt.yAxis[1], R.pickBy((v) => !R.isNil(v), R.path(['yAxis', 1], graph.definition)));

  // opt.title = R.mergeDeepRight(opt.title, R.pickBy((v) => !R.isNil(v), R.path(['title'], graph.definition)));
  // opt.subtitle = R.mergeDeepRight(opt.title, R.pickBy((v) => !R.isNil(v), R.path(['subtitle'], graph.definition)));

  // Series definitions
  const series = graph.definition.series.map((s) => ({
    name: R.path([s.wsid, 'name'], allSeries),
    ...R.pick([
      'wsid',
      'kind',
      'name',
      // style
      'type',
      'visible',
      'dashStyle',
      'linecap',
      'lineWidth',
      'color',
      'yAxis',
      'marker',
      'negativeColor',
      'opacity',
      // todo from types/Graph
    ], s),
    data: graph.transformedSeries[s.wsid].data,
    id: s.wsid, // id is used by highcharts for updates
    selected: selectedSeries.includes(s.wsid),
    hover: selectedSeries.includes(s.wsid),
  }));

  // xAxis labels
  // R.path(['xAxis', 0, 'labels', 'format'], opt);
  // opt.xAxis[0].labels.format = `{value: ${getFormat(graph.determinedFreq)}}`;

  opt = {
    ...opt,
    series,
  };

  opt = {
    ...opt,
    navigator: {
      enabled: graph.ui.navigator,
    },
    plotOptions: {
      series: {
        showInNavigator: true,
        coursoe: 'pointer',
        point: {
          events: {
            // mouseOver: this.setHoverData.bind(this)
            // click: (e) => {
            //   console.log(this);
            //   console.log(e);
            //   console.log(e.point.y);
            // },
          },
        },
      },
    },
    lang: {
      noData: 'No data to display',
    },
    noData: {
      style: {
        fontWeight: 'bold',
        fontSize: '15px',
        color: '#303030',
      },
    },
  };

  yield put(saveGeneratedGraphAction({ gid, output: opt }));
  return opt;
}
