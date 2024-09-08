/* eslint-disable camelcase */
import axios from 'axios';
import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  path, isNil, map, mergeAll,
} from 'ramda';
import {
  FileInput,
  ProgressBar,
  Button,
  ControlGroup,
  FormGroup,
  EditableText,
  RadioGroup,
  Radio,
  Classes,
  Tooltip,
  Checkbox,
  MenuItem,
} from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import { Select } from '@blueprintjs/select';
import { saveUploadObjectAction, autoRefreshObjectAction } from '../actions/uploadActions';
import { reportErrorAction } from '../../viewer/actions/errorActions';
import { apiCreateUpload } from '../sagas/upload/createUpload';
import { apiConfirmUpload } from '../sagas/upload/confirmUpload';
import {
  Container, RequiredDiv, OptionDiv, ProgressBarContainer,
} from './FileUpload.Containers';


const method_options = [
  ['Update', 'update', 'Updates existing values and Appends/prepends new values.'],
  ['Append', 'append', 'Appends/prepends new values only; existing observations are not modified.'],
  ['Overwrite', 'overwrite', 'Overwrites entire series with new observations.'],
];


const FreqOptions = [
  ['', 'None'],
  ['auto', 'Auto'],
  ['D', 'Daily'],
  ['W', 'Weekly'],
  ['M', 'Monthly'],
  ['Q', 'Quarterly'],
  ['A', 'Annual']];

