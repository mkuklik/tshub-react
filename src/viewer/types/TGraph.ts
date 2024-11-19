import {
  PartialPeriodsMethod,
  ToLowerFrequencyMethod,
  ToHigherFrequencyMethod,
  MissingValueMethod,
  GraphFrequencyMethod,
} from '../sagas/graph.constants';
import { SeriesKind } from '../sagas/series.constants';
import { FreqType, DTypeType } from './Tcommon';

export type KindType = keyof typeof SeriesKind;
export type LineType = 'line' | 'column' | 'area';
export type GraphFrequencyMethodType = keyof typeof GraphFrequencyMethod;
export type PartialPeriodsMethodType = keyof typeof PartialPeriodsMethod;
export type ToLowerFrequencyMethodType = keyof typeof ToLowerFrequencyMethod;
export type ToHigherFrequencyMethodType = keyof typeof ToHigherFrequencyMethod;
export type MissingValueMethodType = keyof typeof MissingValueMethod;

interface ISeriesDefinitionType {
  wsid: string;
  // kind: KindType;
  // name: string;
  // expr: string;
  // tsid: string;
  // collId: string;
  // resolved: {
  //   freq: FreqType;
  //   fparams: object;
  //   dtype: DTypeType;
  //   units: object;
  //   data: any[][];
  // };
  // HIGHCHARTS PROPERTIES
  type?: LineType;
  visible?: boolean;
  dashStyle?:
    | 'Solid'
    | 'ShortDash'
    | 'ShortDot'
    | 'ShortDashDot'
    | 'ShortDashDotDot'
    | 'Dot'
    | 'Dash'
    | 'LongDash'
    | 'DashDot'
    | 'LongDashDot'
    | 'LongDashDotDot';
  linecap: 'butt' | 'round' | 'square';
  lineWidth: number;
  color?: string;
  xAxis?: number;
  yAxis?: number;
  opacity?: number;
  marker?: {
    enabled?: boolean;
    symbol?: 'circle' | 'square' | 'diamond' | 'triangle' | 'triangle-down';
    fillColor?: string;
    height?: number;
    lineColor?: string; // Assuming lineColor is a string
    lineWidth?: number;
    radius?: number;
    width?: number;
  };
  showInLegend?: boolean;
  legendIndex?: number;
  threshold?: number;
  negativeColor?: string;
  // METHODS
  partialPeriodsMethod?: PartialPeriodsMethodType;
  toLowerFrequencyMethod?: ToLowerFrequencyMethodType;
  toHigherFrequencyMethod?: ToHigherFrequencyMethodType;
  missingValueMethod?: MissingValueMethodType;
}

export const SeriesPropNames: (keyof ISeriesDefinitionType)[] = [
  'type',
  'visible',
  'dashStyle',
  'linecap',
  'lineWidth',
  'color',
  'xAxis',
  'yAxis',
  'opacity',
  'marker',
  'showInLegend',
  'legendIndex',
  'threshold',
  'negativeColor',
  'partialPeriodsMethod',
  'toLowerFrequencyMethod',
  'toHigherFrequencyMethod',
  'missingValueMethod',
];

interface IStyleType {
  color?: string;
  font?: string;
  fontWeight?: string;
}

interface ITitleType {
  text?: string;
  // todo
}

interface IChartType {
  height?: string | number;
  // todo
}

interface ILegendType {
  enabled?: boolean;
  title?: {
    text?: string;
    style?: IStyleType;
  };
  align?: string;
  verticalAlign?: string;
}

interface IYAxisType {
  title?: {
    text?: string;
    style?: IStyleType;
  };
}

type IYAxisArrayType = IYAxisType[];

interface IGraphDefinitionType {
  theme?: string;
  freq?: FreqType;
  realtime?: Date;

  rangeStart?: Date;
  rangeEnd?: Date;

  series: ISeriesDefinitionType[];

  // fallback values for each series
  graphFrequencyMethod?: GraphFrequencyMethodType;
  partialPeriodsMethod?: PartialPeriodsMethodType;
  toLowerFrequencyMethod?: ToLowerFrequencyMethodType;
  toHigherFrequencyMethod?: ToHigherFrequencyMethodType;
  missingValueMethod?: MissingValueMethodType;

  // highcharts
  navigation?: boolean;
  title?: ITitleType;
  subtitle?: ITitleType;
  chart?: IChartType;
  legend?: ILegendType;
  yAxis?: IYAxisArrayType;
}

