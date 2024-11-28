import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import types from "prop-types";
import styled from "styled-components";
import { isNil, find, propEq, path } from "ramda";
import { MenuItem, Button } from "@blueprintjs/core";
import { Select as BlueSelect } from "@blueprintjs/select";
import _ from "lodash";
import ColorIndicator from "../SeriesList/ColorIndicator";
import {
  currentGraphSelectedSeriesSelector,
  currentGraphGidSelector,
  currentGraphSeriesDefSelector,
} from "../../../viewer/selectors/graph";
import { seriesDefListSelector } from "../../../viewer/selectors/series";
import {
  updateSeriesPropsAction,
  selectSeriesAction,
} from "../../../viewer/actions/graphActions";

const ColorNameContainer = styled.div`
  // white-space: nowrap;
  // overflow: hidden;
  // text-overflow: ellipsis;
`;

class DropdownSeriesSelector extends React.PureComponent {
  handleChange = (wsid) => {
    const { gid, selectSeries } = this.props;

    selectSeries({ gid, wsid, clear: true });
  };

  render() {
    const { allGraphSeriesDef, disabled, allSeries, selected, trim } =
      this.props;
    const options = allGraphSeriesDef.map((x) => x.wsid);
    let value;
    let buttonText = "(No selection)";
    const isDisabled = disabled || allGraphSeriesDef.length === 0;

    if (selected.length === 1) {
      value = selected[0];
      const name = !isNil(allSeries[value].name)
        ? allSeries[value].name // .slice(0, 10)
        : null;
      const nameTrimed =
        _.isNumber(trim) && !isNil(name) ? name.slice(0, trim) : name;
      buttonText = (
        <div>
          <ColorIndicator
            color={path(
              ["color"],
              find((x) => x.wsid === value, allGraphSeriesDef)
            )}
          />
          <span>{nameTrimed}</span>
        </div>
      );
    } else if (selected.length > 1) {
      buttonText = "(...)";
    }
    return (
      <BlueSelect
        activeItem={value}
        disabled={isDisabled}
        filterable={false}
        items={options}
        onItemSelect={(item) => this.handleChange(item)}
        itemRenderer={(wsid, { handleClick, modifiers }) => {
          const color = path(
            ["color"],
            find((x) => x.wsid === wsid, allGraphSeriesDef)
          );
          const name = isNil(allSeries) ? null : allSeries[wsid].name || null;
          return (
            <MenuItem
              key={wsid}
              // label={lab}
              active={modifiers.active}
              onClick={handleClick}
              text={
                <ColorNameContainer>
                  <ColorIndicator color={color} /> <span>{name}</span>
                </ColorNameContainer>
              }
            />
          );
        }}
      >
        <Button icon="list" disabled={isDisabled} text={buttonText} />
      </BlueSelect>
    );
  }
}

DropdownSeriesSelector.defaultProps = {
  gid: undefined,
  disabled: false,
  trim: undefined,
};

DropdownSeriesSelector.propTypes = {
  gid: types.string,
  disabled: types.bool,
  trim: types.number,
  allGraphSeriesDef: types.array,
  allSeries: types.object.isRequired,
  selected: types.array,
  selectSeries: types.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const selected = currentGraphSelectedSeriesSelector(state) || [];
  const wsid = selected.length === 1 ? selected[0] : undefined;
  return {
    gid: currentGraphGidSelector(state),
    wsid,
    selected,
    allGraphSeriesDef: currentGraphSeriesDefSelector(state),
    allSeries: seriesDefListSelector(state),
    series: find(propEq("wsid", wsid))(currentGraphSeriesDefSelector(state)),
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updateSeriesProps: updateSeriesPropsAction,
      selectSeries: selectSeriesAction,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownSeriesSelector);
