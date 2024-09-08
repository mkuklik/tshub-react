import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isNil, path } from 'ramda';
import {
  Button,
  FormGroup,
  InputGroup,
  ControlGroup,
  HTMLTable,
} from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import {
  analyticsParametersSelector,
  analyticsUISelector,
} from '../../selectors';
import {
  updateAnalyticsParametersAction,
  updateAnalyticsUIAction,
} from '../../actions';
import {
  analyticsLMAddDependentAction,
} from '../../actions/analyticsLM';

import { createRefSeries } from '../../../../viewer/actions/seriesActions';
import { LMParameterType } from '../../types';
import WsidDisplay from '../common/WsidDisplay';
import { ErrorMessage } from './containers';


class LMParametersDependent extends React.Component {
  // handleDependentExprChange = (e) => {
  //   const { ayid } = this.props;
  //   const { dependent } = this.props.parameters;
  //   console.log(e);
  //   this.props.updateAnalyticsParameters({
  //     ayid,
  //     parameters: {
  //       ...this.props.parameters,
  //       dependent: {
  //         ...dependent,
  //         expr: e.target.value,
  //       },
  //     },
  //   });
  // };

  handleDependentWsidChange = (wsid) => {
    const { ayid, parameters, updateAnalyticsParameters } = this.props;
    const { dependent } = parameters;
    updateAnalyticsParameters({
      ayid,
      parameters: {
        ...parameters,
        dependent: {
          ...dependent,
          wsid,
          expr: undefined,
        },
      },
    });
  };

  handleDependentClear = () => {
    const { ayid, parameters, updateAnalyticsParameters } = this.props;
    updateAnalyticsParameters({
      ayid,
      parameters: {
        ...parameters,
        dependent: {
          wsid: undefined,
          expr: undefined,
        },
      },
    });
  };

  onDragOver = (event) => {
    event.preventDefault();
    const dragSupported = event.dataTransfer.length;
    if (dragSupported) {
      event.dataTransfer.dropEffect = 'move';
    }
  };

  onDrop = (event) => {
    const {
      parameters,
      createRefSeries,
      updateAnalyticsParameters,
    } = this.props;
    const { userAgent } = window.navigator;
    const isIE = userAgent.indexOf('Trident/') >= 0;
    const jsonData = event.dataTransfer.getData(
      isIE ? 'text' : 'application/json',
    );

    const data = JSON.parse(jsonData);

    if (isNil(data.tsid) || isNil(data.collId)) return;

    const wsid = createRefSeries({
      name: data.name,
      collId: data.collId,
      tsid: data.tsid,
    });

    const { ayid } = this.props;
    updateAnalyticsParameters({
      ayid,
      parameters: {
        ...parameters,
        dependent: {
          wsid,
          expr: undefined,
        },
      },
    });
  };

  // handleSumbitExpr = () => {
  //   const expr = path(['ui', 'dependent', 'expr'], this.props);

  //   this.props.analyticsLMAddDependent(this.props.ayid, expr);
  // };

  handleExprChange = (event) => {
    const { dependent } = this.props.ui;
    this.props.updateAnalyticsUI(this.props.ayid, {
      dependent: {
        ...dependent,
        expr: event.target.value,
        error: undefined,
      },
    });
  };

  // handleSubmitExpr = () => {
  //   const expr = path(['ui', 'dependent', 'expr'], this.props);
  //   this.props.analyticsLMAddDependent(this.props.ayid, expr);
  // };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmitExpr();
    }
  };

  render() {
    const { dependent } = this.props.parameters;
    const expr = path(['ui', 'dependent', 'expr'], this.props);
    const error = path(['ui', 'dependent', 'error'], this.props);

    return (
      <div
        onDragOver={() => this.onDragOver(event)}
        onDrop={() => this.onDrop(event)}
      >
        <h2>Dependent variable</h2>

        {isNil(dependent.wsid) && (
          <>
            <p><i>Enter expression or drag and drop a timeseries here</i></p>
            <FormGroup>
              <ControlGroup fill>
                <InputGroup
                  onChange={this.handleExprChange}
                  placeholder="Regressor's expression"
                  value={expr}
                  onKeyPress={this.handleKeyPress}
                  intent={!isNil(error) ? 'danger' : 'none'}
                />
                {' '}
                <Button
                  icon="arrow-right"
                  intent={!isNil(error) ? 'danger' : 'none'}
                  onClick={this.handleSubmitExpr}
                  style={{ width: '60px' }}
                />
              </ControlGroup>
              {!isNil(error) && <ErrorMessage>{error}</ErrorMessage>}
            </FormGroup>

            {/* <br />
            <LMRandomSeriesButton
              wsidCallback={this.handleDependentWsidChange}
            /> */}
          </>
        )}
        {!isNil(dependent.wsid) && (
          <HTMLTable condensed>
            <thead>
              <tr>
                <th />
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>Y:</b></td>
                <td>
                  <WsidDisplay wsid={dependent.wsid} />
                </td>
                <td>
                  <Button
                    minimal
                    icon="small-cross"
                    onClick={this.handleDependentClear}
                  />
                </td>
              </tr>
            </tbody>
          </HTMLTable>
        )}
      </div>
    );
  }
}

LMParametersDependent.defaultProps = {};

LMParametersDependent.propTypes = {
  ayid: types.string.isRequired,
  parameters: LMParameterType,
  updateAnalyticsParameters: types.func.isRequired,
  createRefSeries: types.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  parameters: analyticsParametersSelector(ownProps.ayid)(state),
  ui: analyticsUISelector(ownProps.ayid)(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    updateAnalyticsParameters: updateAnalyticsParametersAction,
    analyticsLMAddDependent: analyticsLMAddDependentAction,
    updateAnalyticsUI: updateAnalyticsUIAction,
    createRefSeries,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LMParametersDependent);
