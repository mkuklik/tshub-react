import React from 'react';
import types from 'prop-types';
import styled from 'styled-components';
import { EditableText, Icon } from '@blueprintjs/core';

import {
  AnnotationType,
} from '../../../types/Annotations';

const Container = styled.div`
  display: flex;
`;

const Symbol = styled.div`
width: 40px;
margin-right: 9px;
`;

const Text = styled.div`
width: 40%;
`;

const CrossSection = styled.div`
width: 25px;
height: 25px;
box-sizing: border-box;
`;

const Annotation = ({
  annotation,
  isEditModeEnabled,
  onDelete,
  className,
  updateAnnotationText,
  saveStatusOfUpdatingAnnotation,
  statusOfUpdatingAnnotaion,
}) => {
  const handleDeleteButtonClick = React.useCallback(() => {
    onDelete(annotation);
  }, [annotation, onDelete]);
  const [text, setText] = React.useState(annotation.text);
  const [symbol, setSymbol] = React.useState(annotation.symbol);


  const handleAnnotationTextChange = (value) => {
    setText(value);
  };

  const handleAnnotationUpdateSymbol = (value) => {
    setSymbol(value);
  };

  const handleTextUpdateValue = () => {
    const { aid } = annotation;
    const { collId } = annotation;
    if (text !== annotation.text) updateAnnotationText({ toBeUpdateValue: { text }, aid, collId });
  };

  const handleSymbolUpdateValue = () => {
    const { aid } = annotation;
    const { collId } = annotation;
    if (symbol !== annotation.symbol) updateAnnotationText({ toBeUpdateValue: { symbol }, aid, collId });
  };

  React.useEffect(() => {
    if (statusOfUpdatingAnnotaion === 'error') {
      setSymbol(annotation.symbol);
      setText(annotation.text);
      saveStatusOfUpdatingAnnotation();
    }
  }, [statusOfUpdatingAnnotaion, setSymbol, setText]);

  return (
    <Container className={className}>
      {isEditModeEnabled && (
      <CrossSection>
        <Icon icon="cross" onClick={() => handleDeleteButtonClick()} />
      </CrossSection>
      )}
      <Symbol>
        {isEditModeEnabled ? (
          <EditableText
            multiline={false}
            value={symbol}
            onConfirm={handleSymbolUpdateValue}
            onChange={(value) => handleAnnotationUpdateSymbol(value)}
            confirmOnEnterKey
          />
        ) : `${symbol} )`}
      </Symbol>

      <Text>
        {isEditModeEnabled ? (
          <EditableText
            multiline
            minLines={1}
            maxLines={12}
            value={text}
            onConfirm={handleTextUpdateValue}
            onChange={(value) => handleAnnotationTextChange(value)}
            confirmOnEnterKey
            alwaysRenderInput={false}
          />
        ) : text}
      </Text>
    </Container>
  );
};

Annotation.propTypes = {
  annotation: AnnotationType.isRequired,
  isEditModeEnabled: types.bool,
  onDelete: types.func.isRequired,
  className: types.string,
  updateAnnotationText: types.func.isRequired,
  statusOfUpdatingAnnotaion: types.string.isRequired,
  saveStatusOfUpdatingAnnotation: types.func.isRequired,
};

Annotation.defaultProps = {
  isEditModeEnabled: false,
  className: '',
};

export { Annotation };
