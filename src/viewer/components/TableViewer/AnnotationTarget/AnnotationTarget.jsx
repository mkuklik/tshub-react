import React from 'react';
import types from 'prop-types';
import styled from 'styled-components';
import { Popover, Position } from '@blueprintjs/core';

const AnnotationLink = styled.button`
  padding: 5px;
  border: 0;
  background: transparent;
  text-decoration: underline;
  transform: translateY(-5px);
  cursor: pointer;
`;

const AnnotationContent = styled.div`
  padding: 20px;
  min-width: 200px;
  max-width: 300px;
`;

const AnnotationTarget = ({ symbol, text }) => (
  <Popover position={Position.BOTTOM}>
    <AnnotationLink>
      {symbol}
    </AnnotationLink>

    <AnnotationContent>
      {text}
    </AnnotationContent>
  </Popover>
);

AnnotationTarget.propTypes = {
  symbol: types.string.isRequired,
  text: types.string.isRequired,
};

export { AnnotationTarget };
