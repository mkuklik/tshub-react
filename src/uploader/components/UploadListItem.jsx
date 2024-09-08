import React from 'react';
import { isNil } from 'ramda';
import {
  Collapse,
} from '@blueprintjs/core';
import Moment from 'react-moment';
import { UploadType } from '../types/uploadTypes';
import {
  ErrorListItem, ErrorDivHeaderIcon, UploadItem, ItemHeader, StatusTag,
  MutedDiv, ErrorDiv, ErrorDivHeader, ErrorList,
} from './UploadListItem.Containers';


const StatusMapping = {
  initiated: 'Initiated',
  uploaded: 'Uploaded',
  processing: 'Processing',
  processed_successful: 'Completed',
  processed_failed: 'Failed',
  committed: 'Committed',
};

const StatusIntent = {
  initiated: 'warning',
  uploaded: 'warning',
  processing: 'primary',
  processed_successful: 'success',
  processed_failed: 'danger',
  committed: 'success',
};


export default class UploadListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleErrorTray = () => this.setState((prev) => ({ isOpen: !prev.isOpen }));

  renderUploadListItemError = ({
    key,
    message,
    row,
    column,
  }) => (
    <ErrorListItem key={key}>
      <span>{message}</span>
      { !isNil(row) && (
        <span>
          {` (see row ${row + 1}`}
          { !isNil(column) && <span>{` and column ${column + 1}`}</span> }
          )
        </span>
      )}
      { isNil(row) && !isNil(column) && (
      <span>
        {` (see column ${column + 1})`}
      </span>
      )}
    </ErrorListItem>
  );

  render() {
    const { item } = this.props;
    const { isOpen } = this.state;

    let errors = (isNil(item.errors) ? [] : item.errors);
    const hasErrors = errors.length > 0;
    errors = errors.map((e, i) => (
      this.renderUploadListItemError({
        key: `${item.uploadId}-${i}`,
        message: e.message,
        row: e.row,
        column: e.column,
        code: e.code,
      })
    ));

    let warnings = (isNil(item.warnings) ? [] : item.warnings);
    const hasWarnings = warnings.length > 0;
    warnings = warnings.map((e, i) => (
      this.renderUploadListItemError({
        key: `${item.uploadId}-${i}`,
        message: e.message,
        row: e.row,
        column: e.column,
        code: e.code,
      })
    ));

    return (
      <UploadItem key={item.uploadId}>
        <ItemHeader onClick={this.handleErrorTray}>
          <div>
            {isOpen && <ErrorDivHeaderIcon icon="caret-down" />}
            {!isOpen && <ErrorDivHeaderIcon icon="caret-right" />}
            <span>{item.filename}</span>
          </div>
          <span>{item.description}</span>
          {!isNil(item.updatedOn) && <Moment fromNow utc date={item.updatedOn} />}
          {isNil(item.updatedOn) && <span />}
          <StatusTag intent={StatusIntent[item.status]}>
            {StatusMapping[item.status] || null}
          </StatusTag>
        </ItemHeader>
        <Collapse isOpen={isOpen}>
          <MutedDiv>{`Upload ID: ${item.uploadId}`}</MutedDiv>
          {hasErrors && (
            <ErrorDiv>
              <ErrorDivHeader onClick={this.handleErrorTray}>
                <h4>Errors</h4>
              </ErrorDivHeader>
              <ErrorList>
                {errors}
              </ErrorList>
            </ErrorDiv>
          )}
          {hasWarnings && (
            <ErrorDiv>
              <ErrorDivHeader onClick={this.handleErrorTray}>
                <h4>Warnings</h4>
              </ErrorDivHeader>
              <ErrorList>
                {warnings}
              </ErrorList>
            </ErrorDiv>
          )}
        </Collapse>

      </UploadItem>
    );
  }
}

UploadListItem.propTypes = {
  item: UploadType.isRequired,
};
