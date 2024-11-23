type DType = "int" | "float" | "bool" | "cat";

type FrequencyType =
  | "A"
  | "A-JAN"
  | "A-FEB"
  | "A-MAR"
  | "A-APR"
  | "A-MAY"
  | "A-JUN"
  | "A-JUL"
  | "A-AUG"
  | "A-SEP"
  | "A-OCT"
  | "A-NOV"
  | "Q"
  | "Q-JAN"
  | "Q-FEB"
  | "Q-MAR"
  | "Q-APR"
  | "Q-MAY"
  | "Q-JUN"
  | "Q-JUL"
  | "Q-AUG"
  | "Q-SEP"
  | "Q-OCT"
  | "Q-NOV"
  | "M"
  | "W"
  | "W-MON"
  | "W-TUE"
  | "W-WED"
  | "W-THU"
  | "W-FRI"
  | "W-SAT"
  | "B"
  | "C"
  | "D";

enum IDType {
  INT = "int",
  FLOAT = "float",
  BOOL = "bool",
  CAT = "cat",
}

enum IFrequency {
  A = "A",
  AJAN = "A-JAN",
  AFE = "A-FEB",
  AMAR = "A-MAR",
  AAPR = "A-APR",
  AMAY = "A-MAY",
  AJUN = "A-JUN",
  AJUL = "A-JUL",
  AAUG = "A-AUG",
  ASEP = "A-SEP",
  AOCT = "A-OCT",
  ANOV = "A-NOV",
  Q = "Q",
  QJAN = "Q-JAN",
  QFEB = "Q-FEB",
  QMAR = "Q-MAR",
  QAPR = "Q-APR",
  QMAY = "Q-MAY",
  QJUN = "Q-JUN",
  QJUL = "Q-JUL",
  QAUG = "Q-AUG",
  QSEP = "Q-SEP",
  QOCT = "Q-OCT",
  QNOV = "Q-NOV",
  M = "M",
  W = "W",
  WMON = "W-MON",
  WTUE = "W-TUE",
  WWED = "W-WED",
  WTHU = "W-THU",
  WFRI = "W-FRI",
  WSAT = "W-SAT",
  B = "B",
  C = "C",
  D = "D",
}

interface ITimeseries {
  tsid: string;
  collId: string;
  name: string;
  title?: string;
  dtype: DType;
  freq: FrequencyType;
}

type ITimeseriesList = ITimeseries[];
type ITimeseriesListMap = { [key: string]: ITimeseriesList };

interface ITimeseriesDetails {
  tsid: string;
  collId: string; // Note: Typo corrected from 'isRequried' to 'isRequired'
  name: string;
  dtype: DType;
  freq: FrequencyType;
  title?: string;
  description?: string;
}

export {
  DType,
  FrequencyType,
  IFrequency,
  IDType,
  ITimeseries,
  ITimeseriesList,
  ITimeseriesListMap,
  ITimeseriesDetails,
};
