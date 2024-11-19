import { FreqType, DTypeType } from './Tcommon';

// It's best to be more specific than 'object' if possible.
// If you know the structure of 'realtime', replace 'any' with
// the correct type.
interface RealtimeType {
  [key: string]: Date;
}

interface SeriesType {
  wsid?: string;
  realtime: RealtimeType;
  freq: FreqType;
  fparams: object;
  dtype: DTypeType;
  units: object;
  data: any[][]; // Or be more specific if you know the data structure
  status?: string;
}

export { SeriesType };
