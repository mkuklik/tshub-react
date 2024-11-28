import React, { Component } from "react";
import types from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions, Layout, Model } from "flexlayout-react";
import { isNil, path } from "ramda";
import FlexView from "react-flexview";
import { Spinner, ResizeSensor } from "@blueprintjs/core";
import {
  saveAnalyticsModelAction,
  closeAnalyticsTabAction,
  onModelChangeAction,
  onActionAction,
} from "../../action/workbookActions";
import AnalyticsHome from "../../analytics/components/AnalyticsHome";
import AnalyticsWindow from "../../analytics/components/AnalyticsWindow";
import {
  ANALYTICS_FLEXLAYOUT,
  ANALYTICS_COMP,
  ANALYTICS_HOME_COMP,
  ANALYTICS_TAB_HOME,
  nodeIdToAyid,
  isNodeAnalyticsTab,
} from "../../layouts/definitions";
import { analyticsModelSelector } from "../../selectors/workbookSelectors";

class AnalyticsFlexLayout extends Component {
  constructor(props) {
    super(props);
    if (isNil(props.analyticsModel)) {
      const analyticsModel = Model.fromJson(props.model);
      analyticsModel.setOnAllowDrop(this.allowDrop);
      props.saveAnalyticsModel(analyticsModel);
    }
    this.state = { width: undefined, height: undefined };
  }

  allowDrop = (dragNode, dropInfo) => {
    const dropNode = dropInfo.node;
    // prevent for creating new tabset
    if (dragNode.getId() === ANALYTICS_TAB_HOME) return false;
    if (dropNode.getType() === "row") {
      return false;
    }
    return true;
  };

  handleResize = (entries) => {
    console.log(`entries: ${entries}`, entries);
    this.setState({
      width: path([0, "contentRect", "width"], entries),
      height: path([0, "contentRect", "height"], entries),
    });
  };

  factory = (node) => {
    const component = node.getComponent();
    if (component === ANALYTICS_HOME_COMP) {
      return (
        <AnalyticsHome width={this.state.width} height={this.state.height} />
      );
    }
    if (component === ANALYTICS_COMP) {
      return (
        // <ResizeSensor onResize={this.handleResize}>
        // <div style={{ width: this.props.width }} />
        <AnalyticsWindow
          ayid={nodeIdToAyid(node.getId())}
          width={this.state.width}
          height={this.state.height}
        />
        // </ResizeSensor>
      );
    }
    console.log("Wrong layout selected", component);
    return <h1>Something went wrong</h1>;
  };

  handleOnAction = (action) => {
    const { closeAnalyticsTab, onAction } = this.props;
    const { node } = action.data;
    if (
      action.type === Actions.DELETE_TAB &&
      !isNil(node) &&
      isNodeAnalyticsTab(node)
    ) {
      closeAnalyticsTab(node);
    }
    onAction(ANALYTICS_FLEXLAYOUT, action); // send to saga for further processing if required
    return action;
  };

  handleOnModelChange = (model) => {
    this.props.onModelChange(ANALYTICS_FLEXLAYOUT, model);
  };

  render() {
    const { analyticsModel } = this.props;
    if (isNil(analyticsModel)) {
      return (
        // null; // todo add spinner
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
      <ResizeSensor onResize={this.handleResize}>
        <Layout
          width={this.state.width}
          height={this.state.height}
          model={analyticsModel}
          factory={this.factory}
          onModelChange={this.handleOnModelChange}
          onAction={this.handleOnAction}
        />
      </ResizeSensor>
    );
  }
}

AnalyticsFlexLayout.defaultProps = {
  analyticsModel: undefined,
};

AnalyticsFlexLayout.propTypes = {
  analyticsModel: types.instanceOf(Model),
  // eslint-disable-next-line react/forbid-prop-types
  model: types.object.isRequired,
  saveAnalyticsModel: types.func.isRequired,
  closeAnalyticsTab: types.func.isRequired,
  onModelChange: types.func.isRequired,
  onAction: types.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  analyticsModel: analyticsModelSelector(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      saveAnalyticsModel: saveAnalyticsModelAction,
      closeAnalyticsTab: closeAnalyticsTabAction,
      onModelChange: onModelChangeAction,
      onAction: onActionAction,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnalyticsFlexLayout);
