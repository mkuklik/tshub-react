import * as React from 'react';
import types from 'prop-types';
import styled from 'styled-components';
import {
  Button, Overlay, TagInput, InputGroup, FormGroup, TextArea,
  Intent, Classes, Callout, MenuItem,
} from '@blueprintjs/core';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  isNil, path, mergeAll, map, prop,
} from 'ramda';
import { Select } from '@blueprintjs/select';
import {
  timeseriesBrowserCreateTimeseriesInCollIdSelector,
  isCreateTimeseriesOverlayOpenSelector,
} from '../../../selectors/ui';
import { toggleCreateTimeseriesOverlayAction } from '../../../actions/uiActions';
import { TimeSeries } from '../../../../client';
import RenderErrors from '../SpaceBrowser/RenderErrors';
import { saveTimeSeriesAction } from '../../../actions/timeseriesActions';

const initialState = {
  name: '',
  nameError: undefined,
  dtype: 'float',
  freq: 'D',
  title: '',
  titleError: undefined,
  description: '',
  tags: [],
  // visibility: 'private',
  errors: [],
};

const DTypeOptions = [
  ['int', 'Integer'],
  ['float', 'Float'],
  ['bool', 'Boolean']];

const DTypeOptionsLookup = mergeAll(map((x) => ({ [x[0]]: x[1] }), DTypeOptions));

const FreqOptions = [
  ['D', 'Daily'],
  ['W', 'Weekly'],
  ['M', 'Monthly'],
  ['Q', 'Quarterly'],
  ['A', 'Annual']];

const FreqOptionsLookup = mergeAll(map((x) => ({ [x[0]]: x[1] }), FreqOptions));

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

class CreateTimeseriesOverlay extends React.Component {
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

  handleDTypeChange = (value) => {
    this.setState({ dtype: value, errors: [], dtypeError: undefined });
  }

  handleFreqChange = (value) => {
    this.setState({ freq: value, errors: [], freqError: undefined });
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value, errors: [], titleError: undefined });
  }

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value, errors: [] });
  }

  handleCancel = () => {
    this.setState(initialState);
    this.props.toggleCreateTimeseriesOverlay(undefined);
  }

  apiCreateTimeseries = ({
    name, dtype, freq, title, description,
  }) => (
    new Promise((resolve, reject) => {
      const ts = TimeSeries.constructFromObject({
        name, dtype, freq, title, description, itype: 'p',
      });
      window._chronosdb.rawTimeSeriesApi.appApiTimeseriesRawPost(this.props.collId, ts, (error, data) => (
        error ? reject(error) : resolve(data)
      ));
    }));

  handleCreate = () => {
    const { collId, saveTimeseries, toggleCreateTimeseriesOverlay } = this.props;
    if (isNil(this.state.name) || this.state.name === '') {
      this.setState({ nameError: 'Name is required' });
    } else if (isNil(collId)) {
      this.setState({ errors: ['Something went wrong; collId is missing. Try selecting collection again'] });
    } else {
      const tmp = this.apiCreateTimeseries(this.state);
      tmp
        .then((data) => {
          this.setState(initialState);
          toggleCreateTimeseriesOverlay();
          saveTimeseries(data);
        })
        .catch((error) => {
          console.log('error', { ...error });
          switch (path(['status'], error)) {
            case 400:
              this.setState({ errors: [(!isNil(path(['response', 'body', 'detail'], error))) ? path(['response', 'body', 'detail'], error) : error] });
              break;
            case 403:
              this.setState({ errors: ['You have no permission to create timeseries in this collection'] });
              break;
            case 409:
              this.setState({ errors: ['Timeseries already exists'] });
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
    const { isOpen, toggleCreateTimeseriesOverlay } = this.props;
    const {
      tags, name, dtype, freq, title, description, errors, nameError, titleError,
    } = this.state;
    const disabled = false;
    return (
      <Overlay
        isOpen={isOpen}
        onClose={toggleCreateTimeseriesOverlay}
        className={Classes.OVERLAY_SCROLL_CONTAINER}
      >
        <StyledOverlayDiv>
          <h1>Create Timeseries</h1>
          {/* <p>in space '{}'</p> */}
          <FormGroup
            label="Name"
            labelFor="ts-name"
            labelInfo="(required)"
            intent={(isNil(nameError) ? Intent.NONE : Intent.DANGER)}
          >
            <InputGroup
              id="ts-name"
              disabled={disabled}
              onChange={this.handleNameChange}
              onKeyPress={this.handleKeypress}
              placeholder="Time Series name"
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
            label="Data Type"
            labelInfo="(required)"
            inline
          >
            <Select
              activeItem={dtype}
              disabled={disabled}
              filterable={false}
              items={DTypeOptions}
              onItemSelect={(item) => this.handleDTypeChange(item[0])}
              itemRenderer={([val, lab], { handleClick, modifiers }) => (
                <MenuItem
                  key={val}
                  active={modifiers.active}
                  onClick={handleClick}
                  text={lab}
                />
              )}
              popoverProps={{ minimal: true }}
            >
              <Button
                disabled={disabled}
                text={DTypeOptionsLookup[dtype]}
              />
            </Select>
          </FormGroup>

          <FormGroup
          // helperText="Helper text with details..."
            label="Frequency"
            labelInfo="(required)"
            inline
          >
            <Select
              activeItem={freq}
              disabled={disabled}
              filterable={false}
              items={FreqOptions}
              onItemSelect={(item) => this.handleFreqChange(item[0])}
              itemRenderer={([val, lab], { handleClick, modifiers }) => (
                <MenuItem
                  key={val}
                  active={modifiers.active}
                  onClick={handleClick}
                  text={lab}
                />
              )}
              popoverProps={{ minimal: true }}
            >
              <Button
                disabled={disabled}
                text={FreqOptionsLookup[freq]}
              />
            </Select>
          </FormGroup>

          {/* Optional */}

          <FormGroup
            label="Title"
            labelFor="ts-title"
            // labelInfo="(required)"
            // intent={(isNil(nameError) ? Intent.NONE : Intent.DANGER)}
          >
            <InputGroup
              id="ts-title"
              disabled={disabled}
              onChange={this.handleTitleChange}
              placeholder="Title"
              value={title}
              intent={(isNil(titleError) ? Intent.NONE : Intent.DANGER)}
            />
            { !isNil(titleError)
              && (
              <Callout intent={Intent.DANGER}>
                { titleError }
              </Callout>
              )}
          </FormGroup>

          <FormGroup
            label="Description"
            labelFor="ts-description"
          >
            <TextArea
              style={{ width: '100%' }}
              disabled={disabled}
              id="ts-description"
              growVertically
              intent={Intent.PRIMARY}
              onChange={this.handleDescriptionChange}
              value={description}
            />
          </FormGroup>

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

CreateTimeseriesOverlay.defaultProps = {
  isOpen: false,
  collId: undefined,
};

CreateTimeseriesOverlay.propTypes = {
  isOpen: types.bool,
  toggleCreateTimeseriesOverlay: types.func.isRequired,
  saveTimeseries: types.func.isRequired,
  collId: types.string,
};

const mapStateToProps = (state, ownProps) => ({
  isOpen: isCreateTimeseriesOverlayOpenSelector(state),
  collId: timeseriesBrowserCreateTimeseriesInCollIdSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleCreateTimeseriesOverlay: toggleCreateTimeseriesOverlayAction,
  saveTimeseries: saveTimeSeriesAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateTimeseriesOverlay);
