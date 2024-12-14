import { NameCellRenderer } from "./TimeseriesTable.Renderers";

const ColumnDefinitions = [
  {
    valueGetter: "'Drag'",
    dndSource: true,
    // dndSourceOnRowDrag: onRowDrag,
    width: 40,
    suppressMovable: true,
    suppressSizeToFit: true,
    // rowDragText: (params) => { // doesn't work with dnd,
    //   console.log('rowDragText', params);
    //   return params.rowNode.data.name;
    // },
  },
  {
    headerName: "Title",
    field: "title",
    suppressMovable: true,
    flex: 1,
    resizable: true,
    minWidth: 100,
  },

  {
    headerName: "Freq",
    field: "freq",
    suppressMovable: true,
    maxWidth: 60,
  },
  {
    headerName: "DType",
    field: "dtype",
    suppressMovable: true,
    maxWidth: 70,
  },
  {
    headerName: "Name",
    field: "id",
    cellRenderer: "nameCellRenderer",
    suppressMovable: true,
  },
];

const FrameworkComponents = {
  nameCellRenderer: NameCellRenderer,
};

// function onRowDrag(params) {
//   var rowNode = params.rowNode;
//   var e = params.dragEvent;
//   var jsonObject = {
//     from: 'timeseriesbrowser'
//     operation: 'Drag on Column',
//     rowId: rowNode.data.id,
//     selected: rowNode.isSelected(),
//   };
//   var jsonData = JSON.stringify(jsonObject);
//   var userAgent = window.navigator.userAgent;
//   var isIE = userAgent.indexOf('Trident/') >= 0;
//   if (isIE) {
//     e.dataTransfer.setData('text', jsonData);
//   } else {
//     e.dataTransfer.setData('application/json', jsonData);
//     e.dataTransfer.setData('text/plain', jsonData);
//   }
// }

export { ColumnDefinitions, FrameworkComponents };
