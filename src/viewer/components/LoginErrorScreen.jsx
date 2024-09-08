/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  Classes, Dialog, FormGroup, Button, InputGroup,
} from '@blueprintjs/core';
import { loginErrorScreenSelector } from '../selectors/errors';


class LoginError extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
    };
  }

  handleChange = (event) => this.setState({ password: event.target.value });

  handleLogin = () => {
    // submit
  }

  render() {
    const { isOpen } = this.props;
    const { password } = this.state;
    return (
      <Dialog
        icon="error"
        title="Unauthorized"
        isOpen={isOpen}
        canEscapeKeyClose
        canOutsideClickClose
        usePortal
      >
        <div className={Classes.DIALOG_BODY}>

          <h1>Your session expired.</h1>
          <h3>Please login again</h3>

          <FormGroup
            // helperText="Please enter your password"
            label="Password"
            labelFor="password"
            labelInfo="(required)"
          >
            <InputGroup
              id="password"
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              value={password}
              onChange={this.handleChange}
            />

          </FormGroup>
          <Button text="Login" onClick={this.handleLogin} intent="primary" />
        </div>
      </Dialog>
    );
  }
}

LoginError.defaultProps = {};

LoginError.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isOpen: loginErrorScreenSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginError);
