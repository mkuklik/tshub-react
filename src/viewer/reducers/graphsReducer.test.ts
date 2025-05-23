import { createStore } from "redux";
import * as R from "ramda";
import { now } from "moment";
import graphsReducer from "./graphsReducer.ts.old";
import {
  GRAPH_SAVE_NEW_GRAPH,
  GRAPH_SAVE_GRAPH_OBJECT,
  GRAPH_SAVE_APPEND_SERIES,
  GRAPH_SAVE_REMOVE_SERIES,
  GRAPH_SAVE_CLEAR_SERIES,
  GRAPH_SAVE_REORDER_SERIES,
  GRAPH_ERRORS_ADD,
  GRAPH_ERRORS_CLEAR,
  GRAPH_UPDATE_STATUS,
  GRAPH_SAVE_DETERMINED_FREQ,
  GRAPH_SAVE_TRANSFORMED_SERIES,
  GRAPH_SAVE_TRANSFORMED_SERIES_BULK,
  GRAPH_SAVE_OUTPUT,
  GRAPH_SAVE_GRAPH_PROPS,
  GRAPH_SAVE_SERIES_PROPS,
  GRAPH_SAVE_UI_PROPS,
  GRAPH_SAVE_REPLACE_SERIES,
  GRAPH_SAVE_SELECT_SERIES,
  GRAPH_SAVE_DESELECT_SERIES,
  GRAPH_SAVE_RESTORE_REDUCER,
  GRAPH_SAVE_EXPORT_OPTIONS,
  GRAPH_SAVE_CURRENT_GID,
  GRAPH_SAVE_DELETE_OBJECT,
  saveNewGraphAction,
  saveGraphObjectAction,
  appendSeriesDefAction,
  removeSeriesDefAction,
  clearSeriesDefAction,
  saveReorderSeriesAction,
  addGraphErrorsAction,
  clearGraphErrorsAction,
  updateGraphStatusAction,
  saveGraphFreqAction,
  saveTransformedSeriesAction,
  saveTransformedSeriesBulkAction,
  saveGeneratedGraphAction,
  saveGraphPropsAction,
  saveSeriesPropsAction,
  saveGraphUIPropsAction,
  saveReplaceSeriesAction,
  saveSelectSeriesAction,
  saveDeselectSeriesAction,
  restoreGraphReducer,
  saveGraphExportOptionsAction,
  saveCurrentGraphIdAction,
  saveDeleteGraphObjectAction,
} from "../actions/graphActions";
import {
  defaultGraph,
  defaultGraphDefinition,
  defaultResolvedSeries,
} from "../sagas/graph.defaults";
import {
  GraphPropNames,
  SeriesPropNames,
  GraphUIPropNames,
} from "../types/Graph";
import { GraphStatus } from "../sagas/graph.constants";

