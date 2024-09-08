
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
import { setApiParametersAction } from '../../../viewer/actions';
import { widSelector, chronosAddressSelector, analyticsAddressSelector } from '../../../viewer/selectors/apiSelectors';

const initialState = {
  identity: '',
  error: undefined,
  password: '',
  errors: [],
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

class LoginPortal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  handleIdentityChange = (e) => {
    this.setState({ identity: e.target.value, errors: [], error: undefined });
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

  handleLogin = () => {
    const { wid, chronos_address, analytics_address, setApiParameters } = this.props;
    const { identity, password } = this.state;
    if (isNil(identity) || identity === '' || isNil(password) || password === '') {
      this.setState((prevState) => ({ error: 'Username/email and password are required' }));
    } else {
      console.log("state", this.state);
      const tmp = this.apiLogin(this.state);
      tmp
        .then((data) => {
          console.log("data", data);
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
      this.handleLogin();
    }
  }

  handleForgot = () => {
    // TODO
  }

  render() {
    const { isLoggedIn } = this.props;
    const {
      identity, password, error,
    } = this.state;
    const disabled = false;
    return (
      <Overlay
        isOpen={isLoggedIn}
        className={Classes.OVERLAY_SCROLL_CONTAINER}
        canEscapeKeyClose={false}
      >
        <StyledOverlayDiv>
          <h1>Login</h1>
          <Callout
            style={{ marginTop: '25px', marginBottom: '25px' }}
            intent={Intent.DANGER}
          >
            Your session expired.
          </Callout>
          <form>
            <FormGroup
            // helperText="Helper text with details..."
              label="Username or Email"
              labelFor="identity"
            // labelInfo="(required)"
              intent={(isNil(error) ? Intent.NONE : Intent.DANGER)}
            >
              <InputGroup
                id="identity"
                name="identity"
                disabled={disabled}
                onChange={this.handleIdentityChange}
                onKeyPress={this.handleKeypress}
                placeholder="Username or email"
                leftIcon="user"
                autoFocus
                autoComplete="email"
                value={identity}
                intent={(isNil(error) ? Intent.NONE : Intent.DANGER)}
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
                autoComplete="current-password"
                intent={(isNil(error) ? Intent.NONE : Intent.DANGER)}
             />
            </FormGroup>
            <div onClick={this.handleForgot}>
              Forgot ypur password
            </div>

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
                text="Login"
                intent={Intent.SUCCESS}
                onClick={this.handleLogin}
                fill
              />
            </FormGroup>
          </form>
        </StyledOverlayDiv>
      </Overlay>
    );
  }
}

LoginPortal.defaultProps = {
  identity: '',
  password: '',
  submitted: false,
  isLoggedIn: false,
};

LoginPortal.propTypes = {
  identity: types.string,
  password: types.string,
  submitted: types.bool,
  isLoggedIn: types.bool,
};


const mapStateToProps = (state, ownProps) => ({
  identity: undefined,
  password: undefined,
  submitted: false,
  isLoggedIn: false,
  wid: widSelector(state),
  chronos_address: chronosAddressSelector(state),
  analytics_address: analyticsAddressSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setApiParameters: setApiParametersAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPortal);



// import React from 'react';
// import types from 'prop-types';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import {
//   isNil, find, propEq, path,
// } from 'ramda';
// import styled from 'styled-components';
// import { Button, Classes, Icon, InputGroup, Intent, Overlay, Spinner } from '@blueprintjs/core';
// import classNames from 'classnames';
// import FlexView from 'react-flexview/lib';


// const LoginPortalContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 100%;
// `;


// class LoginPortal extends React.PureComponent {
//   handleSubmit = (props) => {
//     const { identity, password } = this.props;
//   }




//   classes = classNames(
//     Classes.CARD,
//     Classes.ELEVATION_4,
//     Classes.OVERLAY_SCROLL_CONTAINER,
//   );

//   render() {
//     const {
//       isLoggedIn, identity, password, submitted
//     } = this.props;
//     const disabled = false;
//     const maybeSpinner = (submitted) ? <Spinner size={Icon.SIZE_STANDARD} /> : null;
//     return (
//       <LoginPortalContainer>
//         {maybeSpinner}
//         <Overlay
//           isOpen
//           autoFocus
//           canEscapeKeyClose={false}
//           canOutsideClickClose={false}
//           style={{
//             height: "100%",
//             width: "100%",
//           }}
//         >
//           <FlexView
//             hAlignContent="center"
//             vAlignContent="center"
//           //  height="400px"
//           // width="100%"
//           // style={{ zIndex: 100, position: 'absolute' }}
//         >

//           <div className={this.classes} style={{ maxWidth: '50%' }}>
//             <InputGroup
//               disabled={disabled}
//               placeholder="Username/email"
//               type="text"
//             />
//             <InputGroup
//               disabled={disabled}
//               placeholder="Password"
//               type="password"
//             />
//             <Button
//               disabled={disabled}
//               intent={Intent.PRIMARY}
//               minimal
//               onClick={this.handleSubmit}
//               text="Login"
//             />
//           </div>
//           </FlexView>
//         </Overlay>
//       </LoginPortalContainer>
//     );
//   }
// }

// LoginPortal.defaultProps = {
//   identity: '',
//   password: '',
//   submitted: false,
//   isLoggedIn: false,
// };

// LoginPortal.propTypes = {
//   identity: types.string,
//   password: types.string,
//   submitted: types.bool,
//   isLoggedIn: types.bool,
// };

// const mapStateToProps = (state, ownProps) => {
//   return {
//     identity: undefined,
//     password: undefined,
//     submitted: false,
//     isLoggedIn: true,
//   };
// };

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   // selectSeries: selectSeriesAction,
// }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(LoginPortal);
