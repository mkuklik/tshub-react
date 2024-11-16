import styled from 'styled-components';
import { Spinner, Classes } from '@blueprintjs/core';

const Container = styled.div`
  /* TODO: customize this in parent component */
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CollectionNodeLabel = styled.span``;
CollectionNodeLabel.Empty = styled.span.attrs({
  className: Classes.TEXT_MUTED,
})``;
CollectionNodeLabel.Error = styled.span`
  color: #db3737;
`;

const RetryFetchCollectionsButton = styled.button`
  border: 0;
  color: #db3737;
  background-color: transparent;
  text-decoration: underline;
  cursor: pointer;
`;

const InformationContent = styled.div`
  min-width: 300px;
  max-width: 500px;
  padding: 20px;
`;

const SpaceLoadingIndicator = styled(Spinner)`
  .bp3-spinner-track {
    stroke: rgba(9, 32, 51, 0.2);
  }

  .bp3-spinner-head {
    stroke: white;
  }
`;

export {
  Container,
  CollectionNodeLabel,
  InformationContent,
  SpaceLoadingIndicator,
  RetryFetchCollectionsButton,
};
