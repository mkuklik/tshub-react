import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { path, isNil } from 'ramda';
import styled from 'styled-components';
import {
  FormGroup, ControlGroup, Label, Divider,
} from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';

import { LMAnalyticsType, LMParameterType } from '../../types';
import { AnalyticsStatus } from '../../definitions/AnalyticsStatus';
import {
  analyticsHPGraphAction,
} from '../../actions/filterActions';
import { analyticsParametersSelector } from '../../selectors';
import WsidDisplay from '../common/WsidDisplay';
import { regressionOptions, autolagOptions } from './CointParameters';
import AnalyticsErrors from '../common/AnalyticsErrors';


export const Link = styled(Label)`
  margin-right: 5px;
  border: 0;
  background: transparent;
  text-decoration: underline;
  // transform: translateY(-5px);
  cursor: pointer;
`;

class CointResults extends React.Component {
  handleGraph = (name, create) => () => this.props.analyticsHPGraph({ ayid: this.props.ayid, name, create });

  render() {
    const { parameters } = this.props;
    const status = path(['obj', 'status'], this.props);
    const results = path(['obj', 'results'], this.props);
    const errors = path(['obj', 'errors'], this.props);

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

    const xWsid = path(['obj', 'resolvedParameters', 'x', 'wsid'], this.props);
    const yWsid = path(['obj', 'resolvedParameters', 'y', 'wsid'], this.props);

    return (
      <div>
        <FormGroup
          label="t-statistics"
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

        <Divider />

        <h3>Parameters</h3>
        <FormGroup
          // helperText="Hodrick-Prescott smoothing parameter."
          label="x"
          inline
        >
          <ControlGroup fill>
            <WsidDisplay wsid={xWsid} />
            <Link onClick={this.handleGraph('x', false)}>add</Link>
            <Link onClick={this.handleGraph('x', true)}>new graph</Link>
          </ControlGroup>
        </FormGroup>
        <FormGroup
          // helperText="Hodrick-Prescott smoothing parameter."
          label="y"
          inline
        >
          <ControlGroup fill>
            <WsidDisplay wsid={yWsid} />
            <Link onClick={this.handleGraph('y', false)}>add</Link>
            <Link onClick={this.handleGraph('y', true)}>new graph</Link>
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

      </div>
    );
  }
}

CointResults.defaultProps = {
  parameters: undefined,
  obj: undefined,
};

CointResults.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(CointResults);
