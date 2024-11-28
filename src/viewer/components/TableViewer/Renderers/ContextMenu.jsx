/* eslint-disable react/prop-types */
import React from "react";
import types from "prop-types";
import { ContextMenuTargetLegacy, Menu, MenuItem } from "@blueprintjs/core";

const ContextMenu = ContextMenuTargetLegacy(
  class extends React.Component {
    renderContextMenu() {
      const { onAddAnnotation, onDeleteAnnotation, disabled } = this.props;

      return (
        <Menu>
          <MenuItem
            disabled={disabled}
            icon="plus"
            text="Add annotation"
            onClick={onAddAnnotation}
          />
          <MenuItem
            disabled={disabled}
            icon="minus"
            text="Delete annotation"
            onClick={onDeleteAnnotation}
          />
        </Menu>
      );
    }

    render() {
      const { children } = this.props;

      return <div>{children}</div>;
    }
  }
);

ContextMenu.propTypes = {
  disabled: types.bool,
};

ContextMenu.defaultProps = {
  disabled: false,
};

export { ContextMenu };
