import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { HTMLTable } from '@blueprintjs/core';
import { reportErrorAction } from '../../actions/errorActions';


// TODO: create container component
const ErrorsReporter = ({ errors }) => (
  <>
    <HTMLTable>
      {
      errors.map((x) => <div>{x}</div>)
    }
    </HTMLTable>
  </>
);

ErrorsReporter.propTypes = {
  errors: types.arrayOf(),
  // selectedTimeseries: TimeseriesList.isRequired,
  // addSelectedTimeseriesToGraph: types.func.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

const mapDispatchToProps = {
  reportError: reportErrorAction,
};

const ConnectedErrorsReporter = connect(mapStateToProps, mapDispatchToProps)(ErrorsReporter);

export default ConnectedErrorsReporter;
