import styled from 'styled-components';
import { Button, TextArea, Intent } from '@blueprintjs/core';

const CreateButton = styled(Button).attrs({
  intent: Intent.PRIMARY,
})`
  && {
    min-width: 100px;
  }
`;

const AnnotationTextInput = styled(TextArea).attrs({
  fill: true,
  growVertically: true,
})`
  resize: vertical;
`;

const ActionButton = styled(Button)`
  && {
    min-width: 100px;
  }
`;

export {
  CreateButton,
  AnnotationTextInput,
  ActionButton
};