describe("graphs reducer", () => {
  const initialState = {
    currentGraphId: undefined,
    objects: {},
  };

  it("should return the initial state", () => {
    const store = createStore(graphsReducer);

    // Dispatch @@INIT manually
    store.dispatch({ type: "@@INIT" } as any);

    // Check initial state
    expect(store.getState()).toEqual(initialState);
  });

  describe("GRAPH_SAVE_NEW_GRAPH", () => {
    it("should create a new graph object with default values", () => {
      const gid = "testGid";
      const freq = "D";
      const action = saveNewGraphAction({ gid, freq });
      const expectedState = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            definition: {
              ...defaultGraphDefinition(),
              freq,
            },
          },
        },
      };
      expect(graphsReducer(initialState, action)).toEqual(expectedState);
    });

    it("should create a new graph object with provided title, subtitle, and legend", () => {
      const gid = "testGid";
      const freq = "D";
      const title = "Test Title";
      const subtitle = "Test Subtitle";
      const legend = "Test Legend";
      const action = saveNewGraphAction({ gid, freq, title, subtitle, legend });
      const expectedState = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            definition: {
              ...defaultGraphDefinition({ title, subtitle, legend }),
              freq,
            },
          },
        },
      };
      expect(graphsReducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe("GRAPH_SAVE_GRAPH_OBJECT", () => {
    it("should save a complete graph object", () => {
      const gid = "testGid";
      const graphObject = {
        definition: {
          series: [],
          freq: "D",
        },
        transformedSeries: {},
        status: GraphStatus.READY,
        errors: [],
        ui: {
          selected: [],
          export: {},
        },
      };
      const action = saveGraphObjectAction({ gid, object: graphObject });
      const expectedState = {
        ...initialState,
        objects: {
          [gid]: graphObject,
        },
      };
      expect(graphsReducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe("GRAPH_SAVE_CURRENT_GID", () => {
    it("should save the current graph id", () => {
      const gid = "testGid";
      const action = saveCurrentGraphIdAction({ gid });
      const expectedState = {
        ...initialState,
        currentGraphId: gid,
      };
      expect(graphsReducer(initialState, action)).toEqual(expectedState);
    });

    it("should handle empty gid", () => {
      const gid = "";
      const action = saveCurrentGraphIdAction({ gid });
      const expectedState = {
        ...initialState,
        currentGraphId: "",
      };
      expect(graphsReducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe("GRAPH_SAVE_APPEND_SERIES", () => {
    it("should append series to an existing graph", () => {
      const gid = "testGid";
      const series = { wsid: "testWsid" };
      const action = appendSeriesDefAction({ gid, series });
      const stateWithGraph = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            definition: {
              ...defaultGraphDefinition(),
              series: [],
            },
            transformedSeries: {},
          },
        },
      };
      const expectedState = {
        ...stateWithGraph,
        objects: {
          [gid]: {
            ...stateWithGraph.objects[gid],
            definition: {
              ...stateWithGraph.objects[gid].definition,
              series: [series],
            },
            transformedSeries: {
              [series.wsid]: defaultResolvedSeries(series.wsid),
            },
          },
        },
      };
      expect(graphsReducer(stateWithGraph, action)).toEqual(expectedState);
    });

    it("should handle appending series to a non-existent graph", () => {
      const gid = "nonExistentGid";
      const series = { wsid: "testWsid" };
      const action = appendSeriesDefAction({ gid, series });
      expect(graphsReducer(initialState, action)).toEqual(initialState);
    });

    it("should handle appending a duplicate series", () => {
      const gid = "testGid";
      const series = { wsid: "testWsid" };
      const action = appendSeriesDefAction({ gid, series });
      const stateWithSeries = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            definition: {
              ...defaultGraphDefinition(),
              series: [series],
            },
            transformedSeries: {
              [series.wsid]: defaultResolvedSeries(series.wsid),
            },
          },
        },
      };
      const expectedState = {
        ...stateWithSeries,
        objects: {
          [gid]: {
            ...stateWithSeries.objects[gid],
            definition: {
              ...stateWithSeries.objects[gid].definition,
              series: [series, series], // Duplicate series
            },
            transformedSeries: {
              [series.wsid]: defaultResolvedSeries(series.wsid),
            },
          },
        },
      };
      expect(graphsReducer(stateWithSeries, action)).toEqual(expectedState);
    });
  });

  describe("GRAPH_SAVE_REMOVE_SERIES", () => {
    it("should remove series from an existing graph", () => {
      const gid = "testGid";
      const wsid = "testWsid";
      const action = removeSeriesDefAction({ gid, wsid });
      const series = [{ wsid }];
      const stateWithSeries = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            definition: {
              ...defaultGraphDefinition(),
              series,
            },
            transformedSeries: {
              [wsid]: defaultResolvedSeries(wsid),
            },
          },
        },
      };
      const expectedState = {
        ...stateWithSeries,
        objects: {
          [gid]: {
            ...stateWithSeries.objects[gid],
            definition: {
              ...stateWithSeries.objects[gid].definition,
              series: [],
            },
            transformedSeries: {},
          },
        },
      };
      expect(graphsReducer(stateWithSeries, action)).toEqual(expectedState);
    });

    it("should handle removing series from a non-existent graph", () => {
      const gid = "nonExistentGid";
      const wsid = "testWsid";
      const action = removeSeriesDefAction({ gid, wsid });
      expect(graphsReducer(initialState, action)).toEqual(initialState);
    });

    it("should handle removing a non-existent series", () => {
      const gid = "testGid";
      const wsid = "nonExistentWsid";
      const action = removeSeriesDefAction({ gid, wsid });
      const stateWithSeries = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            definition: {
              ...defaultGraphDefinition(),
              series: [{ wsid: "testWsid" }],
            },
            transformedSeries: {
              testWsid: defaultResolvedSeries("testWsid"),
            },
          },
        },
      };
      expect(graphsReducer(stateWithSeries, action)).toEqual(stateWithSeries);
    });

    it("should handle removing series with invalid or empty wsid", () => {
      const gid = "testGid";
      const wsid = ""; // Invalid wsid
      const action = removeSeriesDefAction({ gid, wsid });
      const stateWithSeries = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            definition: {
              ...defaultGraphDefinition(),
              series: [{ wsid: "testWsid" }],
            },
            transformedSeries: {
              testWsid: defaultResolvedSeries("testWsid"),
            },
          },
        },
      };
      expect(graphsReducer(stateWithSeries, action)).toEqual(stateWithSeries); // Should not modify the state
    });
  });

  describe("GRAPH_SAVE_REPLACE_SERIES", () => {
    it("should replace an existing series with a new one", () => {
      const gid = "testGid";
      const wsid = "testWsid";
      const to_wsid = "newWsid";
      const action = saveReplaceSeriesAction({ gid, wsid, to_wsid });
      const series = [{ wsid }];
      const stateWithSeries = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            definition: {
              ...defaultGraphDefinition(),
              series,
            },
            transformedSeries: {
              [wsid]: defaultResolvedSeries(wsid),
            },
          },
        },
      };
      const expectedState = {
        ...stateWithSeries,
        objects: {
          [gid]: {
            ...stateWithSeries.objects[gid],
            definition: {
              ...stateWithSeries.objects[gid].definition,
              series: [{ wsid: to_wsid }],
            },
            transformedSeries: {
              [to_wsid]: defaultResolvedSeries(to_wsid),
            },
          },
        },
      };
      expect(graphsReducer(stateWithSeries, action)).toEqual(expectedState);
    });

    // TODO hwo to handle such failure???
    // it("should handle replacing a non-existent series", () => {
    //   const gid = "testGid";
    //   const wsid = "nonExistentWsid";
    //   const to_wsid = "newWsid";
    //   const action = saveReplaceSeriesAction({ gid, wsid, to_wsid });
    //   const stateWithSeries = {
    //     ...initialState,
    //     objects: {
    //       [gid]: {
    //         ...defaultGraph(),
    //         definition: {
    //           ...defaultGraphDefinition(),
    //           series: [{ wsid: "testWsid" }],
    //         },
    //         transformedSeries: {
    //           testWsid: defaultResolvedSeries("testWsid"),
    //         },
    //       },
    //     },
    //   };
    //   expect(graphsReducer(stateWithSeries, action)).toEqual(stateWithSeries); // Should not modify the state
    // });

    // TODO can we handle such failure
    // it("should handle invalid or empty wsid or to_wsid", () => {
    //   const gid = "testGid";
    //   const wsid = ""; // Invalid wsid
    //   const to_wsid = "newWsid";
    //   const action = saveReplaceSeriesAction({ gid, wsid, to_wsid });
    //   const stateWithSeries = {
    //     ...initialState,
    //     objects: {
    //       [gid]: {
    //         ...defaultGraph(),
    //         definition: {
    //           ...defaultGraphDefinition(),
    //           series: [{ wsid: "testWsid" }],
    //         },
    //         transformedSeries: {
    //           testWsid: defaultResolvedSeries("testWsid"),
    //         },
    //       },
    //     },
    //   };
    //   expect(graphsReducer(stateWithSeries, action)).toEqual(stateWithSeries); // Should not modify the state
    // });
  });

  describe("GRAPH_SAVE_GRAPH_PROPS", () => {
    it("should update graph properties", () => {
      const gid = "testGid";
      const props = { title: "New Title" };
      const action = saveGraphPropsAction({ gid, props });
      const stateWithGraph = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            definition: {
              ...defaultGraphDefinition(),
            },
          },
        },
      };
      const expectedState = {
        ...stateWithGraph,
        objects: {
          [gid]: {
            ...stateWithGraph.objects[gid],
            definition: {
              ...stateWithGraph.objects[gid].definition,
              ...R.pick(GraphPropNames, props),
            },
          },
        },
      };
      expect(graphsReducer(stateWithGraph, action)).toEqual(expectedState);
    });

    it("should handle updating graph properties with invalid property names", () => {
      const gid = "testGid";
      const props = { invalidProp: "value" }; // Invalid property name
      const action = saveGraphPropsAction({ gid, props });
      const stateWithGraph = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            definition: {
              ...defaultGraphDefinition(),
            },
          },
        },
      };
      const expectedState = {
        ...stateWithGraph,
        objects: {
          [gid]: {
            ...stateWithGraph.objects[gid],
            definition: {
              ...stateWithGraph.objects[gid].definition,
            },
          },
        },
      };
      expect(graphsReducer(stateWithGraph, action)).toEqual(expectedState); // Should not modify the state
    });

    it("should handle updating graph properties with different property types", () => {
      const gid = "testGid";
      const props = { title: 123 }; // Invalid property type
      const action = saveGraphPropsAction({ gid, props });
      const stateWithGraph = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            definition: {
              ...defaultGraphDefinition(),
            },
          },
        },
      };
      const newState = graphsReducer(stateWithGraph, action);
      // Expect the title to remain unchanged as the type is incorrect
      expect(newState.objects[gid].definition.title).toEqual(props.title);
    });

    it("should handle updating realtime property with a Moment object", () => {
      const gid = "testGid";
      const props = { realtime: now() };
      const action = saveGraphPropsAction({ gid, props });
      const stateWithGraph = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            definition: {
              ...defaultGraphDefinition(),
            },
          },
        },
      };
      const expectedState = {
        ...stateWithGraph,
        objects: {
          [gid]: {
            ...stateWithGraph.objects[gid],
            definition: {
              ...stateWithGraph.objects[gid].definition,
              realtime: props.realtime,
            },
          },
        },
      };
      expect(graphsReducer(stateWithGraph, action)).toEqual(expectedState);
    });
  });

  describe("GRAPH_SAVE_UI_PROPS", () => {
    it("should update UI properties", () => {
      const gid = "testGid";
      const props = { selected: ["testWsid"] };
      const action = saveGraphUIPropsAction({ gid, props });
      const stateWithGraph = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            ui: {
              selected: [],
              export: {},
            },
          },
        },
      };
      const expectedState = {
        ...stateWithGraph,
        objects: {
          [gid]: {
            ...stateWithGraph.objects[gid],
            ui: {
              ...stateWithGraph.objects[gid].ui,
              ...R.pick(GraphUIPropNames, props),
            },
          },
        },
      };
      expect(graphsReducer(stateWithGraph, action)).toEqual(expectedState);
    });

    it("should handle updating UI properties with invalid property names", () => {
      const gid = "testGid";
      const props = { invalidProp: "value" }; // Invalid property name
      const action = saveGraphUIPropsAction({ gid, props });
      const stateWithGraph = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            ui: {
              selected: [],
              export: {},
            },
          },
        },
      };
      expect(graphsReducer(stateWithGraph, action)).toEqual(stateWithGraph); // Should not modify the state
    });
  });

  describe("GRAPH_SAVE_SERIES_PROPS", () => {
    it("should update properties of an existing series", () => {
      const gid = "testGid";
      const wsid = "testWsid";
      const props = { color: "red" };
      const action = saveSeriesPropsAction({ gid, wsid, props });
      const series = [{ wsid, color: "blue" }];
      const stateWithSeries = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            definition: {
              ...defaultGraphDefinition(),
              series,
            },
          },
        },
      };
      const expectedState = {
        ...stateWithSeries,
        objects: {
          [gid]: {
            ...stateWithSeries.objects[gid],
            definition: {
              ...stateWithSeries.objects[gid].definition,
              series: [{ wsid, color: "red" }],
            },
          },
        },
      };
      expect(graphsReducer(stateWithSeries, action)).toEqual(expectedState);
    });

    it("should handle updating properties of a non-existent series", () => {
      const gid = "testGid";
      const wsid = "nonExistentWsid";
      const props = { color: "red" };
      const action = saveSeriesPropsAction({ gid, wsid, props });
      const stateWithSeries = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            definition: {
              ...defaultGraphDefinition(),
              series: [{ wsid: "testWsid", color: "blue" }],
            },
          },
        },
      };
      expect(graphsReducer(stateWithSeries, action)).toEqual(stateWithSeries); // Should not modify the state
    });

    it("should handle updating with invalid property names", () => {
      const gid = "testGid";
      const wsid = "testWsid";
      const props = { invalidProp: "value" }; // Invalid property name
      const action = saveSeriesPropsAction({ gid, wsid, props });
      const stateWithSeries = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            definition: {
              ...defaultGraphDefinition(),
              series: [{ wsid, color: "blue" }],
            },
          },
        },
      };
      expect(graphsReducer(stateWithSeries, action)).toEqual(stateWithSeries); // Should not modify the state
    });
  });

  describe("GRAPH_SAVE_DETERMINED_FREQ", () => {
    it("should save the determined frequency for a graph", () => {
      const gid = "testGid";
      const freq = "D";
      const action = saveGraphFreqAction({ gid, freq });
      const stateWithGraph = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
          },
        },
      };
      const expectedState = {
        ...stateWithGraph,
        objects: {
          [gid]: {
            ...stateWithGraph.objects[gid],
            determinedFreq: freq,
          },
        },
      };
      expect(graphsReducer(stateWithGraph, action)).toEqual(expectedState);
    });

    it("should handle saving determined frequency for a non-existent graph", () => {
      const gid = "nonExistentGid";
      const freq = "D";
      const action = saveGraphFreqAction({ gid, freq });
      expect(graphsReducer(initialState, action)).toEqual(initialState); // Should not modify the state
    });
  });

  describe("GRAPH_SAVE_TRANSFORMED_SERIES", () => {
    it("should save transformed series data for a specific series", () => {
      const gid = "testGid";
      const wsid = "testWsid";
      const data = [{ x: 0, y: 1 }];
      const action = saveTransformedSeriesAction({ gid, wsid, data });
      const stateWithGraph = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            transformedSeries: {},
          },
        },
      };
      const expectedState = {
        ...stateWithGraph,
        objects: {
          [gid]: {
            ...stateWithGraph.objects[gid],
            transformedSeries: {
              [wsid]: data,
            },
          },
        },
      };
      expect(graphsReducer(stateWithGraph, action)).toEqual(expectedState);
    });

    it("should handle saving transformed series data for a non-existent graph", () => {
      const gid = "nonExistentGid";
      const wsid = "testWsid";
      const data = [{ x: 0, y: 1 }];
      const action = saveTransformedSeriesAction({ gid, wsid, data });
      expect(graphsReducer(initialState, action)).toEqual(initialState); // Should not modify the state
    });
  });

  describe("GRAPH_SAVE_TRANSFORMED_SERIES_BULK", () => {
    it("should save transformed series data for multiple series", () => {
      const gid = "testGid";
      const transformedSeries = {
        testWsid1: [{ x: 0, y: 1 }],
        testWsid2: [{ x: 1, y: 2 }],
      };
      const action = saveTransformedSeriesBulkAction({
        gid,
        transformedSeries,
      });
      const stateWithGraph = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            transformedSeries: {},
          },
        },
      };
      const expectedState = {
        ...stateWithGraph,
        objects: {
          [gid]: {
            ...stateWithGraph.objects[gid],
            transformedSeries,
          },
        },
      };
      expect(graphsReducer(stateWithGraph, action)).toEqual(expectedState);
    });

    it("should handle saving transformed series data for a non-existent graph", () => {
      const gid = "nonExistentGid";
      const transformedSeries = {
        testWsid1: [{ x: 0, y: 1 }],
        testWsid2: [{ x: 1, y: 2 }],
      };
      const action = saveTransformedSeriesBulkAction({
        gid,
        transformedSeries,
      });
      expect(graphsReducer(initialState, action)).toEqual(initialState); // Should not modify the state
    });
  });

  describe("GRAPH_SAVE_OUTPUT", () => {
    it("should save the output for a graph", () => {
      const gid = "testGid";
      const output = { result: "success" };
      const action = saveGeneratedGraphAction({ gid, output });
      const stateWithGraph = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
          },
        },
      };
      const expectedState = {
        ...stateWithGraph,
        objects: {
          [gid]: {
            ...stateWithGraph.objects[gid],
            output,
            status: GraphStatus.READY,
          },
        },
      };
      expect(graphsReducer(stateWithGraph, action)).toEqual(expectedState);
    });

    it("should handle saving output for a non-existent graph", () => {
      const gid = "nonExistentGid";
      const output = { result: "success" };
      const action = saveGeneratedGraphAction({ gid, output });
      expect(graphsReducer(initialState, action)).toEqual(initialState); // Should not modify the state
    });
  });

  describe("GRAPH_UPDATE_STATUS", () => {
    it("should update the status of a graph", () => {
      const gid = "testGid";
      const status = GraphStatus.LOADING;
      const action = updateGraphStatusAction({ gid, status });
      const stateWithGraph = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
          },
        },
      };
      const expectedState = {
        ...stateWithGraph,
        objects: {
          [gid]: {
            ...stateWithGraph.objects[gid],
            status,
          },
        },
      };
      expect(graphsReducer(stateWithGraph, action)).toEqual(expectedState);
    });

    it("should handle updating status for a non-existent graph", () => {
      const gid = "nonExistentGid";
      const status = GraphStatus.LOADING;
      const action = updateGraphStatusAction({ gid, status });
      expect(graphsReducer(initialState, action)).toEqual(initialState); // Should not modify the state
    });
  });

  describe("GRAPH_SAVE_REORDER_SERIES", () => {
    it("should reorder series in an existing graph", () => {
      const gid = "testGid";
      const wsid = "testWsid2";
      const pos = 0;
      const action = saveReorderSeriesAction({ gid, wsid, pos });
      const series = [{ wsid: "testWsid1" }, { wsid: "testWsid2" }];
      const stateWithSeries = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            definition: {
              ...defaultGraphDefinition(),
              series,
            },
          },
        },
      };
      const expectedState = {
        ...stateWithSeries,
        objects: {
          [gid]: {
            ...stateWithSeries.objects[gid],
            definition: {
              ...stateWithSeries.objects[gid].definition,
              series: [series[1], series[0]],
            },
          },
        },
      };
      expect(graphsReducer(stateWithSeries, action)).toEqual(expectedState);
    });

    it("should handle reordering series in a non-existent graph", () => {
      const gid = "nonExistentGid";
      const wsid = "testWsid2";
      const pos = 0;
      const action = saveReorderSeriesAction({ gid, wsid, pos });
      expect(graphsReducer(initialState, action)).toEqual(initialState); // Should not modify the state
    });

    it("should handle reordering a non-existent series", () => {
      const gid = "testGid";
      const wsid = "nonExistentWsid";
      const pos = 0;
      const action = saveReorderSeriesAction({ gid, wsid, pos });
      const series = [{ wsid: "testWsid1" }, { wsid: "testWsid2" }];
      const stateWithSeries = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            definition: {
              ...defaultGraphDefinition(),
              series,
            },
          },
        },
      };
      expect(graphsReducer(stateWithSeries, action)).toEqual(stateWithSeries); // Should not modify the state
    });

    // TODO, how to handle this type of error
    // it("should handle reordering to an invalid position", () => {
    //   const gid = "testGid";
    //   const wsid = "testWsid2";
    //   const pos = -1; // Invalid position
    //   const action = saveReorderSeriesAction({ gid, wsid, pos });
    //   const series = [{ wsid: "testWsid1" }, { wsid: "testWsid2" }];
    //   const stateWithSeries = {
    //     ...initialState,
    //     objects: {
    //       [gid]: {
    //         ...defaultGraph(),
    //         definition: {
    //           ...defaultGraphDefinition(),
    //           series,
    //         },
    //       },
    //     },
    //   };
    //   expect(graphsReducer(stateWithSeries, action)).toEqual(stateWithSeries); // Should not modify the state
    // });
  });

  describe("GRAPH_SAVE_CLEAR_SERIES", () => {
    it("should clear all series from an existing graph", () => {
      const gid = "testGid";
      const action = clearSeriesDefAction({ gid });
      const series = [{ wsid: "testWsid1" }, { wsid: "testWsid2" }];
      const stateWithSeries = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            definition: {
              ...defaultGraphDefinition(),
              series,
            },
            transformedSeries: {
              testWsid1: defaultResolvedSeries("testWsid1"),
              testWsid2: defaultResolvedSeries("testWsid2"),
            },
          },
        },
      };
      const expectedState = {
        ...stateWithSeries,
        objects: {
          [gid]: {
            ...stateWithSeries.objects[gid],
            definition: {
              ...stateWithSeries.objects[gid].definition,
              series: [],
            },
            transformedSeries: {},
          },
        },
      };
      expect(graphsReducer(stateWithSeries, action)).toEqual(expectedState);
    });

    it("should handle clearing series from a non-existent graph", () => {
      const gid = "nonExistentGid";
      const action = clearSeriesDefAction({ gid });
      expect(graphsReducer(initialState, action)).toEqual(initialState); // Should not modify the state
    });
  });

  describe("GRAPH_SAVE_SELECT_SERIES", () => {
    it("should select a series", () => {
      const gid = "testGid";
      const wsid = "testWsid";
      const action = saveSelectSeriesAction({ gid, wsid });
      const stateWithGraph = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            ui: {
              selected: [],
              export: {},
            },
          },
        },
      };
      const expectedState = {
        ...stateWithGraph,
        objects: {
          [gid]: {
            ...stateWithGraph.objects[gid],
            ui: {
              ...stateWithGraph.objects[gid].ui,
              selected: [wsid],
            },
          },
        },
      };
      expect(graphsReducer(stateWithGraph, action)).toEqual(expectedState);
    });

    it("should handle selecting a series in a non-existent graph", () => {
      const gid = "nonExistentGid";
      const wsid = "testWsid";
      const action = saveSelectSeriesAction({ gid, wsid });
      expect(graphsReducer(initialState, action)).toEqual(initialState); // Should not modify the state
    });

    it("should clear previous selection when clear is true", () => {
      const gid = "testGid";
      const wsid = "testWsid2";
      const action = saveSelectSeriesAction({ gid, wsid, clear: true });
      const stateWithGraph = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            ui: {
              selected: ["testWsid1"],
              export: {},
            },
          },
        },
      };
      const expectedState = {
        ...stateWithGraph,
        objects: {
          [gid]: {
            // Corrected the syntax error here
            ...stateWithGraph.objects[gid],
            ui: {
              ...stateWithGraph.objects[gid].ui,
              selected: [wsid], // The selected array should contain only wsid
            },
          },
        },
      };
      expect(graphsReducer(stateWithGraph, action)).toEqual(expectedState);
    });
  });

  describe("GRAPH_SAVE_DESELECT_SERIES", () => {
    it("should deselect a series", () => {
      const gid = "testGid";
      const wsid = "testWsid";
      const action = saveDeselectSeriesAction({ gid, wsid });
      const stateWithSeriesSelected = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            ui: {
              selected: [wsid],
              export: {},
            },
          },
        },
      };
      const expectedState = {
        ...stateWithSeriesSelected,
        objects: {
          [gid]: {
            ...stateWithSeriesSelected.objects[gid],
            ui: {
              ...stateWithSeriesSelected.objects[gid].ui,
              selected: [],
            },
          },
        },
      };
      expect(graphsReducer(stateWithSeriesSelected, action)).toEqual(
        expectedState
      );
    });

    it("should handle deselecting a series in a non-existent graph", () => {
      const gid = "nonExistentGid";
      const wsid = "testWsid";
      const action = saveDeselectSeriesAction({ gid, wsid });
      expect(graphsReducer(initialState, action)).toEqual(initialState); // Should not modify the state
    });

    it("should handle deselecting a non-existent series", () => {
      const gid = "testGid";
      const wsid = "nonExistentWsid";
      const action = saveDeselectSeriesAction({ gid, wsid });
      const stateWithSeriesSelected = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            ui: {
              selected: ["testWsid"],
              export: {},
            },
          },
        },
      };
      expect(graphsReducer(stateWithSeriesSelected, action)).toEqual(
        stateWithSeriesSelected
      ); // Should not modify the state
    });
  });

  describe("GRAPH_ERRORS_ADD", () => {
    it("should add errors to an existing graph", () => {
      const gid = "testGid";
      const errors = ["Error 1", "Error 2"];
      const action = addGraphErrorsAction({ gid, errors });
      const stateWithGraph = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            errors: [],
          },
        },
      };
      const expectedState = {
        ...stateWithGraph,
        objects: {
          [gid]: {
            ...stateWithGraph.objects[gid],
            errors,
          },
        },
      };
      expect(graphsReducer(stateWithGraph, action)).toEqual(expectedState);
    });

    it("should handle adding errors to a non-existent graph", () => {
      const gid = "nonExistentGid";
      const errors = ["Error 1", "Error 2"];
      const action = addGraphErrorsAction({ gid, errors });
      expect(graphsReducer(initialState, action)).toEqual(initialState); // Should not modify the state
    });
  });

  describe("GRAPH_ERRORS_CLEAR", () => {
    it("should clear errors for an existing graph", () => {
      const gid = "testGid";
      const action = clearGraphErrorsAction({ gid });
      const stateWithErrors = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            errors: ["Error 1", "Error 2"],
          },
        },
      };
      const expectedState = {
        ...stateWithErrors,
        objects: {
          [gid]: {
            ...stateWithErrors.objects[gid],
            errors: [],
          },
        },
      };
      expect(graphsReducer(stateWithErrors, action)).toEqual(expectedState);
    });

    it("should handle clearing errors for a non-existent graph", () => {
      const gid = "nonExistentGid";
      const action = clearGraphErrorsAction({ gid });
      expect(graphsReducer(initialState, action)).toEqual(initialState); // Should not modify the state
    });
  });

  describe("GRAPH_SAVE_DELETE_OBJECT", () => {
    it("should delete a graph object", () => {
      const gid = "testGid";
      const action = saveDeleteGraphObjectAction({ gid });
      const stateWithGraph = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
          },
        },
      };
      const expectedState = {
        ...stateWithGraph,
        objects: {},
      };
      expect(graphsReducer(stateWithGraph, action)).toEqual(expectedState);
    });

    it("should handle deleting a non-existent graph object", () => {
      const gid = "nonExistentGid";
      const action = saveDeleteGraphObjectAction({ gid });
      expect(graphsReducer(initialState, action)).toEqual(initialState); // Should not modify the state
    });
  });

  describe("GRAPH_SAVE_RESTORE_REDUCER", () => {
    it("should restore the reducer state", () => {
      const restoredState = {
        currentGraphId: "testGid",
        objects: {
          testGid: {
            ...defaultGraph(),
          },
        },
      };
      const action = restoreGraphReducer(restoredState);
      expect(graphsReducer(initialState, action)).toEqual(restoredState);
    });

    it("should handle restoring with an invalid state", () => {
      const restoredState = {}; // Invalid state
      const action = restoreGraphReducer(restoredState);
      expect(graphsReducer(initialState, action)).toEqual(initialState); // Should not modify the state
    });
  });

  describe("GRAPH_SAVE_EXPORT_OPTIONS", () => {
    it("should save export options for a graph", () => {
      const gid = "testGid";
      const opts = { format: "png" };
      const action = saveGraphExportOptionsAction({ gid, opts });
      const stateWithGraph = {
        ...initialState,
        objects: {
          [gid]: {
            ...defaultGraph(),
            ui: {
              selected: [],
              export: {},
            },
          },
        },
      };
      const expectedState = {
        ...stateWithGraph,
        objects: {
          [gid]: {
            ...stateWithGraph.objects[gid],
            ui: {
              ...stateWithGraph.objects[gid].ui,
              export: opts,
            },
          },
        },
      };
      expect(graphsReducer(stateWithGraph, action)).toEqual(expectedState);
    });

    it("should handle saving export options for a non-existent graph", () => {
      const gid = "nonExistentGid";
      const opts = { format: "png" };
      const action = saveGraphExportOptionsAction({ gid, opts });
      expect(graphsReducer(initialState, action)).toEqual(initialState); // Should not modify the state
    });
  });

  // ... (add tests for GRAPH_SAVE_CHART_REF if needed)

  it("should handle unknown action types", () => {
    const action = { type: "UNKNOWN_ACTION" };
    expect(graphsReducer(initialState, action as any)).toEqual(initialState);
  });
});
