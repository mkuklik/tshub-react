/* eslint-disable react/forbid-prop-types */
import React from 'react';
import * as r from 'ramda';
import types from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ResizeSensor } from '@blueprintjs/core';
import { Segment } from 'semantic-ui-react';
import {
  AnnotationListType,
} from '../../types/Annotations';

import {
  getAnnotationList,
} from '../../selectors/annotations';

import {
  annotationsToggleAnnotationsVisible,
} from '../../actions/uiActions';

import { AnnotationListContainer } from './Table.Components';
import { AnnotationList } from './AnnotationList/AnnotationList.Container';
import { AnnotationCreateDialog } from './AnnotationCreateDialog/AnnotationCreateDialog.Container';
import { AnnotationAddTargetDialog } from './AnnotationAddTargetDialog/AnnotationAddTargetDialog.Container';
import { AnnotationDeleteTargetDialog } from './AnnotationDeleteTargetDialog/AnnotationDeleteTargetDialog.Container';
import TableContainer from './Table.Container';


const TableViewerContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const TableViewer = ({
  annotationList,
  isAnnotationsVisible,
}) => {
  const [size, setSize] = React.useState({});

  const handleResize = (entries) => {
    if (!r.isNil(entries) && entries.length > 0) {
      setSize({ height: entries[0].contentRect.height, width: entries[0].contentRect.width });
    }
  };

  return (
    <>
      <Segment basic style={{ height: '600px' }}>
        <ResizeSensor
          onResize={handleResize}
        >
          <TableViewerContainer>
            <TableContainer size={size} />


          </TableViewerContainer>
        </ResizeSensor>
      </Segment>
      <Segment basic>
        {isAnnotationsVisible && (
        <AnnotationListContainer>
          <AnnotationList annotationList={annotationList} />
        </AnnotationListContainer>
        )}
      </Segment>

      <AnnotationCreateDialog />
      <AnnotationAddTargetDialog />
      <AnnotationDeleteTargetDialog />

    </>
  );
};

TableViewer.propTypes = {
  annotationList: AnnotationListType,
  isAnnotationsVisible: types.bool,
};

TableViewer.defaultProps = {
  annotationList: [],
  isAnnotationsVisible: false,
};

const mapStateToProps = (state) => {
  const { ui } = state;

  const annotationList = getAnnotationList(state);

  return {
    annotationList,
    isAnnotationsVisible: ui.annotations.isAnnotationsVisible,
  };
};

export default r.compose(
  connect(
    mapStateToProps,
    {
      toggleAnnotationsVisible: annotationsToggleAnnotationsVisible,
    },
  ),
)(TableViewer);
