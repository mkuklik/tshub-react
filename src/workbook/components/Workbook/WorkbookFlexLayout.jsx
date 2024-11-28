import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import types from "prop-types";
import styled from "styled-components";
import FlexLayout, { Layout, Actions } from "flexlayout-react";
import { isNil } from "ramda";
import { Icon, Spinner } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import FlexView from "react-flexview";
import {
  GRAPH_TABSET,
  MAIN_LAYOUT,
  isNodeGraphTab,
  nodeIdToGid,
  TABLE_COMP,
  GRAPH_OPTIONS_COMP,
  SERIES_OPTIONS_COMP,
  GRAPH_SERIES_LIST_COMP,
  GRAPH,
  ANALYTICS_FLEXLAYOUT,
  TIMESERIES_BROWSER_FLEXLAYOUT,
  FRED_BROWSER_FLEXLAYOUT,
  GRAPH_EXPORT_COMP,
  UPLOAD_COMP,
  SERIESINFO_COMP,
} from "../../layouts/definitions";
import { flexLayoutModelSelector } from "../../selectors/workbookSelectors";
import {
  onModelChangeAction,
  closeGraphTabAction,
  onActionAction,
  workbookAddNewGraphTabAction,
} from "../../action/workbookActions";
import { focusOnGraphAction } from "../../../viewer/actions/graphActions";
import AnalyticsFlexLayout from "./AnalyticsFlexLayout";
import TimeseriesBrowserFlexLayout from "./TimeseriesBrowserFlexLayout";
import FredBrowserFlexLayout from "./FredBrowserFlexLayout";
import GraphViewer from "../../../viewer/components/graph/GraphViewer";
import { GraphContainer } from "../../../viewer/components/graph/Graph.Component";
import GraphOptions from "../GraphOptions/GraphOptions";
import SeriesOptions from "../SeriesOptions/SeriesOptions";
import SeriesList from "../SeriesList/SeriesList";
import ExportOptions from "../ExportOptions/ExportOptions";
import UploadTab from "../UploadTab/UploadTab";
import TableViewerTab from "../TableViewerTab";
import SeriesInfoTab from "../SeriesInfoTab/SeriesInfoTab";

const ToolbarNewGraphButton = (props) => (
  <Icon
    style={{ marginRight: "10px", verticalAlign: "initial" }}
    icon="chart"
    iconSize={12}
    color="#9B9D9E"
    onClick={props.handleAdd}
  />
);

const StyledToolbarNewGraphButton = styled(ToolbarNewGraphButton)`
  margin-right: 20px;
`;

const TableViewerContainer = styled.div`
  height: 100%;
  width: 100%;
  // padding: 20px;
  // height: 600px;
`;

class WorkbookFlexLayout extends React.PureComponent {
  factory = (node) => {
    // const { freq } = this.props;
    const component = node.getComponent();
    // const config = node.getConfig();
    // const nodeId = node.getId();
    if (component === ANALYTICS_FLEXLAYOUT) {
      return <AnalyticsFlexLayout model={node.getConfig().model} />;
    }
    if (component === TIMESERIES_BROWSER_FLEXLAYOUT) {
      return <TimeseriesBrowserFlexLayout model={node.getConfig().model} />;
    }
    if (component === FRED_BROWSER_FLEXLAYOUT) {
      return <FredBrowserFlexLayout model={node.getConfig().model} />;
    }
    if (component === UPLOAD_COMP) {
      return <UploadTab />;
    }
    if (component === SERIESINFO_COMP) {
      return <SeriesInfoTab />;
    }
    if (component === GRAPH) {
      return (
        <GraphContainer>
          <GraphViewer gid={nodeIdToGid(node.getId())} />
        </GraphContainer>
      );
    }
    if (component === TABLE_COMP) {
      return (
        <TableViewerContainer>
          <TableViewerTab />
        </TableViewerContainer>
        // <TableViewerContainer>
        //   <TableViewer />
        // </TableViewerContainer>
      );
    }
    if (component === GRAPH_OPTIONS_COMP) {
      return <GraphOptions />;
    }
    if (component === SERIES_OPTIONS_COMP) {
      return <SeriesOptions />;
    }
    if (component === GRAPH_EXPORT_COMP) {
      return <ExportOptions />;
    }
    if (component === GRAPH_SERIES_LIST_COMP) {
      return <SeriesList />;
    }
    console.log("Wrong layout selected", component);
    return <h1>Something went wrong</h1>;
  };

  handleOnModelChange = (model) => {
    const { onModelChange } = this.props;
    onModelChange(MAIN_LAYOUT, model);
  };

  handleOnAction = (action) => {
    const { closeGraphTab, focusOnGraph, onAction } = this.props;
    const { node } = action.data;

    if (action.type === Actions.DELETE_TAB && isNodeGraphTab(node)) {
      closeGraphTab(node);
    } else if (action.type === Actions.SELECT_TAB) {
      // const { tabNode } = action.data;
      if (!isNil(node) && isNodeGraphTab(node)) {
        focusOnGraph(nodeIdToGid(node));
      }
    }
    onAction(MAIN_LAYOUT, action);
    return action;
  };

  onRenderTabSet = (node, renderValues) => {
    if (node.getId().startsWith(GRAPH_TABSET)) {
      renderValues.buttons.push(
        <div data-tut="reactour__newgraph_button2">
          <StyledToolbarNewGraphButton
            key={node.getId()}
            handleAdd={() => this.props.workbookAddNewGraphTab(node.getId())}
          />
        </div>
      );
    }
  };

  render() {
    const { flexLayoutModel } = this.props;

    if (isNil(flexLayoutModel)) {
      return (
        // null; // todo spinner
        <FlexView
          hAlignContent="center"
          vAlignContent="center"
          height="100%"
          width="100%"
          style={{ zIndex: 100, position: "absolute" }}
        >
          <Spinner />
        </FlexView>
      );
    }

    return (
      <Layout
        model={flexLayoutModel}
        factory={this.factory}
        onModelChange={this.handleOnModelChange}
        onRenderTabSet={this.onRenderTabSet}
        onAction={this.handleOnAction}
      />
    );
  }
}

WorkbookFlexLayout.defaultProps = {
  flexLayoutModel: undefined,
};

WorkbookFlexLayout.propTypes = {
  flexLayoutModel: types.object,
  workbookAddNewGraphTab: types.func.isRequired,
  onAction: types.func.isRequired,
  onModelChange: types.func.isRequired,
  closeGraphTab: types.func.isRequired,
  focusOnGraph: types.func.isRequired,
};

const mapStateToProps = (state) => ({
  flexLayoutModel: flexLayoutModelSelector(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      workbookAddNewGraphTab: workbookAddNewGraphTabAction,
      onModelChange: onModelChangeAction,
      onAction: onActionAction,
      closeGraphTab: closeGraphTabAction,
      focusOnGraph: focusOnGraphAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(WorkbookFlexLayout);
