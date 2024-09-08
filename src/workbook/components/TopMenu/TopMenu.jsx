import React from 'react';
import styled from 'styled-components';
import { NavbarDivider } from '@blueprintjs/core';
import LayoutMenuButton from './LayoutMenuButton';
import GraphRandomSeriesButton from '../../../viewer/components/graph/GraphRandomSeriesButton';
import GraphCloneSeriesButton from '../../../viewer/components/graph/GraphCloneSeriesButton';
import AddExprSeriesToGraphMenuButton from './AddExprSeriesToGraphMenuButton';
import NavigatorToggle from './NavigatorToggle';
import UnaryFunctionMenuButton from './UnaryFunctionMenuButton';
import TrendMenuButton from './TrendMenuButton';
import { NavbarBase, NavbarGroupBase } from '../SeriesList/common';
import GraphRealtimeRefreshButton from './GraphRealtimeRefreshButton';
import SaveButton from './SaveButton';
import ResetButton from './ResetButton';
import LoadButton from './LoadButton';
import RealtimePopover from './RealtimePopover';
import GraphRangeSelectorPopover from './GraphRangeSelectorPopover';
import NewGraphButton from './NewGraphButton';
import BinaryFunctionMenuButton from './BinaryFunctionMenuButton';
import DropdownSeriesSelector from '../SeriesOptions/DropdownSeriesSelector';
import PrintButton from './PrintButton';
import LegendToggle from './LegendToggle';
import AnalyticsButton from './AnalyticsButton';
import RemoveSeriesButton from './RemoveSeriesButton';
import ToggleSeriesVisibilityButton from './ToggleSeriesVisibilityButton';
import YAxisMenuButton from './YAxisButton';

const StyledNavbar = styled(NavbarBase)`
  height: 30px;
  width: 100%;
  padding-left: 0px;
  padding-right: 0px;
`;

const SyledNavbarGroup = styled(NavbarGroupBase)`
  height: 30px
`;

const TopMenuBase = (props) => (
  <StyledNavbar className={props.className}>
    <SyledNavbarGroup>


      <SaveButton />
      <PrintButton />

      <NavbarDivider />

      <div data-tut="reactour__newgraph_button">
        <NewGraphButton />
      </div>
      <NavigatorToggle />
      <LegendToggle />
      <GraphRangeSelectorPopover />

      <NavbarDivider />

      <div data-tut="reactour__realtime">
        <GraphRealtimeRefreshButton />
        <RealtimePopover />
      </div>
      <NavbarDivider />

      <div data-tut="reactour__addexprseries_button">
        <AddExprSeriesToGraphMenuButton />
      </div>

      <NavbarDivider />

      <div data-tut="reactour__selectseries">
        <DropdownSeriesSelector
          label={null}
          inline={false}
          trim={10}
        />
      </div>
      <div data-tut="reactour__visibility_button">
        <ToggleSeriesVisibilityButton />
        <RemoveSeriesButton />
        <YAxisMenuButton />
      </div>

      <NavbarDivider />
      <div data-tut="reactour__modifyseries">
        <UnaryFunctionMenuButton />
        <BinaryFunctionMenuButton />
        <TrendMenuButton />
        <AnalyticsButton />
      </div>
      <NavbarDivider />
      <div data-tut="reactour__cloneseries">
        <GraphCloneSeriesButton />
      </div>
      {(process.env.NODE_ENV !== 'production') && (
      <>
        <NavbarDivider />
        <GraphRandomSeriesButton />
        <ResetButton />
        <LoadButton />
      </>
      )}

    </SyledNavbarGroup>

    <SyledNavbarGroup align="right">
      <div data-tut="reactour__layout_button">
        <LayoutMenuButton />
      </div>
    </SyledNavbarGroup>
  </StyledNavbar>
);

const TopMenu = styled(TopMenuBase)`
  // width: 100%
  // display: flex;
  // flex-wrap: wrap;
`;

export default TopMenu;
