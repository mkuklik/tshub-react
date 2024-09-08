/* eslint-disable react/prop-types */
import * as React from 'react';
import styled from 'styled-components';
import { Button } from '@blueprintjs/core';

const NameCellRenderer = ({ data, value, context }) => {
  const { collection, onAddTimeseries, space } = context;

  const handleAddButtonClick = React.useCallback(() => {
    onAddTimeseries(data, collection, space);
  });

  return (
    <NameCellRenderer.Container>
      {value}

      <NameCellRenderer.AddButton
        minimal
        icon="small-plus"
        onClick={handleAddButtonClick}
      />
    </NameCellRenderer.Container>
  );
};

NameCellRenderer.Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

NameCellRenderer.AddButton = styled(Button)`
  && {
    min-width: 16px;
    min-height: 16px;
    padding: 0;
  }
`;

export {
  // eslint-disable-next-line import/prefer-default-export
  NameCellRenderer,
};
