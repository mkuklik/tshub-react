import { TS } from "../../expressions/timeseries";
import { IErrorsState } from "../reducers/errorsReducer";
import {
  SeriesStatus,
  TSeriesKind,
  TSeriesStatus,
} from "../sagas/series.constants";
import { IFreq, IDType } from "./Tcommon";
import { Moment } from "moment";
// It's best to be more specific than 'object' if possible.
// If you know the structure of 'realtime', replace 'any' with
// the correct type.

interface ISeries {
  wsid: string;
  kind: TSeriesKind;
  name: string;
  expr?: string;
  realtime?: Moment;
  freq?: IFreq;
  fparams?: object;
  dtype?: IDType;
  dparam?: object;
  units?: object;
  data?: any[][]; // Or be more specific if you know the data structure
  status?: TSeriesStatus;
}

export interface IResolvedSeries extends ISeries {
  tsid?: string;
  collId?: string;
  errors: IError[];
  status?: TSeriesStatus;
}

/*
  let resolvedSeries = {
    expr,
    tsid: undefined,
    collId: undefined,
    realtime: undefined,
    data: [],
    freq: undefined,
    fparams: undefined,
    dtype: undefined,
    dparams: undefined,
    units: undefined,
    errors: [],
    status: SeriesStatus.RESOLVING,
  };

// Create series
  const series = {
    wsid: _wsid,
    expr,
    name: _name,
    realtime,
    kind: SeriesKind.expr,
  };
// create data series

  const series = {
    wsid: _wsid,
    name: _name,
    freq,
    fparam,
    dtype,
    dparam,
    units,
    data,
    realtime,
    kind: SeriesKind.data,
  };
  */

export { ISeries };
