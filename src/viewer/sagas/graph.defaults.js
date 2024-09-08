import {
  SeriesMergeMethod,
  PartialPeriodsMethod,
  ToLowerFrequencyMethod,
  ToHigherFrequencyMethod,
  MissingValueMethod,
  GraphFrequencyMethod,
  GraphStatus,
} from './graph.constants';

export const defaultGraphUI = {
  navigator: true,
  selected: [],
  chartRef: undefined,
  export: {
    type: 'png',
    scale: 1.0,
  },
};


export const defaultGraph = () => ({
  definition: undefined,
  ui: defaultGraphUI,
  determinedFreq: undefined,
  transformedSeries: {},
  output: undefined,
  errors: [],
  status: GraphStatus.LOADING,
});

export const defaultSeriesDefinition = () => ({
  wsid: undefined,
  visible: true,
  type: 'line',
  dashStyle: 'Solid',
  linecap: 'round',
  lineWidth: 2,
  color: undefined,
  yAxis: 0,
  // undefined means that values from graph definition are taken
  partialPeriodsMethod: undefined,
  toLowerFrequencyMethod: undefined,
  toHigherFrequencyMethod: undefined,
  missingValueMethod: undefined,
});
export const defaultAxisDefinition = (opposite) => ({
  labels: {
  },
  title: {
    text: '',
    // style: {
    //     color: Highcharts.getOptions().colors[2]
    // }
  },
  showEmpty: false,
  opposite: opposite || false,
});


export const defaultGraphDefinition = ({ title, subtitle, legend } = {}) => ({
  graphFrequencyMethod: GraphFrequencyMethod.highest,
  seriesMergeMethod: SeriesMergeMethod.any,
  partialPeriodsMethod: PartialPeriodsMethod.any,
  toLowerFrequencyMethod: ToLowerFrequencyMethod.auto,
  toHigherFrequencyMethod: ToHigherFrequencyMethod.auto,
  missingValueMethod: MissingValueMethod.auto,

  theme: undefined,

  realtime: undefined,
  rangeStart: undefined,
  rangeEnd: undefined,
  chart: {
    styledMode: false,
  },
  title: {
    text: title,
    align: 'center', // undefined,
    floating: undefined,
    margin: undefined,
    style: undefined,
    verticalAlign: undefined,
    widthAdjust: undefined,
    x: undefined,
    y: undefined,
  },
  subtitle: {
    text: subtitle,
    align: undefined,
    floating: undefined,
    margin: undefined,
    style: { color: '#666666' },
    verticalAlign: undefined,
    widthAdjust: undefined,
    x: undefined,
    y: undefined,
  },
  freq: undefined,
  series: [],
  xAxis: [{
    type: 'datetime',
  }],
  yAxis: [
    defaultAxisDefinition(),
    defaultAxisDefinition(true),
  ],
  legend: {
    enabled: legend || false,
    align: undefined,
    floating: undefined,
    title: undefined,
    itemStyle: undefined,
    itemWidth: undefined,
    lineHeight: undefined,
    margin: undefined,
    layout: undefined,
    verticalAlign: undefined,
    height: undefined,
    width: undefined,
    x: undefined,
    y: undefined,
  },
});

export const defaultResolvedSeries = (wsid) => ({
  wsid,
  vid: undefined,
  realtime: undefined,
  data: [],
  freq: undefined,
  fparams: undefined,
  dtype: undefined,
  units: undefined,
  status: undefined,
  errors: [],
});
