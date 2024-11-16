import styled, { css } from 'styled-components';
import { Button, Intent } from '@blueprintjs/core';

const ContentContainer = styled.div`
  flex-basis: 100%;
  overflow: auto;
`;

const StyledAddToGraphButton = styled(Button).attrs({
  fill: true,
  large: true,
  intent: Intent.PRIMARY,
})`
  // margin-top: 20px;
`;

const PanelStyles = css`
  border: 1px solid #a7b6c2;
  border-radius: 3px;
  overflow: hidden;
`;

export {
  ContentContainer,
  StyledAddToGraphButton,
  PanelStyles,
};
