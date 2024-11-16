import * as React from 'react';
import styled from 'styled-components';

import { CategoryBrowser as CategoryBrowserBase } from './CategoryBrowser/CategoryBrowser.Container';
import { TimeseriesTable as TimeseriesTableBase } from './TimeseriesTable/TimeseriesTable.Container';

import { PanelStyles } from './FredBrowser.Components';
import { AddToGraphButton } from './AddToGraphButton';

const CategoryBrowser = styled(CategoryBrowserBase)`
  flex-shrink: 0;
  height: 300px;

  ${PanelStyles}
`;

const TimeseriesTable = styled(TimeseriesTableBase)`
  flex-basis: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  ${PanelStyles}
`;

const FredBrowser = () => (
  <>
    <CategoryBrowser />
    <TimeseriesTable />
    <AddToGraphButton />
  </>
);

// eslint-disable-next-line import/prefer-default-export
export { FredBrowser };
