
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
import {
  isCreateCollectionOverlayOpenSelector,
  timeseriesBrowserCreateCollectioninSpaceIdSelector,
} from '../../../selectors/ui';
import { toggleCreateCollectionOverlayAction } from '../../../actions/uiActions';
import { Collection } from '../../../../client';
import RenderErrors from './RenderErrors';
import { saveCollectionAction } from '../../../actions/collectionsActions';

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

class CreateCollectionOverlay extends React.Component {
  clearButton = (
    <Button
      // disabled={props.disabled}
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
    this.props.toggleCreateCollectionOverlay(undefined);
  }


  apiCreateCollection = ({
    name, description, tags, visibility,
  }) => (
    new Promise((resolve, reject) => {
      const coll = Collection.constructFromObject({
        name, description, visibility, tags,
      });
      window._chronosdb.rawCollectionApi.appApiCollectionRawPost(this.props.spaceId, coll, (error, data) => (
        error ? reject(error) : resolve(data)
      ));
    }));

  handleCreate = () => {
    const { spaceId, saveCollection, toggleCreateCollectionOverlay } = this.props;
    if (isNil(this.state.name) || this.state.name === '') {
      this.setState({ nameError: 'Name is required' });

    } else if (isNil(spaceId)) {
      this.setState({ errors: ['Something went wrong; spaceId is missing. Try selecting space again'] });
    }
    else {
      const tmp = this.apiCreateCollection(this.state);
      tmp
        .then((data) => {
          this.setState(initialState);
          toggleCreateCollectionOverlay();
          saveCollection(spaceId, data);
        })
        .catch((error) => {
          switch (path(['status'], error)) {
            case 400:
              this.setState({ errors: [(!isNil(path(['response', 'body', 'detail'], error))) ? path(['response', 'body', 'detail'], error) : error] });              break;
            case 403:
              this.setState({ errors: ['You have no permission to create a collection in this space'] });
              break;
            case 409:
              this.setState({ errors: ['Collection already exists'] });
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
    const { isOpen, toggleCreateCollectionOverlay } = this.props;
    const {
      tags, name, description, visibility, errors, nameError,
    } = this.state;
    const disabled = false;
    return (
      <Overlay
        isOpen={isOpen}
        onClose={toggleCreateCollectionOverlay}
        className={Classes.OVERLAY_SCROLL_CONTAINER}
      >
        <StyledOverlayDiv>
          <h1>Create Collection</h1>
          {/* <p>in space '{}'</p> */}
          <FormGroup
            label="Name"
            labelFor="coll-name"
            labelInfo="(required)"
            intent={(isNil(nameError) ? Intent.NONE : Intent.DANGER)}
          >
            <InputGroup
              id="coll-name"
              disabled={disabled}
              onChange={this.handleNameChange}
              onKeyPress={this.handleKeypress}
              placeholder="Collection name"
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
            label="Description"
            labelFor="coll-description"
          >
            <TextArea
              style={{ width: '100%' }}
              disabled={disabled}
              id="coll-description"
              growVertically
              intent={Intent.PRIMARY}
              onChange={this.handleDescriptionChange}
              value={description}
            />
          </FormGroup>

          <FormGroup
          // helperText="Helper text with details..."
            label="Tags"
            labelFor="coll-tags"
          >
            <TagInput
              id="coll-tags"
              disabled={disabled}
              onChange={this.handleTagChange}
              rightElement={this.clearButton}
              placeholder=""
              values={tags}
            />
          </FormGroup>

          <RadioGroup
            label="Visibility"
            helperText="Who can see this collection?"
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
            <p>The collection can only be viewed by space members only.</p>

            <Radio
              key="public"
              label="Public"
              value="public"
            />
            <p>The collection can only be viewed without any authentication.</p>
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

CreateCollectionOverlay.defaultProps = {
  isOpen: false,
  spaceId: undefined,
};

CreateCollectionOverlay.propTypes = {
  isOpen: types.bool,
  toggleCreateCollectionOverlay: types.func.isRequired,
  saveCollection: types.func.isRequired,
  spaceId: types.string,
};


const mapStateToProps = (state, ownProps) => ({
  isOpen: isCreateCollectionOverlayOpenSelector(state),
  spaceId: timeseriesBrowserCreateCollectioninSpaceIdSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleCreateCollectionOverlay: toggleCreateCollectionOverlayAction,
  saveCollection: saveCollectionAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateCollectionOverlay);
