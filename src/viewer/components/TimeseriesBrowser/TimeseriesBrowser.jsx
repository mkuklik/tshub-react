import * as React from "react";
import styled from "styled-components";

import { SpaceBrowser as SpaceBrowserBase } from "./SpaceBrowser/SpaceBrowser.Container";
import { TimeseriesTable as TimeseriesTableBase } from "./TimeseriesTable/TimeseriesTable.Container";

import { PanelStyles } from "./TimeseriesBrowser.Components";
import { AddToGraphButton } from './AddToGraphButton';

const SpaceBrowser = styled(SpaceBrowserBase)`
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

const TimeseriesBrowser = () => {
  return (
    <>
      <SpaceBrowser />
      <TimeseriesTable />
      <AddToGraphButton />
    </>
  );
};

// eslint-disable-next-line import/prefer-default-export
export { TimeseriesBrowser };
