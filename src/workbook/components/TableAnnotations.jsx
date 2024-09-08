import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import styled from 'styled-components';

import {
  Button, Alignment, NavbarDivider, Tooltip,
} from '@blueprintjs/core';
import { AnnotationList } from '../../viewer/components/TableViewer/AnnotationList/AnnotationList.Container';

import { annotationsSetAnnotationListVisibilityAction, annotationsToggleAnnotationsEditMode } from '../../viewer/actions/uiActions';
import { uiAnnotationIsAnnotationsEditModeEnabledSelector } from '../../viewer/selectors/annotations';
import { StyledNavbar, StyledNavbarGroup } from './SeriesList/common';


const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledAnnotationList = styled(AnnotationList)`
  padding: 10px;
  background: white;
  height: ${(props) => (props.height - 30)}px;
  width: ${(props) => (props.width)}px;
  overflow: scroll;
`;


class TableAnnotations extends React.PureComponent {
  render() {
    const {
      className, toggleAnnotationListVisibility, isAnnotationsEditModeEnabled, toggleAnnotationsEditMode,
      height, width,
    } = this.props;

    return (
      <Container className={className}>
        <StyledNavbar>
          <StyledNavbarGroup align={Alignment.LEFT}>
            <Button minimal icon="arrow-left" onClick={() => toggleAnnotationListVisibility(false)} />

            <NavbarDivider />

            <Tooltip content="Toggle edit mode">
              <Button
                icon="edit"
                active={isAnnotationsEditModeEnabled}
                onClick={toggleAnnotationsEditMode}
              />
            </Tooltip>
          </StyledNavbarGroup>
        </StyledNavbar>
        <StyledAnnotationList height={height} width={width} />
      </Container>
    );
  }
}


TableAnnotations.propTypes = {
  className: types.string,
  height: types.number,
  width: types.number,
  toggleAnnotationListVisibility: types.func.isRequired,
  isAnnotationsEditModeEnabled: types.bool,
};

TableAnnotations.defaultProps = {
  isAnnotationsEditModeEnabled: false,
  height: undefined,
  width: undefined,
};

const mapStateToProps = (state) => ({
  isAnnotationsEditModeEnabled: uiAnnotationIsAnnotationsEditModeEnabledSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleAnnotationListVisibility: annotationsSetAnnotationListVisibilityAction,
  toggleAnnotationsEditMode: annotationsToggleAnnotationsEditMode,

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableAnnotations);
