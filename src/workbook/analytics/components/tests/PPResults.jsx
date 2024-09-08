import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { path, isNil } from 'ramda';
import styled from 'styled-components';
import {
  Button, Icon, FormGroup, Classes, ControlGroup, Label, Divider,
} from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsBullet from 'highcharts/modules/bullet';

import { LMAnalyticsType, LMParameterType } from '../../types';
import { AnalyticsStatus } from '../../definitions/AnalyticsStatus';
import {
  analyticsHPGraphAction,
} from '../../actions/filterActions';
import { analyticsParametersSelector } from '../../selectors';
import WsidDisplay from '../common/WsidDisplay';
import { regressionOptions, autolagOptions, StatisticsOptions } from './PPParameters';
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

class PPResults extends React.Component {
  handleGraph = (name, create) => () => this.props.analyticsHPGraph({
    ayid: this.props.ayid,
    name,
    create,
  });

  render() {
    const { parameters } = this.props;
    const status = path(['obj', 'status'], this.props);
    const results = path(['obj', 'results'], this.props);
    const errors = path(['obj', 'errors'], this.props);

    if (isNil(results) && status === AnalyticsStatus.completed) {
      return (<div>Results are not available.</div>);
    }
    if ([AnalyticsStatus.running,
      AnalyticsStatus.initiated,
      AnalyticsStatus.parameters,
    ].includes(status)) {
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

    return (
      <div>
        <FormGroup
          // helperText="Hodrick-Prescott smoothing parameter."
          label="PP Statistics"
          inline
        >
          <Label>{results.stat}</Label>
        </FormGroup>
        <FormGroup
          label="P-value"
          inline
        >
          <Label>{results.pvalue}</Label>
        </FormGroup>
        {/* <class 'dict'>: {'1%': -3.4537536300652, '5%': -2.8718443180148836, '10%': -2.572260641818822} */}
        <FormGroup
          helperText="The number of lags used"
          label="Lags"
          inline
        >
          <Label>{results.usedlag}</Label>
        </FormGroup>

        <Divider />

        <h3>Parameters</h3>
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
        </FormGroup>


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
        </FormGroup>
        <FormGroup
          helperText={StatisticsOptions[parameters.type.value]}
          label="Statistics type"
          inline
        >
          <Label>{parameters.type.value}</Label>
        </FormGroup>

      </div>
    );
  }
}

PPResults.defaultProps = {};

PPResults.propTypes = {
  ayid: types.string.isRequired,
  parameters: LMParameterType,
  obj: LMAnalyticsType,
};

const mapStateToProps = (state, ownProps) => ({
  parameters: analyticsParametersSelector(ownProps.ayid)(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  analyticsHPGraph: analyticsHPGraphAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PPResults);
