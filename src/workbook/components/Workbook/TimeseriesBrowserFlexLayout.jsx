import React, { Component } from "react";
import types from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { Layout, Model } from "flexlayout-react";
import { isNil } from "ramda";
import { Spinner } from "@blueprintjs/core";
import FlexView from "react-flexview";
import { SpaceBrowser } from "../../../viewer/components/TimeseriesBrowser/SpaceBrowser/SpaceBrowser.Container";
import { AddToGraphButton } from "../../../viewer/components/TimeseriesBrowser/AddToGraphButton";
import { TimeseriesTable as TimeseriesTableBase } from "../../../viewer/components/TimeseriesBrowser/TimeseriesTable/TimeseriesTable.Container";
import {
  closeAnalyticsTabAction,
  saveTimeseriesBrowserModelAction,
  // onModelChangeAction,
  // onActionAction,
  openUploadAction,
} from "../../action/workbookActions";
import { TSB_COMP, TSB_TABLE_COMP } from "../../layouts/definitions";
import { timeseriesBrowserModelSelector } from "../../selectors/workbookSelectors";

// const TimeSeriesDiv = styled.div`
//   width: 100%;
//   height: 100%;
//   overflow-x: hidden;
//   overflow-y: scroll;
//   ::-webkit-scrollbar {
//     width: 0px;
//   }
//   position: relative;
// `;

// const AddToGraphButtonDiv = styled(AddToGraphButton)`
//   position: absolute;
//   bottom: 0px;
// `;

// const TimeseriesTable = styled(TimeseriesTableBase)`
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// `;

const TimeSeriesDiv = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: [main] auto [button] 40px;
  overflow-x: hidden;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const AddToGraphButtonDiv = styled(AddToGraphButton)`
  height: 50px;
`;

class TimeseriesBrowserFlexLayout extends Component {
  constructor(props) {
    super(props);
    if (isNil(props.timeseriesBrowserModel)) {
      const timeseriesBrowserModel = Model.fromJson(props.model);
      timeseriesBrowserModel.setOnAllowDrop(this.allowDrop);
      props.saveTimeseriesBrowserModel(timeseriesBrowserModel);
    }
  }

  allowDrop = (dragNode, dropInfo) => false;

  factory = (node) => {
    const { openUpload } = this.props;
    const component = node.getComponent();
    if (component === TSB_COMP) {
      return <SpaceBrowser showUploadButton openUpload={openUpload} />;
    }
    if (component === TSB_TABLE_COMP) {
      return (
        <TimeSeriesDiv>
          <TimeseriesTableBase openUpload={openUpload} />
          <AddToGraphButtonDiv />
        </TimeSeriesDiv>
      );
    }
    console.error("Wrong layout selected", component);
    return <h1>Something went wrong</h1>;
  };

  // handleOnAction = (action) => action

  // handleOnModelChange = (model) => {
  // }

  render() {
    const { timeseriesBrowserModel } = this.props;
    if (isNil(timeseriesBrowserModel)) {
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
      <Layout
        model={timeseriesBrowserModel}
        factory={this.factory}
        // onModelChange={this.handleOnModelChange}
        // onAction={this.handleOnAction}
      />
    );
  }
}

TimeseriesBrowserFlexLayout.defaultProps = {
  timeseriesBrowserModel: undefined,
};

TimeseriesBrowserFlexLayout.propTypes = {
  timeseriesBrowserModel: types.instanceOf(Model),
  // eslint-disable-next-line react/forbid-prop-types
  model: types.object.isRequired,
  saveTimeseriesBrowserModel: types.func.isRequired,
  // onModelChange: types.func.isRequired,
  // onAction: types.func.isRequired,
  openUpload: types.func.isRequired,
};

const mapStateToProps = (state) => ({
  timeseriesBrowserModel: timeseriesBrowserModelSelector(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      saveTimeseriesBrowserModel: saveTimeseriesBrowserModelAction,
      // onModelChange: onModelChangeAction,
      // onAction: onActionAction,
      closeAnalyticsTab: closeAnalyticsTabAction,
      openUpload: openUploadAction,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeseriesBrowserFlexLayout);
