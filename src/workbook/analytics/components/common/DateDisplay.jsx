import * as React from 'react';
import types from 'prop-types';
import { isNil } from 'ramda';
import '@blueprintjs/core/lib/css/blueprint.css';
import Moment from 'react-moment';
import { dateFormat } from '../../../../viewer/utilities/format';

class DateDisplay extends React.PureComponent {
  render() {
    const { date, freq } = this.props;
    if (isNil(date)) return null;

    let format;
    if (freq === 'datetime') {
      format = 'YYYY-MM-DD HH:mm:ss';
    } else {
      format = dateFormat(freq);
    }

    return (
      <Moment
        date={date}
        tz="Etc/Utc"
        format={format}
      />
    );
  }
}
DateDisplay.defaultProps = {
  freq: 'D',
};

DateDisplay.propTypes = {
  date: types.oneOfType([types.string, types.instanceOf(Date), types.instanceOf(Moment)]).isRequired,
  freq: types.string,
};

export default DateDisplay;
