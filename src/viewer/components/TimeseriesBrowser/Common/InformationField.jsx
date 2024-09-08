import * as React from 'react';
import types from 'prop-types';
import styled from 'styled-components';
import { isEmpty, isNil } from 'ramda';
import { Classes } from '@blueprintjs/core';

const Container = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.p.attrs({
  className: Classes.TEXT_MUTED,
})`
  margin-bottom: 5px;
`;

const Value = styled.p`
  font-weight: 500;
`;

const InformationField = ({ label, value, noValueText }) => (
  <Container>
    <Label>{label}</Label>

    <Value>
      {value || noValueText}
    </Value>
  </Container>
);

InformationField.propTypes = {
  label: types.string.isRequired,
  value: types.node,
  noValueText: types.string,
};

export { InformationField };
