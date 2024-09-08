import styled from 'styled-components';
import { Button, Classes } from '@blueprintjs/core';

const Footer = styled.div.attrs({
  className: Classes.DIALOG_FOOTER,
})`
  display: flex;
  justify-content: space-between;
`;

const ActionButton = styled(Button)`
  && {
    min-width: 100px;
  }
`;

export {
  Footer,
  ActionButton,
};