export const GraphPropNames: (keyof IGraphDefinitionType)[] = [
  'theme',
  'freq',
  'realtime',
  'rangeStart',
  'rangeEnd',
  'graphFrequencyMethod',
  'partialPeriodsMethod',
  'toLowerFrequencyMethod',
  'toHigherFrequencyMethod',
  'missingValueMethod',
  'navigation',
  'title',
  'subtitle',
  'chart',
  'legend',
  'yAxis',
];

interface IRefType {
  tsName?: string;
  collName?: string;
  spaceName?: string;
  collId?: string;
  tsid?: string;
  realtime?: string;
  vid?: string;
  vname?: string;
}

// It's best to be more specific than 'object' if possible.
// If you know the structure of 'realtime', replace 'any' with
// the correct type.
interface IRealtimeType {
  [key: string]: Date;
}

interface IResolvedSeriesType {
  wsid?: string;
  vid?: string;
  realtime: IRealtimeType;
  ast: object; // ast from parser
  refs: IRefType; // _ref<i> -> Reference
  freq?: FreqType;
  fparams: object;
  dtype: DTypeType;
  units: object;
  data: any[][]; // Or be more specific if you know the data structure
  status?: string;
}

type ITransformedSeriesType = IResolvedSeriesType;

interface IOutputType {
  // Add properties if needed
}

interface IErrorType {
  wsid?: string; // series it it is referring to
  message?: string;
  stage?: string;
}

interface IGraphUIType {
  selected: string[]; // selected series
  navigator?: boolean;
}

export const GraphUIPropNames: (keyof IGraphUIType)[] = ['selected', 'navigator'];

interface IGraphType {
  definition: IGraphDefinitionType;
  ui?: IGraphUIType;
  determinedFreq?: FreqType;
  transformedSeries?: ITransformedSeriesType;
  output?: IOutputType;
  errors?: IErrorType[];
}

export default IGraphType;

// import types from 'prop-types';
// import {
//   PartialPeriodsMethod,
//   ToLowerFrequencyMethod,
//   ToHigherFrequencyMethod,
//   MissingValueMethod,
//   GraphFrequencyMethod,
// } from '../sagas/graph.constants';
// import { SeriesKind } from '../sagas/series.constants';
// import { FreqType, DTypeType } from './common';

// export const KindType = types.oneOf(Object.values(SeriesKind));
// export const LineType = types.oneOf(['line', 'column', 'area']);
// export const GraphFrequencyMethodType = types.oneOf(Object.values(GraphFrequencyMethod));
// export const PartialPeriodsMethodType = types.oneOf(Object.values(PartialPeriodsMethod));
// export const ToLowerFrequencyMethodType = types.oneOf(Object.values(ToLowerFrequencyMethod));
// export const ToHigherFrequencyMethodType = types.oneOf(Object.values(ToHigherFrequencyMethod));
// export const MissingValueMethodType = types.oneOf(Object.values(MissingValueMethod));

// const SeriesDefinitionTypeDict = {
//   wsid: types.string.isRequired,
//   // kind: PropTypes.KindType,
//   // name: PropTypes.string,
//   // expr: PropTypes.string,
//   // tsid: PropTypes.string,
//   // collId: PropTypes.string,
//   // resolved: PropTypes.shape({
//   //   freq: PropTypes.FreqType,
//   //   fparams: PropTypes.Object,
//   //   dtype: DTypeType,
//   //   units: PropTypes.Object,
//   //   data: PropTypes.arrayOf(PropTypes.array),
//   // }),
//   // HIGHCHARTS PROPERTIES
//   type: LineType,
//   visible: types.bool,
//   dashStyle: types.oneOf(['Solid',
//     'ShortDash',
//     'ShortDot',
//     'ShortDashDot',
//     'ShortDashDotDot',
//     'Dot',
//     'Dash',
//     'LongDash',
//     'DashDot',
//     'LongDashDot',
//     'LongDashDotDot']), // TODO
//   linecap: types.oneOf(['butt', 'round', 'square']).isRequired, // TODO
//   lineWidth: types.number.isRequired,
//   color: types.string,
//   xAxis: types.number,
//   yAxis: types.number,
//   opacity: types.number,
//   marker: types.shape({
//     enabled: types.bool,
//     symbol: types.oneOf(['circle', 'square', 'diamond', 'triangle', 'triangle-down']),
//     fillColor: types.string,
//     height: types.number,
//     lineColor: types.lineColor,
//     lineWidth: types.number,
//     radius: types.number,
//     width: types.number,
//   }),
//   showInLegend: types.bool,
//   legendIndex: types.number,
//   threshold: types.number,
//   negativeColor: types.string,
//   // METHODS
//   partialPeriodsMethod: PartialPeriodsMethodType,
//   toLowerFrequencyMethod: ToLowerFrequencyMethodType,
//   toHigherFrequencyMethod: ToHigherFrequencyMethodType,
//   missingValueMethod: MissingValueMethodType,
// };

