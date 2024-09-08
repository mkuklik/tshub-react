import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { path, isNil, map } from 'ramda';
import styled from 'styled-components';
import {
  FormGroup, ControlGroup, Label, Divider, Switch,
} from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsBullet from 'highcharts/modules/bullet';
import { Styledtd, ResultsTable, StyledPercentilesTd } from './containers';
import NumericDisplay from '../common/NumericDisplay';
import DateDisplay from '../common/DateDisplay';

import { LMAnalyticsType, LMParameterType } from '../../types';
import { AnalyticsStatus } from '../../definitions/AnalyticsStatus';
import {
  analyticsHPGraphAction,
} from '../../actions/filterActions';
import { analyticsParametersSelector } from '../../selectors';
import WsidDisplay from '../common/WsidDisplay';
import AnalyticsErrors from '../common/AnalyticsErrors';

HighchartsMore(Highcharts);
HighchartsBullet(Highcharts);

export const Link = styled(Label)`
  margin-right: 5px;
  border: 0;
  background: transparent;
  text-decoration: underline;
  // transform: translateY(-5px);
  cursor: pointer;
`;

class DescriptiveResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: false,
    };
  }

  handleGraph = (name, create) => () => {
    const { ayid, analyticsHPGraph } = this.props;
    analyticsHPGraph({ ayid, name, create });
  }

  render() {
    const { parameters } = this.props;
    const { percent } = this.state;
    const status = path(['obj', 'status'], this.props);
    const results = path(['obj', 'results'], this.props);
    const errors = path(['obj', 'errors'], this.props);
    const resolvedParameters = path(['obj', 'resolvedParameters'], this.props);
    const precision = 2;
    const freq = path(['variable', 'freq'], resolvedParameters);
    const wsid = path(['variable', 'wsid'], resolvedParameters);

    if (isNil(results) && status === AnalyticsStatus.completed) return (<div>Results are not available.</div>);
    if ([AnalyticsStatus.running, AnalyticsStatus.initiated, AnalyticsStatus.parameters].includes(status)) {
      return (<div>Specify parameters and estimate to see the results.</div>);
    }

    if (status === AnalyticsStatus.error) {
      return (
        <div>
          <AnalyticsErrors errors={errors} />
        </div>
      );
    }

    const renderedPercentiles = map((v) => (
      <tr key={v[0]}>
        <StyledPercentilesTd>{v[0]}%</StyledPercentilesTd>
        <Styledtd><NumericDisplay value={v[1]} /></Styledtd>
      </tr>
    ), results.percentiles);

    return (
      <div>
        <h3>Histogram</h3>
        <Switch
          checked={percent}
          onChange={(event) => this.setState({ percent: event.target.checked })}
          innerLabelChecked="count"
          innerLabel="percent"
        />
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            chart: {
              type: 'column',
            },
            title: {
              text: undefined,
            },
            plotOptions: {
              column: {
                pointPadding: 0,
                borderWidth: 0,
                groupPadding: 0,
                shadow: false,
              },
            },
            legend: {
              enabled: false,
            },
            credits: {
              enabled: false,
            },
            yAxis: {
              title: (percent) ? 'percent' : 'count',
            },
            series: [{
              data: (percent) ? results.histogram.map((x) => [x.mid, x.value / results.nobs]) : results.histogram.map((x) => [x.mid, x.value]),
            }],
          }}
        />

        <h3>Stats</h3>
        <FormGroup
          style={{ marginBottom: '0px' }}
          label="Variable"
          inline
        >
          <ControlGroup fill>
            <WsidDisplay wsid={wsid} />
            <Link onClick={this.handleGraph('variable', false)}>add</Link>
            <Link onClick={this.handleGraph('variable', true)}>new graph</Link>
          </ControlGroup>
        </FormGroup>

        <FormGroup
          style={{ marginBottom: '0px' }}
          label="Sample"
          inline
        >
          <Label>
            <DateDisplay date={results.sample.start} freq={freq} />
            <span> - </span>
            <DateDisplay date={results.sample.end} freq={freq} />
          </Label>
        </FormGroup>
        <FormGroup
          label="Time"
          inline
        >
          <Label>
            <DateDisplay date={results.timestamp} freq="datetime" />
          </Label>
        </FormGroup>
        <br />
        <ResultsTable>
          <tbody>

            <tr>
              <Styledtd>Nobs</Styledtd>
              <Styledtd>{results.nobs}</Styledtd>
            </tr>
            <tr>
              <Styledtd>Mean</Styledtd>
              <Styledtd><NumericDisplay value={results.mean} /></Styledtd>
            </tr>
            <tr>
              <Styledtd>Median</Styledtd>
              <Styledtd><NumericDisplay value={results.median} /></Styledtd>
            </tr>
            <tr>
              <Styledtd>Min</Styledtd>
              <Styledtd><NumericDisplay value={results.min} /></Styledtd>
            </tr>
            <tr>
              <Styledtd>Max</Styledtd>
              <Styledtd><NumericDisplay value={results.max} /></Styledtd>
            </tr>
            <tr>
              <Styledtd>Std. Dev.</Styledtd>
              <Styledtd><NumericDisplay value={results.std} /></Styledtd>
            </tr>
            <tr>
              <Styledtd>Median Abs. Dev.</Styledtd>
              <Styledtd><NumericDisplay value={results.mad} /></Styledtd>
            </tr>
            <tr>
              <Styledtd>Skewness</Styledtd>
              <Styledtd><NumericDisplay value={results.skew} /></Styledtd>
            </tr>
            <tr>
              <Styledtd>Kurtosis</Styledtd>
              <Styledtd><NumericDisplay value={results.kurtosis} /></Styledtd>
            </tr>
            <tr>
              <Styledtd >Jarque-Bera</Styledtd>
              <Styledtd><NumericDisplay value={results.jb} /></Styledtd>
            </tr>
            <tr>
              <Styledtd>Jarque-Bera Prob.</Styledtd>
              <Styledtd><NumericDisplay value={results.jbpv} /></Styledtd>
            </tr>
          </tbody>
        </ResultsTable>

        <h5>Percentiles</h5>

        <ResultsTable>
          <tbody>
            {renderedPercentiles}
          </tbody>
        </ResultsTable>

        {/* <h3>Parameters</h3>
        <FormGroup
          // helperText="Hodrick-Prescott smoothing parameter."
          label="Variable"
          inline
        >
          <ControlGroup fill>
            <WsidDisplay wsid={wsid} />
            <Link onClick={this.handleGraph('variable', false)}>add</Link>
            <Link onClick={this.handleGraph('variable', true)}>new graph</Link>
          </ControlGroup>
        </FormGroup> */}

        {/* <FormGroup
          label="Percentiles"
          inline
        >
          <Label>{parameters.procentiles.values}</Label>
        </FormGroup> */}
      </div>
    );
  }
}

DescriptiveResults.defaultProps = {};

DescriptiveResults.propTypes = {
  ayid: types.string.isRequired,
  parameters: LMParameterType,
  obj: LMAnalyticsType,
  analyticsHPGraph: types.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  parameters: analyticsParametersSelector(ownProps.ayid)(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  analyticsHPGraph: analyticsHPGraphAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DescriptiveResults);
