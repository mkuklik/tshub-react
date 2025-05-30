import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { path, isNil } from 'ramda';
import styled from 'styled-components';
import {
  Button, Icon, FormGroup, InputGroup, ControlGroup, Label, Divider,
} from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';

import { LMAnalyticsType, LMParameterType } from '../../types';
import { AnalyticsStatus } from '../../definitions/AnalyticsStatus';
import {
  analyticsHPGraphAction,
} from '../../actions/filterActions';
import { analyticsParametersSelector } from '../../selectors';
// import { Link } from '../containers';
import WsidDisplay from '../common/WsidDisplay';
import AnalyticsErrors from '../common/AnalyticsErrors';


export const Link = styled(Label)`
  margin-right: 5px;
  border: 0;
  background: transparent;
  text-decoration: underline;
  // transform: translateY(-5px);
  cursor: pointer;
`;

class HPResults extends React.Component {
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

    const wsid = path(['obj', 'resolvedParameters', 'variable', 'wsid'], this.props);

    return (
      <div>
        <FormGroup
          // helperText="Hodrick-Prescott smoothing parameter."
          label="Cycle"
          inline
        >
          <ControlGroup>
            <Link onClick={this.handleGraph('cycle', false)}>add</Link>
            <Link onClick={this.handleGraph('cycle', true)}>new graph</Link>
          </ControlGroup>
        </FormGroup>
        <FormGroup
          // helperText="Hodrick-Prescott smoothing parameter."
          label="Trend"
          inline
        >
          <ControlGroup>
            {/* <Label>Trend: </Label> */}
            <Link onClick={this.handleGraph('trend', false)}>add</Link>
            
            <Link onClick={this.handleGraph('trend', true)}>new graph</Link>
          </ControlGroup>
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
          helperText="Hodrick-Prescott smoothing parameter."
          label="Lambda"
          inline
        >
          <Label>{parameters.lambda.value}</Label>
        </FormGroup>

      </div>
    );
  }
}

HPResults.defaultProps = {};

HPResults.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(HPResults);
