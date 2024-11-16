import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Classes } from '@blueprintjs/core';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //min-height: 41px;
  height: 30px;
  padding: 5px 10px;
  border-bottom: 1px solid #a7b6c2;
  background-color: #f5f8fa;
`;

const Header = ({ children }) => (
  <Container>
    {children}
  </Container>
);

Header.Title = styled.div.attrs({
  className: Classes.TEXT_MUTED,
})`
  font-weight: 500;
  letter-spacing: 0.3px;
`;

Header.ActionButtons = styled.div``;

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Header };