const FreqOptionsLookup = mergeAll(map((x) => ({ [x[0]]: x[1] }), FreqOptions));

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: undefined,
      progress: 0,
      isUploading: false,
      intent: 'primary',
      error: undefined,
      method: 'update',
      description: '',
      vintageName: '',
      createMissing: false,
      dropnan: false,
      trimLeftEnd: true,
      trimRightEnd: false,
      freq: '',
    };
  }

  selectFileHandle = (e) => {
    this.setState({
      file: e.target.files[0],
      error: undefined,
    });
  }

  setUploadStatus = () => this.setState({});

  setUploading = (isUploading) => this.setState({ isUploading });

  updateUploadProgress = (progress) => this.setState({ progress });

  handleDescriptionChange = (value) => this.setState({ description: value });

  handleVintageChange = (value) => this.setState({ vintageName: value });

  handleCreateMissing = (event) => this.setState({ createMissing: event.target.checked });

  handleDropNaN = (event) => this.setState({ dropnan: event.target.checked });

  handleTrimLeft = (event) => this.setState({ trimLeftEnd: event.target.checked });

  handleTrimRight = (event) => this.setState({ trimRightEnd: event.target.checked });

  handleMethodChange = (event) => this.setState({ method: event.target.value });

  handleFreqChange = (value) => this.setState({ freq: value });

  postFile = (uploadId, url, file) => {
    const { autoRefreshObject, collId } = this.props;
    const { createMissing } = this.state;

    this.updateUploadProgress(0);
    this.setUploading(true);

    const formData = new FormData();
    formData.append('file', file);
    
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
        url,
        onUploadProgress: (ev) => {
          const progress = ev.loaded / ev.total;
          this.updateUploadProgress(progress);
        },
      })
        .then(() => {
          this.setUploadStatus(true);
          this.setUploading(false);
          // autorefresh will fetch a list of timeseries to refresh timeseries browser
          // only when createMissing is true otherwise collId is undefined and timeseries
          // listwon't be refreshed
          autoRefreshObject({ uploadId, collId: (createMissing) ? collId : undefined });
          resolve({ uploadId }); // resolve as uploadId
        })
        .catch((err) => {
          this.setUploadStatus(true);
          this.setUploading(false);
          this.setState({ error: `Upload failed with error ${path(['response', 'status'], err)}` });
          reject(err);
        });
    });
  }


  uploadFileHandle = () => {
    // get presigned url
    const { collId, saveUploadObject, reportError } = this.props;
    const {
      file, method, description, vintageName, createMissing, freq,
      dropnan, trimLeftEnd, trimRightEnd,
    } = this.state;
    const p = apiCreateUpload(
      collId,
      method,
      file.name, file.type, file.size, file.lastModified,
      (vintageName === '') ? undefined : vintageName,
      (description === '') ? undefined : description,
      createMissing,
      dropnan,
      trimLeftEnd,
      trimRightEnd,
      (freq === '') ? undefined : freq,
    );
    p.then((upload) => {
      saveUploadObject(upload);
      const tmp = this.postFile(upload.uploadId, upload.upload_url, file);
      return tmp; // uploadId
    })
      .then(({ uploadId }) => {
        const confirm = apiConfirmUpload(uploadId);
        confirm.then((data) => saveUploadObject(data))
          .catch((error) => reportError(`${error}`));
      })
      .catch((reason) => {
        const title = path(['response', 'body', 'title'], reason);
        const detail = path(['response', 'body', 'detail'], reason);
        if (!isNil(title) && !isNil(detail)) {
          this.setState({ error: `${title}: ${detail}` });
        }
      });
  }

  render() {
    const {
      file, method, isUploading, error, progress, intent, description, vintageName, createMissing,
      freq, confirmOnEnterKey, dropnan, trimLeftEnd, trimRightEnd,
    } = this.state;
    const disabled = false;

    return (
      <Container>
        <FormGroup
          helperText={(!isNil(error)) ? error : undefined}
          intent={(!isNil(error)) ? 'danger' : 'primary'}
        >
          <ControlGroup>
            <FileInput
              text={path(['name'], file) || 'Choose file...'}
              buttonText="Browse"
              onChange={this.selectFileHandle}
            />
            <Button
              onClick={this.uploadFileHandle}
              text="Upload"
              disabled={isNil(file)}
              intent={(!isNil(error)) ? 'danger' : 'primary'}
            />
          </ControlGroup>
        </FormGroup>
        {isUploading
          && (
          <ProgressBarContainer>
            <ProgressBar intent={intent} value={progress} />
          </ProgressBarContainer>
          )}
        <RequiredDiv>
          <RadioGroup
            label="Method"
            onChange={this.handleMethodChange}
            inline
            selectedValue={method}
            disabled={disabled}
          >
            {map(([val, key, help]) => (
              <Radio
                key={key}
                labelElement={(
                  <Tooltip
                    position="bottom-right"
                    className={Classes.TOOLTIP_INDICATOR}
                    content={help}
                  >
                    {val}
                  </Tooltip>
                )}
                value={key}
              />
            ), method_options)}
          </RadioGroup>
        </RequiredDiv>
        <OptionDiv>
          <FormGroup
            label="Vintage Name"
            labelInfo="(optional)"
          >
            <EditableText
              maxLines={12}
              minLines={1}
              multiline
              placeholder="vintage name"
              value={vintageName}
              onChange={this.handleVintageChange}
            />
          </FormGroup>
        </OptionDiv>
        <OptionDiv>
          <FormGroup
            label="Vintage Description"
            labelInfo="(optional)"
          >
            <EditableText
              maxLines={12}
              minLines={1}
              multiline
              placeholder="Upload description"
              firmOnEnterKey={confirmOnEnterKey}
              value={description}
              onChange={this.handleDescriptionChange}
            />
          </FormGroup>
        </OptionDiv>
        <OptionDiv>
          <Checkbox
            checked={createMissing}
            labelElement={(
              <Tooltip
                position="bottom"
                className={Classes.TOOLTIP_INDICATOR}
                content="If any timeseries in the file is missing in the collection, a new timeseries is created in the collection; If `dtype` option is missing, `float` is assumed"
              >
                Create missing series
              </Tooltip>
              )}
            onChange={this.handleCreateMissing}
          />
        </OptionDiv>
        <OptionDiv>
          <Checkbox
            checked={trimLeftEnd}
            labelElement={(
              <Tooltip
                position="bottom"
                className={Classes.TOOLTIP_INDICATOR}
                content="Remove any missing values (NaN) at the beginning of the series"
              >
                Trim left end
              </Tooltip>
              )}
            onChange={this.handleTrimLeft}
          />
        </OptionDiv>
        <OptionDiv>
          <Checkbox
            checked={trimRightEnd}
            labelElement={(
              <Tooltip
                position="bottom"
                className={Classes.TOOLTIP_INDICATOR}
                content="Remove any missing values (NaN) at the end of the series"
              >
                Trim right end
              </Tooltip>
            )}
            onChange={this.handleTrimRight}
          />
        </OptionDiv>
        <OptionDiv>
          <Checkbox
            checked={dropnan}
            labelElement={(
              <Tooltip
                position="bottom"
                className={Classes.TOOLTIP_INDICATOR}
                content="Remove all missing values (NaN)"
              >
                Drop missing values
              </Tooltip>
            )}
            onChange={this.handleDropNaN}
          />
        </OptionDiv>
        <OptionDiv>
          <FormGroup
            label="Frequency"
            labelElement={(
              <Tooltip
                position="bottom"
                className={Classes.TOOLTIP_INDICATOR}
                content="You can select index frequency if it is not already specified in the file parameters"
              >
                Frequency
              </Tooltip>
            )}
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
                style={{ minWidth: '100px' }}
                disabled={disabled}
                text={FreqOptionsLookup[freq]}
                minimal
              />
            </Select>
          </FormGroup>
        </OptionDiv>
      </Container>
    );
  }
}

FileUpload.propTypes = {
  collId: types.string.isRequired,
  saveUploadObject: types.func.isRequired,
  autoRefreshObject: types.func.isRequired,
  reportError: types.func.isRequired,
};

const mapStateToProps = (state) => ({
  api: state.api,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  saveUploadObject: saveUploadObjectAction,
  autoRefreshObject: autoRefreshObjectAction,
  reportError: reportErrorAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);
