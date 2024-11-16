import * as React from 'react';
import types from 'prop-types';
import styled from 'styled-components';
import {
  Button, Overlay, InputGroup, FormGroup, Intent, Classes, Checkbox,
} from '@blueprintjs/core';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isFredBrowserConfigOverlayOpenSelector } from '../../../selectors/ui';
import { fredApiKeySelector, fredRemoveDiscontinuedSelector } from '../../../selectors/fred';

import { fredBrowserToggleConfigOverlayAction } from '../../../actions/uiActions';
import { saveFredBrowserConfigAction } from '../../../actions/fredActions';

const initialState = {
  apiKey: '',
  removeDiscontinued: false,
  // name: '',
  // nameError: undefined,
  // description: '',
  // tags: [],
  // visibility: 'private',
  errors: [],
};

const StyledOverlayDivBase = ({ className, children }) => (
  <div className={classNames(Classes.CARD, Classes.ELEVATION_4, className)}>
    {children}
  </div>
);

StyledOverlayDivBase.propTypes = {
  className: types.string.isRequired,
  children: types.node.isRequired,
};

const StyledOverlayDiv = styled(StyledOverlayDivBase)`
  // position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

class FredBrowserConfigOverlay extends React.Component {
  clearButton = (
    <Button
      icon="cross"
      minimal
      onClick={this.handleClear}
    />
  );

  constructor(props) {
    super(props);
    this.state = {
      apiKey: props.apiKey,
      removeDiscontinued: props.removeDiscontinued,
      // ...initialState,
    };
  }

  componentDidUpdate(prevProps) {
    const { apiKey, removeDiscontinued } = this.props;
    if (prevProps.apiKey !== apiKey || prevProps.removeDiscontinued !== removeDiscontinued) {
      this.setState({ apiKey, removeDiscontinued });
    }
  }

  handleApiKeyChange = (e) => {
    this.setState({ apiKey: e.target.value });
  }

  handleRemoveDiscontinuedChange = (e) => {
    this.setState({ removeDiscontinued: e.target.value });
  }

  handleCancel = () => {
    const { toggleOverlay } = this.props;
    this.setState(initialState, toggleOverlay);
  }

  handleSave = () => {
    const { toggleOverlay, saveConfig } = this.props;
    toggleOverlay();
    const { apiKey, removeDiscontinued } = this.state;
    saveConfig({ apiKey, removeDiscontinued });
  }

  handleKeypress = (event) => {
    // onKeyPress={this.handleKeypress}
    if (event.key === 'Enter') {
      event.preventDefault();
      this.handleCreate();
    }
  }

  render() {
    const { isOpen, toggleOverlay } = this.props;
    const {
      apiKey, removeDiscontinued,
    } = this.state;
    const disabled = false;
    return (
      <Overlay
        isOpen={isOpen}
        onClose={toggleOverlay}
        className={Classes.OVERLAY_SCROLL_CONTAINER}
      >
        <StyledOverlayDiv>
          <h1>FRED Browser Config</h1>
          <FormGroup
            // helperText="Helper text with details..."
            label="API Key"
            labelFor="api-key"
            // labelInfo="(required)"
            // intent={(isNil(nameError) ? Intent.NONE : Intent.DANGER)}
          >
            <InputGroup
              id="api-key"
              disabled={disabled}
              onChange={this.handleApiKeyChange}
              onKeyPress={this.handleKeypress}
              placeholder="API Key"
              autoFocus
              value={apiKey}
              // intent={(isNil(nameError) ? Intent.NONE : Intent.DANGER)}
            />
            {/* { !isNil(nameError)
              && (
              <Callout intent={Intent.DANGER}>
                { nameError }
              </Callout>
              )} */}
          </FormGroup>

          <Checkbox checked={removeDiscontinued} label="Filter Out Discontinued" onChange={this.handleRemoveDiscontinuedChange} />

          <FormGroup
            style={{ marginTop: '25px', marginBottom: '0px' }}
          >
            <Button
              style={{ marginLeft: '5px' }}
              text="Cancel"
              intent={Intent.PRIMARY}
              onClick={this.handleCancel}
            />
            <Button
              style={{ marginLeft: '5px', float: 'right' }}
              text="Save"
              intent={Intent.SUCCESS}
              onClick={this.handleSave}
            />
          </FormGroup>
        </StyledOverlayDiv>
      </Overlay>
    );
  }
}

FredBrowserConfigOverlay.defaultProps = {
  isOpen: false,
  apiKey: '',
  removeDiscontinued: false,
};

FredBrowserConfigOverlay.propTypes = {
  isOpen: types.bool,
  apiKey: types.string,
  removeDiscontinued: types.bool,
  toggleOverlay: types.func.isRequired,
  saveConfig: types.func.isRequired,
};

const mapStateToProps = (state /* ,ownProps */) => ({
  isOpen: isFredBrowserConfigOverlayOpenSelector(state),
  apiKey: fredApiKeySelector(state),
  removeDiscontinued: fredRemoveDiscontinuedSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleOverlay: fredBrowserToggleConfigOverlayAction,
  saveConfig: saveFredBrowserConfigAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FredBrowserConfigOverlay);
