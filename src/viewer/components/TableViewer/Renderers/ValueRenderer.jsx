import React from 'react';
import types from 'prop-types';
import styled from 'styled-components';

import { isNil, isEmpty, path } from 'ramda';
import { IndexToTargetsByCollIdType } from '../../../types/Annotations';

import { AnnotationTarget } from '../AnnotationTarget/AnnotationTarget';
import { ContextMenu } from './ContextMenu';
import NumericDisplay from '../../../../workbook/analytics/components/common/NumericDisplay';

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

const ValueRenderer = (props) => {
  const {
    value,
    data,
    colDef,
    context: {
      freq,
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
        {value}
      </Container>
    );
  }

  const collId = path(['collId'], colDef);
  const tsid = path(['tsid'], colDef);
  const arr = path([collId, String(data.index)], indexToTargetsByCollId);
  const targets = !isNil(arr) ? arr : [];

  const ValueTargetsRender = !isEmpty(targets) && targets.filter(
    (target) => target.tsid !== undefined && colDef.tsid === target.tsid,
  );

  const shouldRenderAnnotations = isAnnotationsVisible && !isEmpty(targets);

  const handleAddAnnotationRequest = React.useCallback(() => {
    // const { tsid, collId } = colDef;
    onAddAnnotationRequest({
      collId,
      index: data.index,
      freq,
      tsid,
    });
  }, [onAddAnnotationRequest]);

  const onDeleteAnnotation = React.useCallback(() => {
    onDeleteAnnotationRequest({
      collId,
      index: data.index,
      freq,
      tsid: colDef.tsid,
    });
  });

  const disabled = isNil(colDef.tsid);

  // if (!isNil(colDef.tsid)) {
  return (
    <ContextMenu
      disabled={disabled}
      onAddAnnotation={handleAddAnnotationRequest}
      onDeleteAnnotation={onDeleteAnnotation}
    >
      <Container>
        <NumericDisplay value={value} />

        {shouldRenderAnnotations && ValueTargetsRender.map((target) => (
          <AnnotationTarget
            key={target.annotation.aid}
            symbol={target.annotation.symbol}
            text={target.annotation.text}
          />
        ))}
      </Container>
    </ContextMenu>
  );
  // }
  // return (
  //   <Container>
  //     {value}
  //   </Container>
  // );
};

ValueRenderer.defaultProps = {
};

ValueRenderer.propTypes = {
  value: types.number.isRequired,
  data: types.shape({
    index: types.number.isRequired,
  }).isRequired,
  colDef: types.shape({
    collId: types.string,
    tsid: types.string,
    colDef: types.string,
  }).isRequired,
  context: types.shape({
    freq: types.string,
    dateFormat: types.string.isRequired,
    disableAnnotations: types.bool.isRequired,
    indexToTargetsByCollId: IndexToTargetsByCollIdType.isRequired,
    isAnnotationsVisible: types.bool,
    onAddAnnotationRequest: types.func.isRequired,
    onDeleteAnnotationRequest: types.func.isRequired,
  }).isRequired,
};

export default ValueRenderer;
