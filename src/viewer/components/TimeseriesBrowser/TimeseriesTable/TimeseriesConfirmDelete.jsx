import React from "react";
import styled from "styled-components";
import types from "prop-types";
import {
  Dialog,
  Classes,
  Button,
  AnchorButton,
  Intent,
} from "@blueprintjs/core";
import { map } from "ramda";
import { TimeseriesType } from "../../../types/Timeseries";

const Footer = styled.div.attrs({
  className: Classes.DIALOG_FOOTER,
})`
  display: flex;
  justify-content: space-between;
`;

const ActionButton = styled(Button)`
  && {
    min-width: 100px;
  }
`;

const TimeseriesConfirmDelete = (
  { handleClose, handleConfirm, selectedTimeseries, visible } = {
    selectedTimeseries: [],
    visible: false,
  }
) => {
  const renderedTimeseries = map(
    (ts) => <li key={ts.tsid}>{ts.name}</li>,
    selectedTimeseries
  );
  return (
    <Dialog
      icon="warning-sign"
      onClose={handleClose}
      title="Delete Timeseries"
      intent="danger"
      autoFocus
      canEscapeKeyClose
      canOutsideClickClose
      enforceFocus
      usePortal
      isOpen={visible}
    >
      <div className={Classes.DIALOG_BODY}>
        <p>Are you sure you want to delete the following series?</p>
        <p>{renderedTimeseries}</p>
      </div>
      <Footer>
        <ActionButton intent="danger" onClick={handleConfirm}>
          Delete
        </ActionButton>

        <ActionButton onClick={handleClose}>Cancel</ActionButton>
      </Footer>
    </Dialog>
  );
};

TimeseriesConfirmDelete.propTypes = {
  visible: types.bool,
  handleClose: types.func.isRequired,
  handleConfirm: types.func.isRequired,
  selectedTimeseries: types.arrayOf(TimeseriesType),
};

export default TimeseriesConfirmDelete;