// export const SeriesDefinitionType = types.shape(SeriesDefinitionTypeDict);

// export const SeriesPropNames = Object.keys(SeriesDefinitionTypeDict).filter(
//   (x) => !['wsid', 'kind', 'name', 'expr', 'tsid', 'collId', 'resolved'].includes(x)
// );

// export const StyleType = types.shape({
//   color: types.string,
//   font: types.string,
//   fontWeight: types.string,
// });

// export const TitleType = types.shape({
//   text: types.string,
//   // todo
// });

// export const ChartType = types.shape({
//   height: types.oneOfType([types.string, types.number]),
//   // todo
// });

// export const LegendType = types.shape({
//   enabled: types.bool,
//   title: types.shape({
//     text: types.string,
//     style: StyleType,
//   }),
//   align: types.string,
//   verticalAlign: types.string,
// });

// export const YAxisType = types.shape({
//   title: types.shape({
//     text: types.string,
//     style: StyleType,
//   }),
// });

// export const YAxisArrayType = types.arrayOf(YAxisType);

// const GraphDefinitionTypeDict = {
//   theme: types.string,
//   freq: FreqType,
//   realtime: types.instanceOf(Date),

//   rangeStart: types.instanceOf(Date),
//   rangeEnd: types.instanceOf(Date),

//   series: types.arrayOf(SeriesDefinitionType),

//   // fallback values for each series
//   graphFrequencyMethod: GraphFrequencyMethodType,
//   partialPeriodsMethod: PartialPeriodsMethodType,
//   toLowerFrequencyMethod: ToLowerFrequencyMethodType,
//   toHigherFrequencyMethod: ToHigherFrequencyMethodType,
//   missingValueMethod: MissingValueMethodType,

//   // highcharts
//   navigation: types.bool,
//   title: TitleType,
//   subtitle: TitleType,
//   chart: ChartType,
//   legend: LegendType,
//   yAxis: YAxisArrayType,
// };

// export const GraphDefinitionType = types.shape(GraphDefinitionTypeDict);

// export const GraphPropNames = Object.keys(GraphDefinitionTypeDict).filter(x => !['series'].includes(x));

// export const RefType = types.shape({
//   tsName: types.string,
//   collName: types.string,
//   spaceName: types.string,
//   collId: types.string,
//   tsid: types.string,
//   realtime: types.string, // ???
//   vid: types.string,
//   vname: types.string,
// });

// export const ResolvedSeriesType = types.shape({
//   wsid: types.string,
//   vid: types.string,
//   realtime: types.objectOf(Date), // TODO
//   ast: types.object, // ast from parser
//   refs: RefType, // _ref<i> -> Reference
//   freq: types.FreqType,
//   fparams: types.Object,
//   dtype: DTypeType,
//   units: types.Object,
//   data: types.arrayOf(types.array),
//   status: types.string,
// });

// export const TransformedSeriesType = ResolvedSeriesType;

// export const OutputType = types.shape({

// });

// export const ErrorType = types.shape({
//   wsid: types.string, // series it it is referring to
//   message: types.string,
//   stage: types.string,
// });

// export const GraphUITypeDict = {
//   selected: types.arrayOf(types.string), // selected series
//   navigator: types.bool,
// };

// export const GraphUIType = types.shape(GraphUITypeDict);

// export const GraphUIPropNames = Object.keys(GraphUITypeDict);

// export const GraphType = types.shape({
//   definition: GraphDefinitionType.isRequired,
//   ui: GraphUIType,
//   determinedFreq: FreqType, // TODO review it
//   transformedSeries: TransformedSeriesType,
//   output: OutputType,
//   errors: types.arrayOf(ErrorType),
// });

// export default GraphType;
