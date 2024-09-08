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
import {
  analyticsParametersSelector,
  analyticsUISelector,
} from '../../selectors';
import {
  updateAnalyticsParametersAction,
  updateAnalyticsUIAction,
} from '../../actions';
import { analyticsAddVariableToListAction } from '../../actions/analyticsLM';
import { createRefSeries } from '../../../../viewer/actions/seriesActions';
import { defaultVariable } from '../var/defaults';
import { LMParameterType } from '../../types';
import WsidDisplay from './WsidDisplay';
import { ErrorMessage } from '../var/containers';

class InputSeriesList extends React.Component {

  handleClearVariable = (i) => () => {
    const {
      ayid, paramName, parameters, updateAnalyticsParameters,
    } = this.props;
    const variables = path([paramName], parameters);
    const newVariables = variables.map((x, j) => (i === j ? { wsid: undefined, expr: undefined } : x));

    updateAnalyticsParameters({
      ayid,
      parameters: {
        ...parameters,
        [paramName]: variables.filter((x, j) => i !== j),
      },
    });
  };

  addWsidRegressor = (wsid) => {
    const {
      ayid, paramName, parameters, updateAnalyticsParameters,
    } = this.props;
    const variables = path([paramName], parameters);
    updateAnalyticsParameters({
      ayid,
      parameters: {
        ...parameters,
        [paramName]: [
          ...variables,
          {
            ...defaultVariable,
            wsid,
          },
        ],
      },
    });
  };

  onDragOver = (event) => {
    const dragSupported = event.dataTransfer.length;
    if (dragSupported) {
      event.dataTransfer.dropEffect = 'move';
    }
    event.preventDefault();
  };

  onDrop = (event) => {
    const {
      ayid,
      paramName,
      parameters,
      updateAnalyticsParameters,
      createRefSeries,
    } = this.props;

    const variables = path([paramName], parameters);

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


    updateAnalyticsParameters({
      ayid,
      parameters: {
        ...parameters,
        [paramName]: [
          ...variables,
          {
            ...defaultVariable,
            wsid,
          },
        ],
      },
    });

    event.preventDefault();
  };

  renderVariables = (x, i) => (
    <tr key={x.wsid}>
      <td>
        <b>
          {`X${i + 1}`}
          :
        </b>
      </td>
      <td>
        <WsidDisplay wsid={x.wsid} />
      </td>
      <td>
        <Button
          minimal
          icon="small-cross"
          onClick={this.handleClearVariable(i)}
        />
      </td>
    </tr>
  );

  handleExprChange = (event) => {
    const {
      ayid, paramName, ui, updateAnalyticsUI,
    } = this.props;
    const variables = path([paramName], ui);
    updateAnalyticsUI(ayid, {
      [paramName]: {
        ...variables,
        expr: event.target.value,
        error: undefined,
      },
    });
  };

  handleSubmitExpr = () => {
    const {
      ayid,
      paramName,
      ui,
      analyticsAddVariableToList,
    } = this.props;
    const expr = path([paramName, 'expr'], ui);
    analyticsAddVariableToList({ ayid, expr, paramName });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmitExpr();
    }
  };

  render() {
    const { paramName, parameters, ui, header } = this.props;

    const expr = path([paramName, 'expr'], ui);
    const error = path([paramName, 'error'], ui);
    const variables = path([paramName], parameters);

    const renderedVariables = variables.map((x, i) => this.renderVariables(x, i));

    return (
      <div
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
      >
        <h2>{ header }</h2>
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
            />
          </ControlGroup>
          {!isNil(error) && <ErrorMessage>{error}</ErrorMessage>}
        </FormGroup>

        <div>
          <HTMLTable condensed>
            <thead>
              <tr>
                <th />
                <th />
                <th />
              </tr>
            </thead>
            <tbody>{renderedVariables}</tbody>
          </HTMLTable>
        </div>
      </div>
    );
  }
}

InputSeriesList.defaultProps = {};

InputSeriesList.propTypes = {
  paramName: types.string.isRequired,
  header: types.string.isRequired,
  ayid: types.string.isRequired,
  parameters: LMParameterType,
  ui: types.object,
  updateAnalyticsParameters: types.func.isRequired,
  analyticsAddVariableToList: types.func.isRequired,
  updateAnalyticsUI: types.func.isRequired,
  createRefSeries: types.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  parameters: analyticsParametersSelector(ownProps.ayid)(state),
  ui: analyticsUISelector(ownProps.ayid)(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    updateAnalyticsParameters: updateAnalyticsParametersAction,
    updateAnalyticsUI: updateAnalyticsUIAction,
    analyticsAddVariableToList: analyticsAddVariableToListAction,
    createRefSeries,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputSeriesList);
