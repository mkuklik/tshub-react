
import * as React from 'react';
import types from 'prop-types';
import styled from 'styled-components';
import {
  Button, Overlay, InputGroup, FormGroup, Intent, Classes, Callout,
} from '@blueprintjs/core';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isNil, path } from 'ramda';
import { setApiParametersAction } from '../../viewer/actions';
import { widSelector, chronosAddressSelector, analyticsAddressSelector } from '../../viewer/selectors/apiSelectors';


const initialState = {
  identity: '',
  error: undefined,
  password: '',
  errors: [],
  errorEmail: false,
  errorUsername: false,
  errorPassword: false,
};


const StyledOverlayDivBase = (props) => (
  <div className={classNames(Classes.CARD, Classes.ELEVATION_4, props.className)}>
    {props.children}
  </div>
);

const StyledOverlayDiv = styled(StyledOverlayDivBase)`
  // position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

class SignUpPortal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value, errors: [], error: undefined });
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value, errors: [], error: undefined });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value, errors: [], error: undefined });
  }

  apiLogin = ({
    identity, password,
  }) => {
    window._chronosdb.userApi.apiClient.authentications.basic.username = identity;
    window._chronosdb.userApi.apiClient.authentications.basic.password = password;
    return (
      new Promise((resolve, reject) => {
        window._chronosdb.userApi.appApiUserLogin((error, data) => (
          error ? reject(error) : resolve(data)
        ));
      }));
  };

  handleSignUp = () => {
    const { wid, chronos_address, analytics_address, setApiParameters } = this.props;
    const { identity, password } = this.state;
    if (isNil(identity) || identity === '' || isNil(password) || password === '') {
      this.setState((prevState) => ({ error: 'Username/email and password are required' }));
    } else {
      const tmp = this.apiLogin(this.state);
      tmp
        .then((data) => {
          this.setState(initialState);
          setApiParameters({
            wid, chronos_address, analytics_address,
            jwt: data.jwt,
          });
        })
        .catch((error) => {
          console.log("error", error);
          switch (path(['status'], error)) {
            case 400:
              this.setState({ errors: [(!isNil(path(['response', 'body', 'detail'], error))) ? path(['response', 'body', 'detail'], error) : error] });
              break;
            case 401:
              this.setState({ error: 'Invalid username/email or password' });
              break;
            // case 403:
            //   this.setState({ errors: ['You have no permission to create a space'] });
            //   break;
            default:
              this.setState({ error: String(error) });
          }
        });
    }
    // }
  }

  handleKeypress = (event) => {
    // onKeyPress={this.handleKeypress}
    if (event.key === 'Enter') {
      event.preventDefault();
      this.handleSignUp();
    }
  }

  handleForgot = () => {
    this.setState({ option: OPTIONS.FORGOT });
  }

  render() {
    const { isLoggedIn } = this.props;
    const {
      username, email, password, error, errorEmail, errorUsername, errorPassword,
    } = this.state;
    const disabled = false;
    return (
      <Overlay
        isOpen={isLoggedIn}
        className={Classes.OVERLAY_SCROLL_CONTAINER}
        canEscapeKeyClose={false}
      >
        <StyledOverlayDiv>
          <h1>Signup</h1>
          <Callout
            style={{ marginTop: '25px', marginBottom: '25px' }}
            intent={Intent.DANGER}
          >
            Your session expired.
          </Callout>
          <form>
            <FormGroup
            // helperText="Helper text with details..."
              label="Username"
              labelFor="username"
            // labelInfo="(required)"
              intent={(isNil(error) ? Intent.NONE : Intent.DANGER)}
            >
              <InputGroup
                id="username"
                name="username"
                disabled={disabled}
                onChange={this.handleUsernameChange}
                onKeyPress={this.handleKeypress}
                placeholder="Username"
                leftIcon="user"
                autoFocus
                value={username}
                intent={(isNil(error) ? Intent.NONE : Intent.DANGER)}
              />
            </FormGroup>

            <FormGroup
            // helperText="Helper text with details..."
              label="Email"
              labelFor="email"
            // labelInfo="(required)"
              intent={(isNil(error) ? Intent.NONE : Intent.DANGER)}
            >
              <InputGroup
                id="email"
                name="email"
                disabled={disabled}
                onChange={this.handleEmailChange}
                onKeyPress={this.handleKeypress}
                placeholder="john.doe@email.com"
                leftIcon="envelope"
                value={email}
                intent={(isNil(errorEmail) ? Intent.NONE : Intent.DANGER)}
              />
            </FormGroup>

            <FormGroup
            // helperText="Helper text with details..."
              label="Password"
              labelFor="password"
            // labelInfo="(required)"
              intent={(isNil(error) ? Intent.NONE : Intent.DANGER)}
            >
              <InputGroup
                id="password"
                name="password"
                disabled={disabled}
                onChange={this.handlePasswordChange}
                onKeyPress={this.handleKeypress}
                placeholder="Password"
                leftIcon="lock"
                value={password}
                type="password"
                autoComplete="new-password"
                intent={(isNil(errorPassword) ? Intent.NONE : Intent.DANGER)}
             />
            </FormGroup>
            { !isNil(error)
              && (
              <Callout intent={Intent.DANGER}>
                { error }
              </Callout>
              )}

            <FormGroup
              style={{ marginTop: '25px', marginBottom: '0px' }}
            >
              <Button
                text="Signup"
                intent={Intent.SUCCESS}
                onClick={this.handleSignUp}
                fill
              />
            </FormGroup>
            <p>
              By creating an account, you agree to the Terms of Service. For more information about 
              TSHUB's privacy practices, see the TSHUB Privacy Statement. We'll occasionally send you 
              account-related emails. 
            </p>
          </form>
        </StyledOverlayDiv>
      </Overlay>
    );
  }
}

SignUpPortal.defaultProps = {
  username: '',
  email: '',
  password: '',
  submitted: false,
  isLoggedIn: false,
};

SignUpPortal.propTypes = {
  username: types.string,
  email: types.string,
  password: types.string,
  submitted: types.bool,
  isLoggedIn: types.bool,
};


const mapStateToProps = (state, ownProps) => ({
  identity: undefined,
  password: undefined,
  submitted: false,
  isLoggedIn: true,
  wid: widSelector(state),
  chronos_address: chronosAddressSelector(state),
  analytics_address: analyticsAddressSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setApiParameters: setApiParametersAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPortal);

