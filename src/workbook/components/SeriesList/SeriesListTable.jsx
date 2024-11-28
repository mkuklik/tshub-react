import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import types from "prop-types";
import { isNil, path, filter, map } from "ramda";
// import { AgGridReact } from 'ag-grid-react';
import { AgGridReact } from "@ag-grid-community/react";
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import styled from "styled-components";
import { Button } from "@blueprintjs/core";
import { StyledNavbarGroup, NavbarBase } from "./common";

import { updateSeriesAction } from "../../../viewer/actions/seriesActions";
import {
  selectSeriesAction,
  deselectSeriesAction,
  removeSeriesAction,
  reorderSeriesAction,
  updateSeriesPropsAction,
} from "../../../viewer/actions/graphActions";
import {
  GraphType,
  SeriesDefinitionType,
  ErrorType,
} from "../../../viewer/types/Graph";
import { SeriesType } from "../../../viewer/types/Series";
import {
  currentGraphGidSelector,
  currentGraphSelector,
  currentGraphSeriesDefSelector,
  currentGraphErrorsSelector,
} from "../../../viewer/selectors/graph";
import { seriesDefListSelector } from "../../../viewer/selectors/series";
import {
  openFuncEditorAction,
  closeFuncEditorAction,
} from "../../action/uiActions";

import ControlsCellRenderer from "./ControlsCellRenderer";
import IndicatorCellRenderer from "./IndicatorCellRenderer";
import NameCellRenderer from "./NameCellRenderer";
import DrapDropToGraphWrapper from "../DrapDropToGraphWrapper";

import "./SeriesListTable.css";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableContainer = styled(DrapDropToGraphWrapper)`
  order: 2
  flex-basis: 100%;
  overflow: auto;
  margin-top: 30px; // to accomodate top toolbar
  height: 100%;
  // background-color: transparent;

  .ag-root {
    border: 0;
  }
`;

export const StyledNavbar = styled(NavbarBase)`
  order: 1;
  position: absolute;
  z-index: 2;
  height: 30px;
`;

class SeriesListTable extends React.Component {
  columnDefs = [
    {
      headerName: "",
      field: "drag",
      rowDrag: true,
      width: 60,
      rowDragText: (params) => params.rowNode.data.wsid,
      checkboxSelection: true,
    },
    {
      field: "indicator",
      width: 90,
      headerName: "",
      cellRenderer: "indicatorCellRenderer",
    },
    {
      field: "name",
      flex: 1,
      headerName: "",
      cellRenderer: "nameCellRenderer",
    },
    {
      field: "controls",
      headerName: "",
      width: 90,
      cellRenderer: "controlsCellRenderer",
    },
  ];

  defaultColDef = {
    sortable: false,
    filter: false,
  };

