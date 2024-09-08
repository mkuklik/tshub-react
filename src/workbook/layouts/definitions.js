import { path, isNil } from 'ramda';

export const MAIN_LAYOUT = 'MAIN_LAYOUT';
export const ANALYTICS_FLEXLAYOUT = 'ANALYTICS_FLEXLAYOUT';
export const TIMESERIES_BROWSER_FLEXLAYOUT = 'TIMESERIES_BROWSER_FLEXLAYOUT';

export const TIMESERIES_BROWSER_TAB = 'TIMESERIES_BROWSER_TAB';
export const TIMESERIES_BROWSER = 'TIMESERIES_BROWSER';
export const GRAPH_TABSET = 'GRAPH_TABSET';
export const SERIES_TABSET = 'SERIES_TABSET';
export const GRAPH_SERIES_LIST_BORDER_TAB = 'GRAPH_SERIES_LIST_BORDER_TAB';
export const TABLE_TABSET = 'TABLE_TABSET';
export const FIRST_LAYOUT = 'FirstLayout';
export const SECOND_LAYOUT = 'SecondLayout';
export const THIRD_LAYOUT = 'ThirdLayout';
export const FORTH_LAYOUT = 'ForthLayout';
export const ANALYTICS_BORDER_TAB = 'ANALYTICS_BORDER_TAB';
export const ANALYTICS_ROW = 'ANALYTICS_ROW';
export const ANALYTICS_TABSET = 'ANALYTICS_TABSET';
export const ANALYTCS_TAB = 'ANALYTICS_TAB';
export const TABSET = 'tabset';
export const ROW = 'row';
export const TAB = 'tab';
export const TSB_COMP = 'TSB_COMP';
export const GRAPH_OPTION = 'Graph Option';
export const SERIES_OPTION = 'Series Option';
export const SERIES_OPTIONS_TAB = 'SERIES_OPTIONS_TAB';
export const GRAPH_OPTIONS_TAB = 'GRAPH_OPTIONS_TAB';
export const GRAPH_EXPORT_TAB = 'GRAPH_EXPORT_TAB';

export const GRAPH_OPTIONS_COMP = 'GRAPH_OPTIONS_COMP';
export const SERIES_OPTIONS_COMP = 'SERIES_OPTIONS_COMP';
export const GRAPH_EXPORT_COMP = 'GRAPH_EXPORT_COMP';
export const ANALYTICS_COMP = 'Analytics';
export const ANALYTICS_HOME_COMP = 'analyticsHome';
export const TABLE_COMP = 'Table';
export const TABLE_BORDER_TAB = 'TABLE_BORDER_TAB';
export const GRAPH_SERIES_LIST_COMP = 'GRAPH_SERIES_LIST_COMP';
export const TSB_TABLE_COMP = 'TSB_TABLE_COMP';
export const UPLOAD_TAB = 'UPLOAD_TAB';
export const UPLOAD_COMP = 'UPLOAD_COMP';
export const SERIESINFO_TAB = 'SERIESINFO_TAB';
export const SERIESINFO_COMP = 'SERIESINFO_COMP';
export const ANALYTICS_TAB_HOME = 'ANALYTICS_TAB_HOME';
export const BORDER = 'border';
export const GRAPH = 'graph';
export const SUBMODEL = 'SUBMODEL';
// export const
export const ANALYTICS_PREFIX = 'A';
export const GRAPH_PREFIX = 'G';

// row or graph tab create constatnt

export const GraphTabId = (gid) => `${GRAPH_PREFIX}:${gid}`;
export const isNodeGraphTab = (nodeId) => {
  if (isNil(nodeId)) return undefined;
  return nodeId.startsWith(`${GRAPH_PREFIX}:`);
};

export const nodeIdToAyid = (nodeId) => {
  if (isNil(nodeId)) return undefined;
  return (nodeId.charAt(0) === ANALYTICS_PREFIX ? nodeId.slice(2) : undefined);
};

export const nodeIdToGid = (nodeId) => {
  if (isNil(nodeId)) return undefined;
  return (nodeId.charAt(0) === GRAPH_PREFIX ? nodeId.slice(2) : undefined);
};

export const GraphTabsetId = (i) => `${GRAPH_TABSET + i}`;
export const DefaultTabsetId = GraphTabsetId(0);

export const isNodeGraphTabset = (nodeId) => ((!isNil(nodeId)) ? nodeId.startsWith(GRAPH_TABSET) : false);

export const GraphHorizontalRowId = (i) => `GRAPH_HORI_ROW${i}`;

export const AnalyticsTabsetId = (id) => `${ANALYTICS_TABSET + id}`;

export const AnalyticsTabId = (ayid) => `${ANALYTICS_PREFIX}:${ayid}`;

export const isNodeAnalyticsTab = (nodeId) => path([0], nodeId) === ANALYTICS_PREFIX;

export const GraphTabset = (i) => `${GRAPH_TABSET + i}`;

export const generateGraphTabName = (gid) => `Graph ${gid.slice(gid.length - 5, gid.length)}...`;
export const generateAnalyticsTabName = (ayid) => `Analytics ${ayid.slice(ayid.length - 5, ayid.length)}...`;


export const modelAllowDrop = (dragNode, dropInfo) => {
  // check for allowing drop in model
  console.log('modelAllowDrop', dragNode, dropInfo);

  const dropNode = dropInfo.node;

  // prevent for creating new tabset
  if (dropNode.getType() === BORDER
    && (dragNode.getParent() == null
    || dragNode.getParent().getType() !== BORDER)) return false;

  if (dropNode.getType() !== BORDER
    && (dragNode.getParent() != null
    && dragNode.getParent().getType() === BORDER)) return false;

  if (dropNode.getType() === ROW) return false;

  return true;
};
