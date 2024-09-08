/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types';
import { FreqType, DTypeType } from './common';

export const SeriesType = PropTypes.shape({
  wsid: PropTypes.string,
  realtime: PropTypes.objectOf(Date), // TODO
  freq: FreqType,
  fparams: PropTypes.object,
  dtype: DTypeType,
  units: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.array),
  status: PropTypes.string,
});