  constructor(props) {
    super(props);
    this.gridApi = undefined;
    this.gridColumnApi = undefined;
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { seriesDef, graphErrors, selected } = this.props;
    if (
      nextProps.seriesDef !== seriesDef ||
      (nextProps.selected.length === selected &&
        !nextProps.selected.every((e) => selected.includes(e))) ||
      nextProps.graphErrors !== graphErrors
    ) {
      // console.log('update SeriesList');
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    const { selected } = this.props;
    if (!isNil(this.gridApi)) {
      // this.gridApi.deselectAll();
      this.gridApi.forEachNode((node) => {
        const isIncluded = selected.includes(node.id);
        if (node.isSelected() !== isIncluded) {
          node.setSelected(isIncluded);
        }
      });
    }
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  handleRemove = (wsid) => () => {
    const { removeSeries, gid } = this.props;
    removeSeries({ gid, wsid });
  };

  onRowClicked = (event) => {
    const { selected } = this.props;
    if (selected.includes(event.data.wsid)) {
      // deselectSeries({ gid, wsid: event.data.wsid }); // deselect is emited by onRowSelected
      const rowNode = this.gridApi.getRowNode(event.data.wsid);
      rowNode.setSelected(false, true); // this will trigger onRowSelected, which emits deselect
    }
  };

  onRowSelected = (event) => {
    const { selected } = this.props;
    const { wsid } = event.data;
    const { gid, selectSeries, deselectSeries } = event.context;
    if (event.node.selected && !selected.includes(wsid)) {
      selectSeries({ gid, wsid });
    } else if (!event.node.selected && selected.includes(wsid)) {
      deselectSeries({ gid, wsid });
    } else {
      //
    }
  };

  // onSelectionChanged = (event) => {
  //   console.log(event);
  // const tmp = this.gridApi.getSelectedRows();
  // console.log('tmp', tmp);
  // const x = this.props.selected
  // console.log('x', x);
  // if (!rowNode.selected) {
  //   rowNode.setSelected(false, true); // this will trigger onRowSelected, which emits deselect
  // }
  // const { selected } = this.props;
  // const { wsid } = event.data;
  // const { gid, selectSeries, deselectSeries } = event.context;
  // const tmp = event.node.isSelected();
  // if (event.node.selected && !selected.includes(wsid)) {
  //   selectSeries({ gid, wsid });
  // } else {
  //   deselectSeries({ gid, wsid });
  // }
  // const { selected } = this.props;
  // const { gid, selectSeries, deselectSeries } = event.context;
  // const gridSelected = this.gridApi.getSelectedRows();
  // const toSelect = gridSelected.filter((x) => !selected.includes(x));
  // toSelect.forEach((wsid) => selectSeries({ gid, wsid }));
  // const toDeselect = selected.filter((x) => !gridSelected.includes(x));
  // toDeselect.forEach((wsid) => deselectSeries({ gid, wsid }));
  // }

  onRowDragEnd = (event) => {
    const { gid, reorderSeries } = this.props;
    const wsid = path(["node", "data", "wsid"], event);
    const wsidOver = path(["overNode", "data", "wsid"], event);
    const pos =
      event.overIndex === -1
        ? event.api.rowModel.rowsToDisplay.length - 1
        : event.overIndex;
    if (wsidOver !== wsid) reorderSeries({ gid, wsid, pos });
  };

  onCellDoubleClicked = (event) => {
    console.log("onCellDoubleClicked", event);
  };

  handleOpenNewSeriesEditor = () => this.props.openFuncEditor(undefined);

  handleSuppressKeyboardEvent = () => true;

  render() {
    const {
      className,
      graph,
      seriesDef,
      gid,
      allSeriesDef,
      graphErrors,
      updateSeriesProps,
      removeSeries,
      updateSeries,
      selectSeries,
      deselectSeries,
      reorderSeries,
      openFuncEditor,
      closeFuncEditor,
    } = this.props;

    let rowData = !isNil(graph) ? seriesDef : [];
    rowData = map(
      (x) => ({ ...x, errors: filter((e) => e.wsid === x.wsid, graphErrors) }),
      rowData
    );
    //     console.log('rowData', rowData);
    return (
      <ContentContainer className={className}>
        <StyledNavbar>
          <StyledNavbarGroup>
            <Button
              minimal
              icon="series-add"
              disabled={isNil(gid)}
              onClick={this.handleOpenNewSeriesEditor}
            />
          </StyledNavbarGroup>
        </StyledNavbar>

        <TableContainer className="ag-theme-balham">
          <AgGridReact
            rowData={rowData}
            onGridReady={this.onGridReady}
            modules={AllCommunityModules}
            columnDefs={this.columnDefs}
            headerHeight={0} // hide header
            rowSelection="multiple"
            suppressRowClickSelection
            suppressDragLeaveHidesColumns
            suppressKeyboardEvent={this.handleSuppressKeyboardEvent}
            animateRows
            frameworkComponents={{
              controlsCellRenderer: ControlsCellRenderer,
              indicatorCellRenderer: IndicatorCellRenderer,
              nameCellRenderer: NameCellRenderer,
            }}
            context={{
              handleRemove: this.handleRemove,
              removeSeries,
              reorderSeries,
              updateSeriesProps,
              updateSeries,
              selectSeries,
              deselectSeries,
              openFuncEditor,
              closeFuncEditor,
              gid,
              allSeriesDef,
              graphErrors,
            }}
            onRowDragMove={this.onRowDragMove}
            // deltaRowDataMode // this prevent redraw of cells on change of deeper series properties like visible
            // return id required for delta updates
            getRowNodeId={(data) => data.wsid}
            onRowDragEnd={this.onRowDragEnd}
            onRowSelected={this.onRowSelected}
            // onSelectionChanged={this.onSelectionChanged}
            onCellDoubleClicked={this.onCellDoubleClicked}
            rowClassRules={{
              "rag-red": (params) =>
                params.data.errors && params.data.errors.length > 0,
            }}
            // immutableData={true}
          />
        </TableContainer>
      </ContentContainer>
    );
  }
}

SeriesListTable.defaultProps = {
  gid: undefined,
  graph: undefined,
  selected: [],
};

SeriesListTable.propTypes = {
  gid: types.string,
  graph: GraphType,
  seriesDef: types.arrayOf(SeriesDefinitionType).isRequired,
  selected: types.arrayOf(types.string),
  allSeriesDef: types.objectOf(SeriesType).isRequired,
  graphErrors: types.arrayOf(ErrorType).isRequired,
  updateSeriesProps: types.func.isRequired,
  updateSeries: types.func.isRequired,
  selectSeries: types.func.isRequired,
  deselectSeries: types.func.isRequired,
  removeSeries: types.func.isRequired,
  reorderSeries: types.func.isRequired,
  openFuncEditor: types.func.isRequired,
  closeFuncEditor: types.func.isRequired,
};

const mapStateToProps = (state) => {
  const graph = currentGraphSelector(state);
  const selected = isNil(graph) ? [] : graph.ui.selected;
  return {
    gid: currentGraphGidSelector(state),
    seriesDef: currentGraphSeriesDefSelector(state),
    allSeriesDef: seriesDefListSelector(state),
    graphErrors: currentGraphErrorsSelector(state),
    graph,
    selected,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      removeSeries: removeSeriesAction,
      reorderSeries: reorderSeriesAction,
      updateSeriesProps: updateSeriesPropsAction,
      updateSeries: updateSeriesAction,
      selectSeries: selectSeriesAction,
      deselectSeries: deselectSeriesAction,
      openFuncEditor: openFuncEditorAction,
      closeFuncEditor: closeFuncEditorAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SeriesListTable);
// , null, { forwardRef: true }
