// eslint-disable-next-line max-classes-per-file
import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { map, path, isNil } from 'ramda';
import styled from 'styled-components';
import {
  FormGroup, ControlGroup, Label, Divider, HTMLTable,
} from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';

import Moment from 'react-moment';
import { LMAnalyticsType, LMParameterType } from '../../types';
import { AnalyticsStatus } from '../../definitions/AnalyticsStatus';
import {
  analyticsHPGraphAction,
} from '../../actions/filterActions';
import { analyticsParametersSelector, analyticsResultsSelector } from '../../selectors';
import WsidDisplay from '../common/WsidDisplay';
import AnalyticsErrors from '../common/AnalyticsErrors';
import DateDisplay from '../common/DateDisplay';
import NumericDisplay from '../common/NumericDisplay';

export const Link = styled(Label)`
  margin-right: 5px;
  border: 0;
  background: transparent;
  text-decoration: underline;
  // transform: translateY(-5px);
  cursor: pointer;
`;

const BarDiv = styled.div`
  width: ${(props) => props.width}px;
  left: ${(props) => props.left}px;
  height: 16px;
  background-color: #999999;
  position: absolute;
`;

const BarContainer = styled.div`
  width: 105px;
  height: 24px;
  display: flex;
`;

const BarContainerLeft = styled.div`
  width: 53px;
  height: 24px;
  position: relative;
  border-right: 1px;
  border-left: 2px;
  border-left-style: solid;
  border-right-style: solid;
  padding-top: 4px;
  padding-buttom: 4px;
`;
const BarContainerRight = styled.div`
  flex-grow: 1;
  height: 24px;
  position: relative;
  border-right: 2px;
  border-right-style: solid;
  padding-top: 4px;
  padding-buttom: 4px;
`;

class Bar extends React.PureComponent {
  renderBar = ({ parentWidth, x }) => {
    const width = parentWidth * x; // (parentWidth / 2.0) * x;
    const left = (x > 0) ? 0 : (parentWidth - x);
    // (parentWidth / 2.0) + ((x > 0) ? 0 : parentWidth / 2.0);
    return (
      <BarDiv width={width} left={left} />
    );
  }


  render() {
    const { x } = this.props;
    return (
      <BarContainer>
        <BarContainerLeft>
          { (x < 0) && this.renderBar({ x, parentWidth: 51 })}
        </BarContainerLeft>
        <BarContainerRight>
          { (x > 0) && this.renderBar({ x, parentWidth: 50 })}
        </BarContainerRight>
      </BarContainer>
    );
  }
}

Bar.propTypes = {
  x: types.number.isRequired,
};


class AutocorrelationResults extends React.Component {
  handleGraph = (name, create) => () => {
    const { analyticsHPGraph, ayid } = this.props;
    analyticsHPGraph({ ayid, name, create });
  }

  renderRow = (value) => (
    <tr>
      <td>{value.lag}</td>
      <td>
        <NumericDisplay value={value.ac} />
      </td>
      {/* {mathFormat(value.ac, { notation: 'auto', precision: 4, upperExp: 4 })}</td> */}
      <td><Bar x={value.ac} /></td>
      <td>
        <NumericDisplay value={value.qstat} />
        {/* {mathFormat(value.qstat, { notation: 'auto', precision: 4, upperExp: 4 })} */}
      </td>
      <td>
        <NumericDisplay value={value.pvalue} />

        {/* {mathFormat(value.pvalue, { notation: 'auto', precision: 4, upperExp: 4 })} */}
      </td>
      <td style={{ width: '20px' }} />
      <td style={{ borderLeft: '1px solid #dddddd' }}>
        <NumericDisplay value={value.pac} />

        {/* {mathFormat(value.pac, { notation: 'auto', precision: 4, upperExp: 4 })} */}
      </td>
      <td><Bar x={value.pac} /></td>
    </tr>
  )

