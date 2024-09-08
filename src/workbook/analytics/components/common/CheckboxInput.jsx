import React from 'react';
import types from 'prop-types';
import { isNil, path } from 'ramda';
import { FormGroup, NumericInput, Checkbox } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { analyticsParametersSelector } from '../../selectors';
import { LMParameterType } from '../../types';
import { updateAnalyticsParametersAction, updateAnalyticsUIAction } from '../../actions';

class CheckboxInput extends React.PureComponent {
  handleChange = (e) => {
    const {
      ayid, disabled, name, updateAnalyticsParameters, parameters,
    } = this.props;

    if (!disabled) {
      updateAnalyticsParameters({
        ayid,
        parameters: {
          ...parameters,
          [name]: e.target.checked,
        },
      });
    }
  }

  render() {
    const {
      label, value, disabled, inline, displayName,
      className, helperText,
    } = this.props;

    return (
      <FormGroup
        helperText={helperText}
        className={className}
        label={label}
        inline={inline}
      >
        <Checkbox
          disabled={disabled}
          label={displayName}
          checked={value}
          onChange={this.handleChange}
        />
      </FormGroup>
    );
  }
}

CheckboxInput.defaultProps = {
  disabled: false,
  inline: true,
  label: null,
  displayName: null,
  value: undefined,
  helperText: undefined,
};

CheckboxInput.propTypes = {
  name: types.string.isRequired,
  ayid: types.string.isRequired,
  parameters: LMParameterType,
  updateAnalyticsParameters: types.func.isRequired,
  disabled: types.bool,
  inline: types.bool,
  label: types.string,
  displayName: types.string,
  value: types.bool,
  helperText: types.string,
};


const mapStateToProps = (state, ownProps) => {
  const parameters = analyticsParametersSelector(ownProps.ayid)(state);
  return ({
    parameters,
    value: path([ownProps.name], parameters),
  });
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateAnalyticsParameters: updateAnalyticsParametersAction,
  updateAnalyticsUI: updateAnalyticsUIAction,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckboxInput);
