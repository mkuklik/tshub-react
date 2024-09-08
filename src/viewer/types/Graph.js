import types from 'prop-types';
import {
  PartialPeriodsMethod,
  ToLowerFrequencyMethod,
  ToHigherFrequencyMethod,
  MissingValueMethod,
  GraphFrequencyMethod,
} from '../sagas/graph.constants';
import { SeriesKind } from '../sagas/series.constants';
import { FreqType, DTypeType } from './common';

export const KindType = types.oneOf(Object.values(SeriesKind));
export const LineType = types.oneOf(['line', 'column', 'area']);
export const GraphFrequencyMethodType = types.oneOf(Object.values(GraphFrequencyMethod));
export const PartialPeriodsMethodType = types.oneOf(Object.values(PartialPeriodsMethod));
export const ToLowerFrequencyMethodType = types.oneOf(Object.values(ToLowerFrequencyMethod));
export const ToHigherFrequencyMethodType = types.oneOf(Object.values(ToHigherFrequencyMethod));
export const MissingValueMethodType = types.oneOf(Object.values(MissingValueMethod));

const SeriesDefinitionTypeDict = {
  wsid: types.string.isRequired,
  // kind: PropTypes.KindType,
  // name: PropTypes.string,
  // expr: PropTypes.string,
  // tsid: PropTypes.string,
  // collId: PropTypes.string,
  // resolved: PropTypes.shape({
  //   freq: PropTypes.FreqType,
  //   fparams: PropTypes.Object,
  //   dtype: DTypeType,
  //   units: PropTypes.Object,
  //   data: PropTypes.arrayOf(PropTypes.array),
  // }),
  // HIGHCHARTS PROPERTIES
  type: LineType,
  visible: types.bool,
  dashStyle: types.oneOf(['Solid',
    'ShortDash',
    'ShortDot',
    'ShortDashDot',
    'ShortDashDotDot',
    'Dot',
    'Dash',
    'LongDash',
    'DashDot',
    'LongDashDot',
    'LongDashDotDot']), // TODO
  linecap: types.oneOf(['butt', 'round', 'square']).isRequired, // TODO
  lineWidth: types.number.isRequired,
  color: types.string,
  xAxis: types.number,
  yAxis: types.number,
  opacity: types.number,
  marker: types.shape({
    enabled: types.bool,
    symbol: types.oneOf(['circle', 'square', 'diamond', 'triangle', 'triangle-down']),
    fillColor: types.string,
    height: types.number,
    lineColor: types.lineColor,
    lineWidth: types.number,
    radius: types.number,
    width: types.number,
  }),
  showInLegend: types.bool,
  legendIndex: types.number,
  threshold: types.number,
  negativeColor: types.string,
  // METHODS
  partialPeriodsMethod: PartialPeriodsMethodType,
  toLowerFrequencyMethod: ToLowerFrequencyMethodType,
  toHigherFrequencyMethod: ToHigherFrequencyMethodType,
  missingValueMethod: MissingValueMethodType,
};

export const SeriesDefinitionType = types.shape(SeriesDefinitionTypeDict);

export const SeriesPropNames = Object.keys(SeriesDefinitionTypeDict).filter(
  (x) => !['wsid', 'kind', 'name', 'expr', 'tsid', 'collId', 'resolved'].includes(x)
);

export const StyleType = types.shape({
  color: types.string,
  font: types.string,
  fontWeight: types.string,
});

export const TitleType = types.shape({
  text: types.string,
  // todo
});

export const ChartType = types.shape({
  height: types.oneOfType([types.string, types.number]),
  // todo
});

export const LegendType = types.shape({
  enabled: types.bool,
  title: types.shape({
    text: types.string,
    style: StyleType,
  }),
  align: types.string,
  verticalAlign: types.string,
});

export const YAxisType = types.shape({
  title: types.shape({
    text: types.string,
    style: StyleType,
  }),
});

export const YAxisArrayType = types.arrayOf(YAxisType);

const GraphDefinitionTypeDict = {
  theme: types.string,
  freq: FreqType,
  realtime: types.instanceOf(Date),

  rangeStart: types.instanceOf(Date),
  rangeEnd: types.instanceOf(Date),

  series: types.arrayOf(SeriesDefinitionType),

  // fallback values for each series
  graphFrequencyMethod: GraphFrequencyMethodType,
  partialPeriodsMethod: PartialPeriodsMethodType,
  toLowerFrequencyMethod: ToLowerFrequencyMethodType,
  toHigherFrequencyMethod: ToHigherFrequencyMethodType,
  missingValueMethod: MissingValueMethodType,

  // highcharts
  navigation: types.bool,
  title: TitleType,
  subtitle: TitleType,
  chart: ChartType,
  legend: LegendType,
  yAxis: YAxisArrayType,
};

export const GraphDefinitionType = types.shape(GraphDefinitionTypeDict);

export const GraphPropNames = Object.keys(GraphDefinitionTypeDict).filter(x => !['series'].includes(x));

export const RefType = types.shape({
  tsName: types.string,
  collName: types.string,
  spaceName: types.string,
  collId: types.string,
  tsid: types.string,
  realtime: types.string, // ???
  vid: types.string,
  vname: types.string,
});

export const ResolvedSeriesType = types.shape({
  wsid: types.string,
  vid: types.string,
  realtime: types.objectOf(Date), // TODO
  ast: types.object, // ast from parser
  refs: RefType, // _ref<i> -> Reference
  freq: types.FreqType,
  fparams: types.Object,
  dtype: DTypeType,
  units: types.Object,
  data: types.arrayOf(types.array),
  status: types.string,
});

export const TransformedSeriesType = ResolvedSeriesType;

export const OutputType = types.shape({

});

export const ErrorType = types.shape({
  wsid: types.string, // series it it is referring to
  message: types.string,
  stage: types.string,
});

export const GraphUITypeDict = {
  selected: types.arrayOf(types.string), // selected series
  navigator: types.bool,
};

export const GraphUIType = types.shape(GraphUITypeDict);

export const GraphUIPropNames = Object.keys(GraphUITypeDict);

export const GraphType = types.shape({
  definition: GraphDefinitionType.isRequired,
  ui: GraphUIType,
  determinedFreq: FreqType, // TODO review it
  transformedSeries: TransformedSeriesType,
  output: OutputType,
  errors: types.arrayOf(ErrorType),
});

export default GraphType;
