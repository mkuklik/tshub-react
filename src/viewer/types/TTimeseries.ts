type DType = 'int' | 'float' | 'bool' | 'cat';

type FrequencyType =
  | 'A'
  | 'A-JAN'
  | 'A-FEB'
  | 'A-MAR'
  | 'A-APR'
  | 'A-MAY'
  | 'A-JUN'
  | 'A-JUL'
  | 'A-AUG'
  | 'A-SEP'
  | 'A-OCT'
  | 'A-NOV'
  | 'Q'
  | 'Q-JAN'
  | 'Q-FEB'
  | 'Q-MAR'
  | 'Q-APR'
  | 'Q-MAY'
  | 'Q-JUN'
  | 'Q-JUL'
  | 'Q-AUG'
  | 'Q-SEP'
  | 'Q-OCT'
  | 'Q-NOV'
  | 'M'
  | 'W'
  | 'W-MON'
  | 'W-TUE'
  | 'W-WED'
  | 'W-THU'
  | 'W-FRI'
  | 'W-SAT'
  | 'B'
  | 'C'
  | 'D';

interface TimeseriesType {
  tsid: string;
  collId: string; // Note: Typo corrected from 'isRequried' to 'isRequired'
  name: string;
  title?: string;
  dtype: DType;
  freq: FrequencyType;
}

type TimeseriesListType = TimeseriesType[];
type TimeseriesListMapType = { [key: string]: TimeseriesListType };

interface TimeseriesDetailsType {
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
  TimeseriesType,
  TimeseriesListType,
  TimeseriesListMapType,
  TimeseriesDetailsType,
};