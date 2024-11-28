import * as React from "react";
import types from "prop-types";
import moment from "moment";
import { Button, ControlGroup } from "@blueprintjs/core";
import { DateRangeInput, TimePrecision } from "@blueprintjs/datetime";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import { dateFormat } from "../../utilities/format";

function momentFormatter(format) {
  return {
    formatDate: (date) => moment(date).format(format),
    parseDate: (str) => moment.utc(str, format).toDate(),
    placeholder: `Realtime (${format})`,
  };
}

// const FORMATS = [
//   momentFormatter("MM/DD/YYYY"),
//   momentFormatter("YYYY-MM-DD"),
//   momentFormatter("YYYY-MM-DD HH:mm:ss"),
// ];

const FORMATS = {
  D: momentFormatter(dateFormat("D")),
  W: momentFormatter(dateFormat("W")),
  M: momentFormatter(dateFormat("M")),
  Q: momentFormatter(dateFormat("Q")),
  A: momentFormatter(dateFormat("A")),
};

const defaultFormat = momentFormatter("YYYY-MM-DD");

class GraphRangeSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      range: [props.rangeStart, props.rangeEnd],
      params: {
        allowSingleDayRange: false,
        closeOnSelection: false,
        contiguousCalendarMonths: true,
        disabled: false,
        enableTimePicker: false,
        format: FORMATS[props.freq] || defaultFormat,
        reverseMonthAndYearMenus: false,
        selectAllOnFocus: false,
        shortcuts: true,
        singleMonthOnly: false,
        timePrecision: TimePrecision.SECOND,
      },
    };
  }

  handleApply = () =>
    this.props.updateRange({
      gid: this.props.gid,
      rangeStart: this.state.range[0],
      rangeEnd: this.state.range[1],
    });

  handleRangeChange = (range) => {
    console.log(range);
    this.setState({ range });
  };

  render() {
    const { minDate, maxDate, disabled } = this.props;
    const { format, range, ...spreadStateParams } = this.state.params;
    //     console.log('format', format, this.props.freq);
    return (
      <ControlGroup>
        <DateRangeInput
          disabled={disabled}
          {...spreadStateParams}
          {...format}
          minDate={minDate.toDate()}
          maxDate={maxDate.toDate()}
          onChange={this.handleRangeChange}
        />
        <Button disabled={disabled} onClick={this.handleApply}>
          Apply
        </Button>
      </ControlGroup>
    );
  }
}

GraphRangeSelector.defaultProps = {
  gid: undefined,
  freq: undefined,
  disabled: false,
  minDate: moment("1900-01-01"),
  maxDate: moment.utc().toDate(),
  // minDate: moment("01/01/1900"),
  // maxDate: moment.utc(),  // fixed value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.
};

GraphRangeSelector.propTypes = {
  updateRange: types.func.isRequired,
  gid: types.string,
  freq: types.string,
  disabled: types.bool,
  rangeStart: types.any,
  rangeEnd: types.any,
  minDate: types.any,
  maxDate: types.any,
};

export default GraphRangeSelector;
