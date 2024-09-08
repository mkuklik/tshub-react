import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isNil, path } from 'ramda';
import {
  Button,
  FormGroup,
  InputGroup,
  Checkbox,
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
import { analyticsLMAddRegressorAction } from '../../actions/analyticsLM';
import { createRefSeries } from '../../../../viewer/actions/seriesActions';
import { defaultVariable } from './defaults';
import { LMParameterType } from '../../types';
import WsidDisplay from '../common/WsidDisplay';
import { ErrorMessage } from './containers';

class LMParametersRegressors extends React.Component {
  handleDependentExprChange = (e) => {
    const { ayid } = this.props;
    const { dependent } = this.props.parameters;
    console.log(e);
    this.props.updateAnalyticsParameters({
      ayid,
      parameters: {
        ...this.props.parameters,
        dependent: {
          ...dependent,
          expr: e.target.value,
        },
      },
    });
  };

  handleRegressorExprChange = (i) => (e) => {
    const { ayid, parameters, updateAnalyticsParameters } = this.props;
    const { regressors } = parameters;

    const newRegressors = regressors.map((x, j) => (i === j ? { ...x, expr: e.target.value } : x));

    updateAnalyticsParameters({
      ayid,
      parameters: {
        ...parameters,
        regressors: newRegressors,
      },
    });
  };

  handleRegressorWsidChange = (i) => (wsid) => {
    const { ayid, parameters, updateAnalyticsParameters } = this.props;
    const { regressors } = parameters;

    const newRegressors = regressors.map((x, j) => (i === j ? { wsid } : x));

    updateAnalyticsParameters({
      ayid,
      parameters: {
        ...parameters,
        regressors: newRegressors,
      },
    });
  };

  // handleAddConstChange = (e) => {
  //   const { ayid, parameters, updateAnalyticsParameters } = this.props;

  //   updateAnalyticsParameters({
  //     ayid,
  //     parameters: {
  //       ...parameters,
  //       addconst: e.target.checked,
  //     },
  //   });
  // };

  handleAddRegressor = (e) => {
    const { ayid, parameters, updateAnalyticsParameters } = this.props;
    const { regressors } = parameters;

    updateAnalyticsParameters({
      ayid,
      parameters: {
        ...parameters,
        regressors: [...regressors, defaultVariable],
      },
    });
  };

  handleRemoveRegressor = (i) => (e) => {
    const { ayid, parameters, updateAnalyticsParameters } = this.props;
    const { regressors } = parameters;

    const newRegressors = regressors.filter((x, j) => i !== j);

    updateAnalyticsParameters({
      ayid,
      parameters: {
        ...parameters,
        regressors: newRegressors,
      },
    });
  };

  handleRegressorClear = (i) => () => {
    const { ayid, parameters, updateAnalyticsParameters } = this.props;
    const { regressors } = parameters;

    const newRegressors = regressors.map((x, j) => (i === j ? { wsid: undefined, expr: undefined } : x));

    updateAnalyticsParameters({
      ayid,
      parameters: {
        ...parameters,
        regressors: regressors.filter((x, j) => i !== j),
      },
    });
  };

  addWsidRegressor = (wsid) => {
    const { ayid, parameters, updateAnalyticsParameters } = this.props;
    const { regressors } = parameters;

    updateAnalyticsParameters({
      ayid,
      parameters: {
        ...parameters,
        regressors: [
          ...regressors,
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
      ayid, parameters,
      parameters: { regressors },
      updateAnalyticsParameters,
      createRefSeries,
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


    updateAnalyticsParameters({
      ayid,
      parameters: {
        ...parameters,
        regressors: [
          ...regressors,
          {
            ...defaultVariable,
            wsid,
          },
        ],
      },
    });

    event.preventDefault();
  };

  regressorRender = (x, i) => (
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
          onClick={this.handleRegressorClear(i)}
        />
      </td>
    </tr>
  )
    // }
  ;

  handleExprChange = (event) => {
    const { ayid, ui: { regressors }, updateAnalyticsUI } = this.props;
    updateAnalyticsUI(ayid, {
      regressors: {
        ...regressors,
        expr: event.target.value,
        error: undefined,
      },
    });
  };

  handleSubmitExpr = () => {
    const expr = path(['ui', 'regressors', 'expr'], this.props);
    this.props.analyticsLMAddRegressor(this.props.ayid, expr);
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmitExpr();
    }
  };

  render() {
    const { regressors, addconst } = this.props.parameters;
    const expr = path(['ui', 'regressors', 'expr'], this.props);
    const error = path(['ui', 'regressors', 'error'], this.props);

    const renderedRegressors = regressors.map((x, i) => this.regressorRender(x, i));

    return (
      <div
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
      >
        <h2>Regressors</h2>
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

        {/* <Checkbox
          label=""
          displayName="Include constant"
          checked={addconst}
          onChange={this.handleAddConstChange}
        /> */}

        <div>
          <HTMLTable condensed>
            <thead>
              <tr>
                <th />
                <th />
                <th />
              </tr>
            </thead>
            <tbody>{renderedRegressors}</tbody>
          </HTMLTable>

          {/* <div>
            <a onClick={this.toggleExprEntry}>Add regressor</a>
            {addRegressorOpen && (
              <FormGroup>
                <InputGroup
                  onChange={this.handleRegressorExprChange(i)}
                  placeholder="Regressor's expression"
                  value={expr}
                />
              </FormGroup>
            )}
          </div> */}
          {/* <LMRandomSeriesButton wsidCallback={this.addWsidRegressor} /> */}
        </div>
      </div>
    );
  }
}

LMParametersRegressors.defaultProps = {};

LMParametersRegressors.propTypes = {
  ayid: types.string.isRequired,
  parameters: LMParameterType,
  ui: types.object,
  updateAnalyticsParameters: types.func.isRequired,
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
    analyticsLMAddRegressor: analyticsLMAddRegressorAction,
    createRefSeries,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LMParametersRegressors);
