/* eslint-disable max-classes-per-file */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import { path } from 'ramda';

import {
  EditableText,
} from '@blueprintjs/core';
import { workbookUIPropsSelector, workbookTitleSelector } from '../../selectors/workbookSelectors';
import { updateMetadataAction, saveWorkbookUIPropsAction } from '../../action/workbookActions';


class EditableTitle extends React.PureComponent {
  handleConfirm = () => {
    const { updateMetadata, title } = this.props;
    updateMetadata({ title }); //
  };

  handleCancel = () => {
    const { origTitle, saveWorkbookUIProps } = this.props;
    saveWorkbookUIProps({ title: origTitle }); // reset title to original
  };

  // eslint-disable-next-line react/destructuring-assignment
  handleChange = (value) => this.props.saveWorkbookUIProps({ title: value });

  render() {
    const { className, title } = this.props;
    return (
      <EditableText
        className={className}
        value={title}
        onChange={this.handleChange}
        onCancel={this.handleCancel}
        onConfirm={this.handleConfirm}
      />
    );
  }
}

EditableTitle.defaultProps = {
  title: undefined,
  origTitle: undefined,
};

EditableTitle.propTypes = {
  title: types.string,
  origTitle: types.string,
  updateMetadata: types.func.isRequired,
  saveWorkbookUIProps: types.func.isRequired,
};

const mapStateToProps = (state) => ({
  title: path(['title'], workbookUIPropsSelector(state)),
  origTitle: workbookTitleSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateMetadata: updateMetadataAction,
  saveWorkbookUIProps: saveWorkbookUIPropsAction,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(EditableTitle);
