import {
  TABLE_SAVE,
  TABLE_UPDATE,
  TABLE_DOWNLOAD,
} from './ActionTypes';

export const saveTableAction = ({ columnDefs, rowData, freq, collections } = {}) => ({
  type: TABLE_SAVE,
  payload: {
    columnDefs,
    rowData,
    freq,
    collections,
  },
});

export const updateTableAction = () => ({
  type: TABLE_UPDATE,
});

export const tableDownloadAction = () => ({
  type: TABLE_DOWNLOAD,
});
