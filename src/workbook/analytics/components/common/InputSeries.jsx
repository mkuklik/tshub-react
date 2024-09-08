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
} from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import {
  analyticsParametersSelector,
  analyticsUISelector,
} from '../../selectors';
import {
  updateAnalyticsParametersAction,
  updateAnalyticsUIAction,
  addVariableAction,
} from '../../actions';

import { createRefSeries } from '../../../../viewer/actions/seriesActions';
import { LMParameterType } from '../../types';
import WsidDisplay from './WsidDisplay';
import { ErrorMessage } from '../lm/containers';


class InputSeries extends React.Component {
  handleDependentWsidChange = (wsid) => {
    const { ayid, parameters, paramName, updateAnalyticsParameters } = this.props;
    const variable = path(['parameters', paramName], this.props);
    updateAnalyticsParameters({
      ayid,
      parameters: {
        ...parameters,
        [paramName]: {
          ...variable,
          wsid,
          expr: undefined,
        },
      },
    });
  };

  handleVariableClear = () => {
    const { ayid, updateAnalyticsParameters, parameters, paramName } = this.props;
    updateAnalyticsParameters({
      ayid,
      parameters: {
        ...parameters,
        [paramName]: {
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
      ayid,
      parameters,
      paramName,
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

    const params = {
      ayid,
      parameters: {
        ...parameters,
        [paramName]: {
          wsid,
          expr: undefined,
          freq: data.freq,
          unit: data.unit,
        },
      },
    };

    updateAnalyticsParameters(params);
  };

  handleSumbitExpr = () => {
    const { ayid, addVariable, paramName } = this.props;
    const expr = path(['ui', paramName, 'expr'], this.props);

    addVariable(ayid, expr);
  };

  handleExprChange = (event) => {
    const { ayid, paramName, updateAnalyticsUI } = this.props;
    // const { variable } = this.props.ui;
    const variable = path(['ui', paramName], this.props);
    updateAnalyticsUI(ayid, {
      [paramName]: {
        ...variable,
        expr: event.target.value,
        error: undefined,
      },
    });
  };

  handleSubmitExpr = () => {
    const expr = path(['ui', 'variable', 'expr'], this.props);
    this.props.addVariable(this.props.ayid, expr);
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmitExpr();
    }
  };

  render() {
    const {
      helperText, className, label, inline, paramName, header,
    } = this.props;
    const { variable } = this.props.parameters;
    const expr = path(['ui', paramName, 'expr'], this.props);
    const error = path(['ui', paramName, 'error'], this.props);
    const wsid = path(['parameters', paramName, 'wsid'], this.props);

    return (
      <div
        onDragOver={() => this.onDragOver(event)}
        onDrop={() => this.onDrop(event)}
      >
        <h2>{ header }</h2>

        {isNil(wsid) && (
          <>
            <p><i>Enter expression or drag and drop a timeseries here</i></p>
            <FormGroup
              helperText={helperText}
              className={className}
              label={label}
              inline={inline}
            >
              <ControlGroup fill>
                <InputGroup
                  onChange={this.handleExprChange}
                  placeholder="Expression"
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
          </>
        )}
        {!isNil(wsid) && (
          <FormGroup
            helperText={helperText}
            className={className}
            label={label}
            inline={inline}
          >
            <ControlGroup>
              <WsidDisplay wsid={wsid} />
              <Button
                minimal
                icon="small-cross"
                onClick={this.handleVariableClear}
              />
            </ControlGroup>
          </FormGroup>
        )}
      </div>
    );
  }
}

InputSeries.defaultProps = {
  disabled: false,
  inline: true,
  helperText: undefined,
  label: null,
  header: null,
};

InputSeries.propTypes = {
  ayid: types.string.isRequired,
  paramName: types.string.isRequired,
  parameters: LMParameterType.isRequired,
  updateAnalyticsParameters: types.func.isRequired,
  addVariable: types.func.isRequired,
  createRefSeries: types.func.isRequired,
  disabled: types.bool,
  inline: types.bool,
  label: types.string,
  header: types.string,
  helperText: types.string,
};

const mapStateToProps = (state, ownProps) => ({
  parameters: analyticsParametersSelector(ownProps.ayid)(state),
  ui: analyticsUISelector(ownProps.ayid)(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    updateAnalyticsParameters: updateAnalyticsParametersAction,
    addVariable: addVariableAction,
    updateAnalyticsUI: updateAnalyticsUIAction,
    createRefSeries,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputSeries);
