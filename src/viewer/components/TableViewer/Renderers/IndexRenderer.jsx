import React from 'react';
import types from 'prop-types';
// import moment from 'moment';
import Moment from 'react-moment';
import styled from 'styled-components';
import { isNil, path, flatten } from 'ramda';
import { IndexToTargetsByCollIdType } from '../../../types/Annotations';
import { AnnotationTarget } from '../AnnotationTarget/AnnotationTarget';
import { ContextMenu } from './ContextMenu';
import { CollectionType } from '../../../types/Collections';

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

const IndexRenderer = (props) => {
  const {
    data,
    context: {
      freq,
      dateFormat,
      collections,
      disableAnnotations,
      indexToTargetsByCollId,
      isAnnotationsVisible,
      onAddAnnotationRequest,
      onDeleteAnnotationRequest,
    },
  } = props;
  // const date = moment(data.index).format(dateFormat);

  if (disableAnnotations) {
    return (
      <Container>
        <Moment
          date={data.index}
          tz="Etc/Utc"
          format={dateFormat}
        />
      </Container>
    );
  }

  const indexTargetsRender = flatten(collections.map((x) => x.collId).map((collId) => {
    const arr = path([collId, String(data.index)], indexToTargetsByCollId);
    if (isNil(arr)) return [];
    return arr.filter((target) => target.tsid === undefined);
  }));

  const shouldRenderAnnotations = isAnnotationsVisible && indexTargetsRender.length > 0;

  const handleAddAnnotationRequest = React.useCallback(() => {
    onAddAnnotationRequest({
      index: data.index,
      freq,
    });
  }, [onAddAnnotationRequest]);

  const onDeleteAnnotation = React.useCallback(() => {
    onDeleteAnnotationRequest({
      index: data.index,
      freq,
    });
  });

  const disabled = isNil(collections) || (collections.length === 0);

  return (
    <ContextMenu
      disabled={disabled}
      onAddAnnotation={handleAddAnnotationRequest}
      onDeleteAnnotation={onDeleteAnnotation}
    >
      <Container>
        <Moment
          date={data.index}
          tz="Etc/Utc"
          format={dateFormat}
        />

        {shouldRenderAnnotations && indexTargetsRender.map((target) => (
          <AnnotationTarget
            key={target.annotation.aid}
            symbol={target.annotation.symbol}
            text={target.annotation.text}
          />
        ))}
      </Container>
    </ContextMenu>
  );
};

IndexRenderer.propTypes = {
  data: types.shape({
    index: types.number.isRequired,
  }).isRequired,
  context: types.shape({
    freq: types.string,
    dateFormat: types.string.isRequired,
    collections: types.arrayOf(CollectionType),
    disableAnnotations: types.bool.isRequired,
    indexToTargetsByCollId:  IndexToTargetsByCollIdType.isRequired,
    isAnnotationsVisible: types.bool,
    onAddAnnotationRequest: types.func.isRequired,
    onDeleteAnnotationRequest: types.func.isRequired,
  }).isRequired,
};

export default IndexRenderer;
