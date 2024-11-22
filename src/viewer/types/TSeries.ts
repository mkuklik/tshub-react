import { IFreq, IDType } from "./Tcommon";

// It's best to be more specific than 'object' if possible.
// If you know the structure of 'realtime', replace 'any' with
// the correct type.
interface IRealtime {
  [key: string]: Date;
}

interface ISeries {
  wsid: string;
  realtime?: IRealtime;
  freq?: IFreq;
  fparams?: object;
  dtype?: IDType;
  units?: object;
  data?: any[][]; // Or be more specific if you know the data structure
  status?: string;
}

export { ISeries };
