import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as R from 'ramda'; // Ramda is used for pick, mergeDeepRight
import { isMoment, Moment } from 'moment'; // Assuming Moment is used for date/time

// Assuming these paths and the types they export are correct based on the original file
import {
  defaultGraph,
  defaultGraphDefinition,
  defaultResolvedSeries,
} from '../sagas/graph.defaults'; // Helper functions to create default graph structures
import {
  GraphPropNames,
  SeriesPropNames,
  GraphUIPropNames,
} from '../types/Graph'; // Arrays of valid property names for picking
import { GraphStatus } from '../sagas/graph.constants'; // Enum for graph statuses

// Ensure these types are correctly defined and imported from your project's type definitions
// For example, '../types/TGraph' was mentioned in the original file.
import type {
  // IGraphType, // This would be the primary type for a graph object from your definitions
  ISeriesDefinitionType, // Type for the 'definition' field, expected to include 'series: ISeriesItem[]'
  ISeriesItem, // Type for an individual series item within definition.series (e.g., { wsid: string, ... })
  IResolvedSeriesData,
  IGraphType, // Type for the data structure in transformedSeries (e.g., { data: number[], ... })
} from '../types/TGraph'; // Adjust path as necessary

// // --- START: More specific type definitions (these should ideally come from your central type files) ---

// // Interface for graph export options
// interface GraphExportOptions {
//   format?: string;
//   width?: number;
//   height?: number;
//   [key: string]: any; // Allows for other dynamic export properties
// }

// // Interface for the UI state of a graph
// interface GraphUIType {
//   selected: string[]; // Array of selected series workspace IDs (wsid)
//   chartRef?: any; // Reference to the chart instance (consider a more specific type, e.g., React.RefObject<SomeChartType>)
//   export: GraphExportOptions; // Export options for the graph
//   [key: string]: any; // Allows for other dynamic UI properties
// }

// // This interface represents the complete structure of a single graph object stored in the state.
// // It should align with your project's main graph type (e.g., IGraphType).
// interface FullGraphObject {
//   definition: ISeriesDefinitionType & { // Extends your base definition type
//     series: ISeriesItem[]; // Explicitly ensure 'series' array is part of the definition
//     freq?: string;
//     title?: string;
//     subtitle?: string;
//     legend?: string;
//     realtime?: Moment | string | number; // Supports Moment objects or serialized time
//     [key: string]: any; // For other dynamic properties on the definition
//   };
//   transformedSeries: { [wsid: string]: IResolvedSeriesData }; // Map of wsid to transformed series data
//   determinedFreq?: string; // Automatically determined frequency for the graph
//   output?: any; // Output data of the graph (replace 'any' with a specific type)
//   status: GraphStatus; // Current status of the graph (e.g., LOADING, READY, ERROR)
//   errors: any[]; // Array of errors related to the graph (replace 'any' with a specific error object type)
//   ui: GraphUIType; // UI-specific state for the graph
// }

// Interface for the entire graph slice state
export interface IGraphState {
  currentGraphId?: string; // ID of the currently active/focused graph
  objects: {
    [gid: string]: IGraphType; // A map of graph IDs (gid) to their respective graph objects
  };
}
// --- END: More specific type definitions ---

// Initial state for the graph slice
const initialState: IGraphState = {
  currentGraphId: undefined,
  objects: {}, // Starts with no graph objects
};

// Utility function for reordering items within a series array.
// Returns a new array with the item moved.
const reorderSeriesInArray = (
  seriesArray: ISeriesItem[],
  wsidToMove: string,
  newIndex: number
): ISeriesItem[] => {
  const currentIndex = seriesArray.findIndex((s) => s.wsid === wsidToMove);

  if (currentIndex === -1) {
    console.error(`reorderSeriesInArray: Series with wsid [${wsidToMove}] not found.`);
    return seriesArray; // Return original array if item not found
  }

  // Clamp newIndex to be within valid bounds for splicing
  const clampedNewIndex = Math.max(0, Math.min(newIndex, seriesArray.length -1));


  const arrayCopy = [...seriesArray]; // Create a mutable copy
  const [itemToMove] = arrayCopy.splice(currentIndex, 1); // Remove item from its current position
  arrayCopy.splice(clampedNewIndex, 0, itemToMove); // Insert item at the new position

  return arrayCopy;
};