  render() {
    const { results } = this.props;
    const status = path(['obj', 'status'], this.props);
    // const results = path(['obj', 'results'], this.props);
    const errors = path(['obj', 'errors'], this.props);

    if (isNil(results) && status === AnalyticsStatus.completed) {
      return (<div>Results are not available.</div>);
    }
    if ([AnalyticsStatus.running,
      AnalyticsStatus.initiated,
      AnalyticsStatus.parameters].includes(status)
    ) {
      return (<div>Specify parameters and estimate to see the results.</div>);
    }

    if (status === AnalyticsStatus.error) {
      return (
        <div>
          <AnalyticsErrors errors={errors} />
        </div>
      );
    }

    const wsid = path(['obj', 'resolvedParameters', 'variable', 'wsid'], this.props);
    const freq = path(['obj', 'resolvedParameters', 'variable', 'freq'], this.props);
    const rows = map(this.renderRow, results.values);

    /*
    Date: // when was it run
    Sample: start date - end date
    # obs:

    table:
    Autocorrelation,            Parcial Correlation,        Lag, AC, PAC, Q-stat, Prob
    as a bar between -1 and 1   as a bar between -1 and 1

    */
    return (
      <div>
        <p>
          Date:
          <DateDisplay date={results.timestamp} freq="datetime" />
        </p>
        <p>
          Sample:
          <DateDisplay date={results.sample.start} freq={freq} />
          {' '}
          -
          <DateDisplay date={results.sample.end} freq={freq} />
          <Moment date={results.sample.end} format="YYYY-MM-DD HH:mm:ss" />
        </p>
        <p>
          Number of obs:
          {results.sample.nobs}
        </p>

        <HTMLTable>
          <thead>
            <tr>
              <th>Lag</th>
              {/* <th>AC</th> */}
              <th colSpan="2">Autocorrelation</th>
              <th>Q-stat</th>
              <th>Prob</th>
              <th />
              {/* <th>PAC</th> */}
              <th colSpan="2">Partial Autocorrelation</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </HTMLTable>

        {/* <FormGroup
          // helperText="Hodrick-Prescott smoothing parameter."
          label="Correlation Analysis"
          inline
        >
          <Label>{results.stat}</Label>
        </FormGroup>
        <FormGroup
          // helperText="Hodrick-Prescott smoothing parameter."
          label="P-value"
          inline
        >
          <Label>{results.pvalue}</Label>
        </FormGroup>
        <FormGroup
          helperText="The number of lags used"
          label="Lags"
          inline
        >
          <Label>{results.usedlag}</Label>
        </FormGroup>
        <FormGroup
          helperText="Number of observations used"
          label="Nobs"
          inline
        >
          <Label>{results.nobs}</Label>
        </FormGroup>
        {['AIC', 'BIC'].includes(parameters.autolag.value) && (
        <FormGroup
          helperText="Best value for Information criteria"
          label={parameters.autolag.value}
          inline
        >
          <Label>{results.icbest}</Label>
        </FormGroup>
        )} */}
        <Divider />

        <h3>Parameters</h3>
        <FormGroup
          label="Variable"
          inline
        >
          <ControlGroup fill>
            <WsidDisplay wsid={wsid} />
            <Link onClick={this.handleGraph('variable', false)}>add</Link>
            <Link onClick={this.handleGraph('variable', true)}>new graph</Link>
          </ControlGroup>
        </FormGroup>

        {/*
        <FormGroup
          helperText={regressionOptions[parameters.regression.value]}
          label="Type"
          inline
        >
          <Label>{parameters.regression.value}</Label>
        </FormGroup>

        <FormGroup
          helperText={autolagOptions[parameters.autolag.value]}
          label="Lag determination method"
          inline
        >
          <Label>{parameters.autolag.value}</Label>
        </FormGroup> */}

      </div>
    );
  }
}

AutocorrelationResults.defaultProps = {
  results: undefined,
  obj: undefined,
};

AutocorrelationResults.propTypes = {
  ayid: types.string.isRequired,
  parameters: LMParameterType,
  results: types.object,
  obj: LMAnalyticsType,
  analyticsHPGraph: types.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  parameters: analyticsParametersSelector(ownProps.ayid)(state),
  results: analyticsResultsSelector(ownProps.ayid)(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  analyticsHPGraph: analyticsHPGraphAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AutocorrelationResults);
