import { TABLE_SAVE, ISaveTableAction } from "../actions/tableActions";

export interface ITableState {
  rowData: any[];
  columnDefs: any[];
  freq: number | undefined;
  collections: any[];
  tries: number;
}

/*

tries: number of time table generation was triggered by the TableViewer component but failed. It is reset on every table save.
  this is to prevent infinite loop of retries to regenerate table when data is mising on rendering
  Note that freq is used to determine whether table was generated successfully
*/

const initialState: ITableState = {
  rowData: [],
  columnDefs: [],
  freq: undefined,
  collections: [],
  tries: 0,
};

export type ITableActions = ISaveTableAction;

const table = (
  state: ITableState = initialState,
  action: ITableActions
): ITableState => {
  switch (action.type) {
    case TABLE_SAVE: {
      const { columnDefs, rowData, freq, collections } = action.payload;
      return {
        ...state,
        columnDefs,
        rowData,
        freq,
        collections,
        tries: 0,
      };
    }
    default:
      return state;
  }
};

export default table;

// import {
//   TABLE_SAVE,
// } from '../actions/tableActions';

// /*

// tries: number of time table generation was triggered by the TableViewer component but failed. It is reset on every table save.
//   this is to prevent infinite loop of retries to regenerate table when data is mising on rendering
//   Note that freq is used to determine whether table was generated successfully
// */

// const initialState = {
//   rowData: [],
//   columnDefs: [],
//   freq: undefined,
//   collections: [],
//   tries: 0,
// };

// const table = (state = initialState, action) => {
//   switch (action.type) {
//     case TABLE_SAVE:
//     {
//       const {
//         columnDefs, rowData, freq, collections,
//       } = action.payload;
//       return {
//         ...state,
//         columnDefs,
//         rowData,
//         freq,
//         collections,
//         tries: 0,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export default table;
