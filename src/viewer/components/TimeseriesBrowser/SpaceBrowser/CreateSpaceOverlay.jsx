
import * as React from 'react';
import types from 'prop-types';
import styled from 'styled-components';
import {
  Button, Overlay, TagInput, InputGroup, FormGroup, TextArea, Intent, Radio, RadioGroup, Classes, Callout,
} from '@blueprintjs/core';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isNil, path } from 'ramda';
import { isCreateSpaceOverlayOpenSelector } from '../../../selectors/ui';
import { toggleCreateSpaceOverlayAction } from '../../../actions/uiActions';
import { Space } from '../../../../client';
import RenderErrors from './RenderErrors';
import { saveSpaceAction } from '../../../actions/spacesActions';

const initialState = {
  name: '',
  nameError: undefined,
  description: '',
  tags: [],
  visibility: 'private',
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

class CreateSpaceOverlay extends React.Component {
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
      ...initialState,
    };
  }

  getTagProps = () => ({
    intent: Intent.NONE,
    // large
    // minimal
  });

  handleNameChange = (e) => {
    this.setState({ name: e.target.value, errors: [], nameError: undefined });
  }

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value, errors: [] });
  }

  handleTagChange = (values) => {
    this.setState({ tags: values, errors: [] });
  };

  handleClear = () => this.handleTagChange([]);

  handleVisibilityChange = (e) => {
    this.setState({ visibility: e.target.value, errors: [] });
  };

  handleCancel = () => {
    this.setState(initialState);
    this.props.toggleNewSpaceOverlay();
  }


  apiCreateSpace = ({
    name, description, tags, visibility,
  }) => (
    new Promise((resolve, reject) => {
      const space = Space.constructFromObject({
        name, description, tags, visibility,
      });
      window._chronosdb.rawSpaceApi.appApiSpaceRawPost(space, (error, data) => (
        error ? reject(error) : resolve(data)
      ));
    }));

  handleCreate = () => {
    const { saveSpace, toggleNewSpaceOverlay } = this.props;
    if (isNil(this.state.name) || this.state.name === '') {
      this.setState((prevState) => ({ nameError: 'Name is required' }));
    } else {
      const tmp = this.apiCreateSpace(this.state);
      tmp
        .then((data) => {
          this.setState(initialState);
          toggleNewSpaceOverlay();
          saveSpace(data);
        })
        .catch((error) => {
          switch (path(['status'], error)) {
            case 400:
              this.setState({ errors: [(!isNil(path(['response', 'body', 'detail'], error))) ? path(['response', 'body', 'detail'], error) : error] });              break;
            case 403:
              this.setState({ errors: ['You have no permission to create a space'] });
              break;
            case 409:
              this.setState({ errors: ['Space already exists'] });
              break;
            default:
              this.setState({ errors: [error] });
          }
        });
    }
    // }
  }

  handleKeypress = (event) => {
    // onKeyPress={this.handleKeypress}
    if (event.key === 'Enter') {
      event.preventDefault();
      this.handleCreate();
    }
  }

  render() {
    const { isOpen, toggleNewSpaceOverlay } = this.props;
    const {
      tags, name, description, visibility, errors, nameError,
    } = this.state;
    const disabled = false;
    return (
      <Overlay
        isOpen={isOpen}
        onClose={toggleNewSpaceOverlay}
        className={Classes.OVERLAY_SCROLL_CONTAINER}
      >
        <StyledOverlayDiv>
          <h1>Create Space</h1>
          <FormGroup
            // helperText="Helper text with details..."
            label="Name"
            labelFor="space-name"
            labelInfo="(required)"
            intent={(isNil(nameError) ? Intent.NONE : Intent.DANGER)}
          >
            <InputGroup
              id="space-name"
              disabled={disabled}
              onChange={this.handleNameChange}
              onKeyPress={this.handleKeypress}
              placeholder="Space name"
              autoFocus
              value={name}
              intent={(isNil(nameError) ? Intent.NONE : Intent.DANGER)}
            />
            { !isNil(nameError)
              && (
              <Callout intent={Intent.DANGER}>
                { nameError }
              </Callout>
              )}
          </FormGroup>

          <FormGroup
            // helperText="Helper text with details..."
            label="Description"
            labelFor="space-description"
            // labelInfo="(required)"
          >
            <TextArea
              style={{ width: '100%' }}
              disabled={disabled}
              id="space-description"
              growVertically
              intent={Intent.PRIMARY}
              onChange={this.handleDescriptionChange}
              value={description}
            />
          </FormGroup>

          <FormGroup
          // helperText="Helper text with details..."
            label="Tags"
            labelFor="space-tags"
          >
            <TagInput
              id="space-tags"
              disabled={disabled}
              onChange={this.handleTagChange}
              rightElement={this.clearButton}
              placeholder=""
              values={tags}
            />
          </FormGroup>

          <RadioGroup
            label="Visibility"
            helperText="Who can see this space?"
            onChange={this.handleVisibilityChange}
            inline
            selectedValue={visibility}
            disabled={disabled}
          >
            <Radio
              key="private"
              label="Private"
              value="private"
            />
            <p>The group and its projects can only be viewed by members.</p>

            <Radio
              key="public"
              label="Public"
              value="public"
            />
            <p>The group and any public projects can be viewed without any authentication.</p>
          </RadioGroup>
          <div style={{ marginTop: '20px' }}>
            <RenderErrors errors={errors} />
          </div>

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
              text="Create"
              intent={Intent.SUCCESS}
              onClick={this.handleCreate}
            />
          </FormGroup>
        </StyledOverlayDiv>
      </Overlay>
    );
  }
}

CreateSpaceOverlay.defaultProps = {
  isOpen: false,
};

CreateSpaceOverlay.propTypes = {
  isOpen: types.bool,
  toggleNewSpaceOverlay: types.func.isRequired,
};


const mapStateToProps = (state, ownProps) => ({
  isOpen: isCreateSpaceOverlayOpenSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleNewSpaceOverlay: toggleCreateSpaceOverlayAction,
  saveSpace: saveSpaceAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateSpaceOverlay);
