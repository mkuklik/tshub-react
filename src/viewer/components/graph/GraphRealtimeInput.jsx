import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import moment, { isMoment } from 'moment';
import { isNil } from 'ramda';
import { Position, Button, ControlGroup } from '@blueprintjs/core';
import { DateInput, TimePrecision } from '@blueprintjs/datetime';
import { updateGraphRealtimeAction } from '../../actions/graphActions';
import { graphRealtimeSelector, currentGraphGidSelector, currentGraphSelector } from '../../selectors/graph';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';

function momentFormatter(format) {
  return {
    formatDate: (date) => moment(date).format(format),
    parseDate: (str) => moment.utc(str, format), // .toDate(),
    placeholder: `Realtime (${format})`,
  };
}

const FORMATS = [
  momentFormatter('MM/DD/YYYY'),
  momentFormatter('YYYY-MM-DD'),
  momentFormatter('YYYY-MM-DD HH:mm:ss'),
];

class GraphRealtimeInput extends React.Component {
  constructor(props) {
    super(props);
    let { graphRealtime: realtime } = this.props;
    // if (isMoment(realtime)) {
    //   realtime = realtime.toISOString();
    //   // } else if (realtime instanceof String) {
    // } else if (realtime instanceof Date) {
    //   realtime = realtime.toISOString();
    // }

    this.state = {
      realtime,
    };
  }

  handleDateChange = (date) => this.setState({ realtime: date || undefined }); // : Date | null

  handleApply = () => {
    const { updateGraphRealtime, afterClick } = this.props;
    const { realtime } = this.state;
    updateGraphRealtime({
      realtime: realtime || undefined,
    }); // : Date | null
    if (!isNil(afterClick)) afterClick();
  }

  render() {
    const { realtime, className } = this.state;
    const { gid } = this.props;
    const isDisabled = isNil(gid);

    return (
      <div className={className}>
        <ControlGroup>
          <DateInput
            closeOnSelection={false}
            value={realtime}
            disabled={isDisabled}
            fill={false}
            {...FORMATS[2]}
            reverseMonthAndYearMenus={false}
            shortcuts={false}
            timePrecision={TimePrecision.SECOND}
            // defaultValue={new Date()}
            onChange={this.handleDateChange}
            popoverProps={{ position: Position.BOTTOM }}
            showActionsBar
          />
          <Button
            disabled={isDisabled}
            onClick={this.handleApply}
          >
            Apply
          </Button>
        </ControlGroup>
      </div>
    );
  }
}

GraphRealtimeInput.defaultProps = {
  afterClick: undefined,
  graphRealtime: undefined,
};

GraphRealtimeInput.propTypes = {
  graphRealtime: types.string,
  updateGraphRealtime: types.func.isRequired,
  afterClick: types.func,
};

const mapStateToProps = (state) => {
  const gid = currentGraphGidSelector(state);
  return {
    gid,
    graph: currentGraphSelector(state),
    graphRealtime: graphRealtimeSelector(gid)(state),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateGraphRealtime: updateGraphRealtimeAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GraphRealtimeInput);
