import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import {
  isNil, find, path, isEmpty,
} from 'ramda';
import styled from 'styled-components';

import { ResizeSensor } from '@blueprintjs/core';
import TableViewer from '../../viewer/components/TableViewer/Table.Container';
import { AnnotationList } from '../../viewer/components/TableViewer/AnnotationList/AnnotationList.Container';

import { getAnnotationList, uiAnnotationIsAnnotationListVisibleSelector } from '../../viewer/selectors/annotations';
import { annotationsSetAnnotationListVisibilityAction } from '../../viewer/actions/uiActions';
import { AnnotationListType } from '../../viewer/types/Annotations';
import { AnnotationCreateDialog } from '../../viewer/components/TableViewer/AnnotationCreateDialog/AnnotationCreateDialog.Container';
import { AnnotationAddTargetDialog } from '../../viewer/components/TableViewer/AnnotationAddTargetDialog/AnnotationAddTargetDialog.Container';
import { AnnotationDeleteTargetDialog } from '../../viewer/components/TableViewer/AnnotationDeleteTargetDialog/AnnotationDeleteTargetDialog.Container';
import TableContainer from '../../viewer/components/TableViewer/Table.Container';
import TableAnnotations from './TableAnnotations';

const Container = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
`;

const StyledTable = styled(TableContainer)`
  grid-area: 1 / 1;
  z-index: 1;
`;

const StyledTableAnnotations = styled(TableAnnotations)`
  grid-area: 1/1;
  z-index: ${(props) => ((props.isAnnotationListVisible) ? 2 : 0)};
  background: white;
`;

class TableViewerTab extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      height: null,
      width: null,
    };
  }

  handleResize = (entries) => {
    if (!isNil(entries) && !isEmpty(entries)) {
      this.setState({ height: entries[0].contentRect.height, width: entries[0].contentRect.width });
      console.log('TableViewerTab size', this.state, entries);
    }
  }

  render() {
    const {
      isAnnotationListVisible,
    } = this.props;
    const { height, width } = this.state;

    return (
      <ResizeSensor onResize={this.handleResize}>
        <Container>
          <StyledTable isWorkbook size={{ height, width }} />
          <StyledTableAnnotations
            isAnnotationListVisible={isAnnotationListVisible}
            height={height}
            width={width}
          />
          <AnnotationCreateDialog />
          <AnnotationAddTargetDialog />
          <AnnotationDeleteTargetDialog />
        </Container>
      </ResizeSensor>
    );
  }
}

TableViewerTab.defaultProps = {
};

TableViewerTab.propTypes = {
  isAnnotationListVisible: types.bool.isRequired,
  toggleAnnotationListVisibility: types.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAnnotationListVisible: uiAnnotationIsAnnotationListVisibleSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleAnnotationListVisibility: annotationsSetAnnotationListVisibilityAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableViewerTab);
