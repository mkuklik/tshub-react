import {
  TABLE_SAVE,
  TABLE_UPDATE,
  TABLE_DOWNLOAD,
} from './ActionTypes';


export interface ISaveTableAction {
  type: typeof TABLE_SAVE;
  payload: {
    columnDefs: any;
    rowData: any;
    freq: any;
    collections: any;
  };
}

export const saveTableAction = ({ columnDefs, rowData, freq, collections }: {
  columnDefs?: any, rowData?: any, freq?: any, collections?: any
} = {}): ISaveTableAction => ({
  type: TABLE_SAVE,
  payload: {
    columnDefs,
    rowData,
    freq,
    collections,
  },
});

export interface IUpdateTableAction {
  type: typeof TABLE_UPDATE;
}

export const updateTableAction = (): IUpdateTableAction => ({
  type: TABLE_UPDATE,
});

export interface ITableDownloadAction {
  type: typeof TABLE_DOWNLOAD;
}

export const tableDownloadAction = (): ITableDownloadAction => ({
  type: TABLE_DOWNLOAD,
});

// export const saveTableAction = ({ columnDefs, rowData, freq, collections } = {}) => ({
//   type: TABLE_SAVE,
//   payload: {
//     columnDefs,
//     rowData,
//     freq,
//     collections,
//   },
// });

// export const updateTableAction = () => ({
//   type: TABLE_UPDATE,
// });

// export const tableDownloadAction = () => ({
//   type: TABLE_DOWNLOAD,
// });
