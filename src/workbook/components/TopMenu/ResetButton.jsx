import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import { Button } from '@blueprintjs/core';
import { resetStoreAction } from '../../../viewer/actions';

class ResetButton extends React.PureComponent {
  render() {
    return (<Button text="Reset" onClick={this.props.resetStore} />);
  }
}

ResetButton.defaultProps = {};

ResetButton.propTypes = {
  resetStore: types.func.isRequired,
};


const mapDispatchToProps = (dispatch) => bindActionCreators({
  resetStore: resetStoreAction,
}, dispatch);

export default connect(undefined, mapDispatchToProps)(ResetButton);
