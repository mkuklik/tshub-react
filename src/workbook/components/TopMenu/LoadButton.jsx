import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import { Button } from '@blueprintjs/core';
import {
  loadWorkbookAction,
} from '../../action/workbookActions';

class LoadButton extends React.PureComponent {
  render() {
    return (<Button text="Load" onClick={this.props.loadWorkbook} />);
  }
}

LoadButton.defaultProps = {};

LoadButton.propTypes = {
  loadWorkbook: types.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadWorkbook: loadWorkbookAction,
}, dispatch);

export default connect(undefined, mapDispatchToProps)(LoadButton);
