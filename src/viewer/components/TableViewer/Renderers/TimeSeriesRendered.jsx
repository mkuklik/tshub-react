import React from 'react';
import types from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { isNil, path, isEmpty } from 'ramda';
import { AnnotationTarget } from '../AnnotationTarget/AnnotationTarget';

import { ContextMenu } from './ContextMenu';
import { AnnotationListType } from '../../../types/Annotations';

const Container = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 11px;
  font-size: 14px;
`;

const TimeSeriesRenderer = (props) => {
  const {
    displayName,
    annotationList,
    column,
    context: {
      disableAnnotations,
      isAnnotationsVisible,
      onAddAnnotationRequest,
      onDeleteAnnotationRequest,
    },
  } = props;
  const { colDef } = column;

  if (disableAnnotations) {
    return (
      <Container>
        {displayName}
      </Container>
    );
  }

  const timeSeriesAnnotation = [];
  annotationList.filter((annotation) => annotation.targets.forEach((value) => {
    if (value.freq === undefined
      && value.index === undefined
      && value.tsid === colDef.tsid) timeSeriesAnnotation.push(annotation);
  }));

  const shouldRenderAnnotations = isAnnotationsVisible && !isEmpty(timeSeriesAnnotation);

  const handleAddAnnotationRequest = React.useCallback(() => {
    const { tsid, collId } = colDef;
    onAddAnnotationRequest({
      collId,
      tsid,
    });
  }, [onAddAnnotationRequest]);

  const onDeleteAnnotation = React.useCallback(() => {
    const { tsid, collId } = colDef;
    onDeleteAnnotationRequest({
      collId,
      tsid,
    });
  });

  const disabled = isNil(colDef.tsid);
  return (
    <ContextMenu
      disabled={disabled}
      onAddAnnotation={handleAddAnnotationRequest}
      onDeleteAnnotation={onDeleteAnnotation}
    >
      <Container>
        {displayName}
        {shouldRenderAnnotations && timeSeriesAnnotation.map((target) => (
          <AnnotationTarget
            key={target.symbol}
            symbol={target.symbol}
            text={target.text}
          />
        ))}
      </Container>
    </ContextMenu>
  );
};

TimeSeriesRenderer.propTypes = {
  displayName: types.string.isRequired,
  annotationList: AnnotationListType.isRequired,
  context: types.shape({
    isAnnotationsVisible: types.bool,
    disableAnnotations: types.bool.isRequired,
    onAddAnnotationRequest: types.func.isRequired,
    onDeleteAnnotationRequest: types.func.isRequired,
  }).isRequired,
  column: types.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const collId = path(['column', 'colDef', 'collId'], ownProps);
  const annotationList = state.annotations.annotations[collId];
  return ({
    annotationList: (!isNil(annotationList)) ? annotationList : [],
  });
};

export default connect(mapStateToProps, null)(TimeSeriesRenderer);