// Create the graph slice using Redux Toolkit's createSlice
const graphSlice = createSlice({
  name: 'graphs', // Name of the slice, used to prefix action types (e.g., 'graphs/saveNewGraph')
  initialState,   // The initial state defined above
  reducers: {
    // Action to save a newly created graph object
    saveNewGraph(
      state,
      action: PayloadAction<{
        gid: string;
        freq: string;
        title?: string;
        subtitle?: string;
        legend?: string;
      }>
    ) {
      const { gid, freq, title, subtitle, legend } = action.payload;
      // Uses defaultGraph and defaultGraphDefinition helpers from sagas/graph.defaults
      // Casts are used to align with the FullGraphObject type; ensure your defaults are compatible.
      state.objects[gid] = {
        ...(defaultGraph() as FullGraphObject), // Spread default graph properties
        definition: {
          ...(defaultGraphDefinition({ title, subtitle, legend }) as FullGraphObject['definition']), // Spread default definition
          series: [], // Ensure series is initialized as an empty array for new graphs
          freq,       // Set the frequency
        },
        // Ensure other parts of FullGraphObject like transformedSeries, ui, errors are initialized by defaultGraph()
      };
    },

    // Action to save an entire graph object, typically used when loading a graph
    saveGraphObject(state, action: PayloadAction<{ gid: string; object: FullGraphObject }>) {
      state.objects[action.payload.gid] = action.payload.object;
    },

    // Action to set the current graph ID
    saveCurrentGid(state, action: PayloadAction<{ gid: string | undefined }>) {
      state.currentGraphId = action.payload.gid;
    },

    // Action to append a new series to an existing graph's definition
    appendSeries(state, action: PayloadAction<{ gid: string; series: ISeriesItem }>) {
      const { gid, series } = action.payload;
      const graph = state.objects[gid];
      if (graph) {
        // Check if the series (by wsid) already exists to prevent duplicates
        if (!graph.definition.series.find(s => s.wsid === series.wsid)) {
            graph.definition.series.push(series);
            // Initialize transformed data for the new series
            graph.transformedSeries[series.wsid] = defaultResolvedSeries(series.wsid) as IResolvedSeriesData;
        } else {
            console.warn(`appendSeries: Series [${series.wsid}] already exists in graph [${gid}]. Not appending.`);
        }
      } else {
        console.error(`appendSeries: Graph object [${gid}] not found.`);
      }
    },

    // Action to remove a series from a graph's definition and transformed data
    removeSeries(state, action: PayloadAction<{ gid: string; wsid: string }>) {
      const { gid, wsid } = action.payload;
      const graph = state.objects[gid];
      if (graph) {
        graph.definition.series = graph.definition.series.filter(
          (s) => s.wsid !== wsid
        );
        delete graph.transformedSeries[wsid]; // Remove from transformed series map
      } else {
        console.error(`removeSeries: Graph object [${gid}] not found.`);
      }
    },

    // Action to replace a series's wsid (e.g., if its underlying source changes)
    replaceSeries(
      state,
      action: PayloadAction<{ gid: string; wsid: string; to_wsid: string }>
    ) {
      const { gid, wsid, to_wsid } = action.payload;
      const graph = state.objects[gid];
      if (graph) {
        // Update wsid in the definition.series array
        graph.definition.series = graph.definition.series.map((s) =>
          s.wsid === wsid ? { ...s, wsid: to_wsid } : s
        );
        // Move transformed data to the new wsid and delete the old one
        if (wsid in graph.transformedSeries) {
          graph.transformedSeries[to_wsid] = graph.transformedSeries[wsid];
          delete graph.transformedSeries[wsid];
        } else {
          // If old wsid wasn't in transformedSeries, initialize for the new one
          graph.transformedSeries[to_wsid] = defaultResolvedSeries(to_wsid) as IResolvedSeriesData;
        }
        // Also update wsid if it's in the selected series UI state
        if (graph.ui.selected.includes(wsid)) {
            graph.ui.selected = graph.ui.selected.map(selectedId => selectedId === wsid ? to_wsid : selectedId);
        }
      } else {
        console.error(`replaceSeries: Graph object [${gid}] not found.`);
      }
    },

    // Action to save/update properties of the graph's definition
    saveGraphProps(
      state,
      action: PayloadAction<{ gid: string; props: Partial<FullGraphObject['definition']> }>
    ) {
      const { gid, props } = action.payload;
      const graph = state.objects[gid];
      if (graph) {
        // Use Ramda to pick only valid properties defined in GraphPropNames
        const validProps = R.pick(GraphPropNames, props) as Partial<FullGraphObject['definition']>;
        // Deep merge the valid properties into the existing definition
        graph.definition = R.mergeDeepRight(graph.definition, validProps);
        // Special handling for Moment.js objects if mergeDeepRight strips their prototype
        if (props.realtime && isMoment(props.realtime)) {
          graph.definition.realtime = props.realtime;
        }
      } else {
        console.error(`saveGraphProps: Graph object [${gid}] not found.`);
      }
    },

    // Action to save/update UI-specific properties of a graph
    saveUiProps(
      state,
      action: PayloadAction<{ gid: string; props: Partial<GraphUIType> }>
    ) {
      const { gid, props } = action.payload;
      const graph = state.objects[gid];
      if (graph) {
         // Ensure the ui object exists before trying to merge into it
        if (!graph.ui) {
            graph.ui = { selected: [], export: {} } as GraphUIType; // Initialize if not present
        }
        // Pick only valid UI properties and merge them
        const validProps = R.pick(GraphUIPropNames, props) as Partial<GraphUIType>;
        graph.ui = R.mergeDeepRight(graph.ui, validProps) as GraphUIType;
      } else {
        console.error(`saveUiProps: Graph object [${gid}] not found.`);
      }
    },

    // Action to save/update properties of a specific series within a graph
    saveSeriesProps(
      state,
      action: PayloadAction<{ gid: string; wsid: string; props: Partial<ISeriesItem> }>
    ) {
      const { gid, wsid, props } = action.payload;
      const graph = state.objects[gid];
      if (graph) {
        const seriesIndex = graph.definition.series.findIndex((s) => s.wsid === wsid);
        if (seriesIndex !== -1) {
          // Pick only valid series properties and merge them
          const validProps = R.pick(SeriesPropNames, props) as Partial<ISeriesItem>;
          graph.definition.series[seriesIndex] = R.mergeDeepRight(
            graph.definition.series[seriesIndex],
            validProps
          ) as ISeriesItem;
        } else {
          console.warn(`saveSeriesProps: Series [${wsid}] not found in graph [${gid}].`);
        }
      } else {
        console.error(`saveSeriesProps: Graph object [${gid}] not found.`);
      }
    },

    // Action to save the determined frequency of a graph
    saveDeterminedFreq(state, action: PayloadAction<{ gid: string; freq: string }>) {
      const { gid, freq } = action.payload;
      const graph = state.objects[gid];
      if (graph) {
        graph.determinedFreq = freq;
      } else {
        console.error(`saveDeterminedFreq: Graph object [${gid}] not found.`);
      }
    },

    // Action to save transformed data for a single series
    saveTransformedSeries(
      state,
      action: PayloadAction<{ gid: string; wsid: string; data: IResolvedSeriesData }>
    ) {
      const { gid, wsid, data } = action.payload;
      const graph = state.objects[gid];
      if (graph) {
        graph.transformedSeries[wsid] = data;
      } else {
        console.error(`saveTransformedSeries: Graph object [${gid}] not found.`);
      }
    },

    // Action to save transformed data for multiple series in bulk
    saveTransformedSeriesBulk(
      state,
      action: PayloadAction<{ gid: string; transformedSeries: { [wsid: string]: IResolvedSeriesData } }>
    ) {
      const { gid, transformedSeries } = action.payload;
      const graph = state.objects[gid];
      if (graph) {
        // Overwrites existing transformedSeries for the graph with the new bulk data
        // or merges if you prefer: graph.transformedSeries = {...graph.transformedSeries, ...transformedSeries};
        graph.transformedSeries = transformedSeries;
      } else {
        console.error(`saveTransformedSeriesBulk: Graph object [${gid}] not found.`);
      }
    },

    // Action to save the output of a graph and set its status to READY
    saveOutput(state, action: PayloadAction<{ gid: string; output: any }>) { // Replace 'any' with specific output type
      const { gid, output } = action.payload;
      const graph = state.objects[gid];
      if (graph) {
        graph.output = output;
        graph.status = GraphStatus.READY;
      } else {
        console.error(`saveOutput: Graph object [${gid}] not found.`);
      }
    },

    // Action to update the status of a graph
    updateStatus(state, action: PayloadAction<{ gid: string; status: GraphStatus }>) {
      const { gid, status } = action.payload;
      const graph = state.objects[gid];
      if (graph) {
        console.log("updateStatus (RTK):", gid, status); // Kept original log for debugging
        graph.status = status;
      } else {
        console.error(`updateStatus: Graph object [${gid}] not found (attempted status: ${status}).`);
      }
    },

    // Action to reorder a series within a graph's definition
    saveReorderedSeries(
      state,
      action: PayloadAction<{ gid: string; wsid: string; pos: number }> // pos is the new index
    ) {
      const { gid, wsid, pos } = action.payload;
      const graph = state.objects[gid];
      if (graph) {
        graph.definition.series = reorderSeriesInArray(graph.definition.series, wsid, pos);
      } else {
        console.error(`saveReorderedSeries: Graph object [${gid}] not found.`);
      }
    },

    // Action to clear all series data from a graph (definition and transformed)
    // Renamed from GRAPH_SAVE_CLEAR_SERIES for clarity
    clearGraphSeriesData(state, action: PayloadAction<{ gid: string }>) {
      const { gid } = action.payload;
      const graph = state.objects[gid];
      if (graph) {
        graph.definition.series = [];
        graph.transformedSeries = {};
        // Optionally reset other related fields:
        // graph.output = undefined;
        // graph.determinedFreq = undefined;
        // graph.status = GraphStatus.INITIAL; // Or an appropriate default status
        // graph.ui.selected = [];
      } else {
        console.error(`clearGraphSeriesData: Graph object [${gid}] not found.`);
      }
    },

    // Action to select a series in a graph's UI
    selectSeries(
      state,
      action: PayloadAction<{ gid: string; wsid: string; clearExisting?: boolean }> // clearExisting instead of clear
    ) {
      const { gid, wsid, clearExisting } = action.payload;
      const graph = state.objects[gid];
      if (graph && graph.ui) {
        if (clearExisting) {
          graph.ui.selected = [wsid];
        } else {
          // Add to selection if not already present
          if (!graph.ui.selected.includes(wsid)) {
            graph.ui.selected.push(wsid);
          }
        }
      } else {
        console.error(`selectSeries: Graph object [${gid}] or its UI not found.`);
      }
    },

    // Action to deselect a series in a graph's UI
    deselectSeries(state, action: PayloadAction<{ gid: string; wsid: string }>) {
      const { gid, wsid } = action.payload;
      const graph = state.objects[gid];
      if (graph && graph.ui) {
        graph.ui.selected = graph.ui.selected.filter((id) => id !== wsid);
      } else {
        console.error(`deselectSeries: Graph object [${gid}] or its UI not found.`);
      }
    },

    // Action to add errors to a graph's error list
    addGraphErrors(state, action: PayloadAction<{ gid: string; errors: any[] }>) { // Replace 'any[]' with specific error type array
      const { gid, errors } = action.payload;
      const graph = state.objects[gid];
      if (graph) {
        if (!graph.errors) graph.errors = []; // Ensure errors array exists
        graph.errors.push(...errors);
      } else {
        console.error(`addGraphErrors: Graph object [${gid}] not found.`);
      }
    },

    // Action to clear all errors from a graph
    clearGraphErrors(state, action: PayloadAction<{ gid: string }>) {
      const { gid } = action.payload;
      const graph = state.objects[gid];
      if (graph) {
        graph.errors = [];
      } else {
        console.error(`clearGraphErrors: Graph object [${gid}] not found.`);
      }
    },

    // Action to delete an entire graph object from the state
    deleteGraphObject(state, action: PayloadAction<{ gid: string }>) {
      const { gid } = action.payload;
      if (gid in state.objects) {
        delete state.objects[gid];
        // If the deleted graph was the current one, clear currentGraphId
        if (state.currentGraphId === gid) {
          state.currentGraphId = undefined;
        }
      } else {
         console.warn(`deleteGraphObject: Graph object [${gid}] was not found for deletion.`);
      }
    },

    // Action to restore the entire graph slice state (e.g., from persisted state)
    // Renamed from GRAPH_SAVE_RESTORE_REDUCER for clarity
    restoreGraphsState(state, action: PayloadAction<IGraphState>) {
      // This replaces the entire slice state. Use with caution.
      // The structure of action.payload must exactly match IGraphState.
      // Immer allows returning a new state directly for complete replacement.
      return action.payload;
    },

    // Action to save/update export options for a graph
    saveGraphExportOptions(
      state,
      action: PayloadAction<{ gid: string; opts: Partial<GraphExportOptions> }>
    ) {
      const { gid, opts } = action.payload;
      const graph = state.objects[gid];
      if (graph && graph.ui) {
        // Ensure ui.export object exists before merging
        if (!graph.ui.export) {
          graph.ui.export = {}; // Initialize if not present
        }
        graph.ui.export = { ...graph.ui.export, ...opts };
      } else {
        console.error(`saveGraphExportOptions: Graph object [${gid}] or its UI not found.`);
      }
    },

    // Action to save a reference to the chart instance (e.g., for imperative API calls)
    saveChartRef(state, action: PayloadAction<{ gid: string; ref: any }>) { // Replace 'any' with specific chart ref type
      const { gid, ref } = action.payload;
      const graph = state.objects[gid];
      if (graph && graph.ui) {
        graph.ui.chartRef = ref;
      } else {
        if (!graph) {
          console.warn(`saveChartRef: Graph object [${gid}] not found. Chart ref not saved.`);
        } else { // graph exists, but graph.ui might not be fully initialized
          console.warn(`saveChartRef: UI object not found or incomplete for graph [${gid}]. Chart ref not saved to ui.chartRef.`);
          // If graph.ui might not exist, you might want to initialize it here:
          // if (!graph.ui) graph.ui = { selected: [], export: {} } as GraphUIType;
          // graph.ui.chartRef = ref;
        }
      }
    },
  },
  // extraReducers can be used to handle actions defined outside this slice,
  // or for createAsyncThunk lifecycle actions. Not used in this direct refactor.
  // extraReducers: (builder) => {
  //   builder.addCase(...);
  // }
});

// Export the auto-generated action creators from the slice
export const {
  saveNewGraph,
  saveGraphObject,
  saveCurrentGid,
  appendSeries,
  removeSeries,
  replaceSeries,
  saveGraphProps,
  saveUiProps,
  saveSeriesProps,
  saveDeterminedFreq,
  saveTransformedSeries,
  saveTransformedSeriesBulk,
  saveOutput,
  updateStatus,
  saveReorderedSeries,
  clearGraphSeriesData, // Renamed from original for clarity
  selectSeries,
  deselectSeries,
  addGraphErrors,
  clearGraphErrors,
  deleteGraphObject,
  restoreGraphsState, // Renamed from original for clarity
  saveGraphExportOptions,
  saveChartRef,
} = graphSlice.actions;

// Export the reducer function itself to be added to the root reducer
export default graphSlice.reducer;
