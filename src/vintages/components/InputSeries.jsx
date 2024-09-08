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
  vintagesVariableSelector,
  vintagesTsidSelector,
  vintagesCollIdSelector,
} from '../selectors';
import {
  // updateAnalyticsParametersAction,
  // updateAnalyticsUIAction,
  // addVariableAction,
  saveVintageSeriesAction, saveVintageVariableAction,
} from '../actions';

import { ErrorMessage } from '../../workbook/analytics/components/containers';
// import { ErrorMessage } from '../lm/containers';


class InputSeries extends React.Component {

  handleVariableClear = () => {
    const {
      saveVintageSeries,
    } = this.props;
    saveVintageSeries({
      collId: undefined,
      tsid: undefined,
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
      saveVintageSeries,
    } = this.props;
    const { userAgent } = window.navigator;
    const isIE = userAgent.indexOf('Trident/') >= 0;
    const jsonData = event.dataTransfer.getData(
      isIE ? 'text' : 'application/json',
    );

    const data = JSON.parse(jsonData);

    if (isNil(data.tsid) || isNil(data.collId)) return;

    saveVintageSeries({
      collId: data.collId,
      tsid: data.tsid,
    });
  };

  handleSumbitExpr = () => {
    const { variable: { expr }, addVariable } = this.props;

    addVariable({ expr, error: undefined });
  };

  handleExprChange = (event) => {
    const { saveVintageVariable } = this.props;
    saveVintageVariable({
      expr: event.target.value,
      error: undefined,
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
      helperText, className, label, inline, header, collId, tsid,
    } = this.props;
    const { variable: { expr, error } } = this.props;

    return (
      <div
        onDragOver={() => this.onDragOver(event)}
        onDrop={() => this.onDrop(event)}
      >
        <h2>{ header }</h2>

        {isNil(tsid) && (
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
        {!isNil(tsid) && (
          <FormGroup
            helperText={helperText}
            className={className}
            label={label}
            inline={inline}
          >
            <ControlGroup>
              <span>{`${collId}-${tsid}`}</span>
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
  collId: types.string.isRequired,
  tsid: types.string.isRequired,
  saveVintageVariable: types.func.isRequired,
  saveVintageSeries: types.func.isRequired,
  addVariable: types.func.isRequired,
  disabled: types.bool,
  inline: types.bool,
  label: types.string,
  header: types.string,
  helperText: types.string,
  variable: types.shape({
    expr: types.string,
    error: types.string,
  }),
};

const mapStateToProps = (state) => ({
  // parameters: analyticsParametersSelector(ownProps.ayid)(state),
  // ui: analyticsUISelector(ownProps.ayid)(state),
  variable: vintagesVariableSelector(state),
  collId: vintagesCollIdSelector(state),
  tsid: vintagesTsidSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    saveVintageSeries: saveVintageSeriesAction,
    addVariable: saveVintageVariableAction,
    saveVintageVariable: saveVintageVariableAction,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputSeries);
