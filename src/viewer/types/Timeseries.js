import {
  string, shape, oneOf, objectOf, arrayOf,
} from 'prop-types';

const DType = oneOf(['int', 'float', 'bool', 'cat']);

const FrequencyType = oneOf([
  'A', 'A-JAN', 'A-FEB', 'A-MAR', 'A-APR', 'A-MAY', 'A-JUN', 'A-JUL', 'A-AUG', 'A-SEP', 'A-OCT', 'A-NOV',
  'Q', 'Q-JAN', 'Q-FEB', 'Q-MAR', 'Q-APR', 'Q-MAY', 'Q-JUN', 'Q-JUL', 'Q-AUG', 'Q-SEP', 'Q-OCT', 'Q-NOV',
  'M',
  'W', 'W-MON', 'W-TUE', 'W-WED', 'W-THU', 'W-FRI', 'W-SAT',
  'B',
  'C',
  'D',
]);

const TimeseriesType = shape({
  tsid: string.isRequired,
  collId: string.isRequried,
  name: string.isRequried,
  title: string,
  dtype: DType.isRequired,
  freq: FrequencyType.isRequired,
});

const TimeseriesListType = arrayOf(TimeseriesType);
const TimeseriesListMapType = objectOf(TimeseriesListType);

const TimeseriesDetailsType = shape({
  tsid: string.isRequired,
  collId: string.isRequried,
  name: string.isRequired,
  dtype: DType.isRequired,
  freq: FrequencyType.isRequired,
  title: string,
  description: string,
});

export {
  DType,
  FrequencyType,
  TimeseriesType,
  TimeseriesListType,
  TimeseriesListMapType,
  TimeseriesDetailsType,
};
