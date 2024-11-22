import { createStore } from 'redux';
import timeseriesReducer, { ITimeseriesState } from "./timeseriesReducer";
import {
  saveTimeSeriesAction,
  saveTimeseriesListAction,
  saveTimeseriesDetailsAction,
  saveTimeseriesDeleteAction,
} from "../actions/timeseriesActions";

describe("timeseries reducer", () => {
  it("should return the initial state", () => {
    const store = createStore(timeseriesReducer);

    // Dispatch @@INIT manually
    store.dispatch({ type: "@@INIT" });

    // Check initial state
    expect(store.getState()).toEqual({
      timeseriesListByColl: {},
      timeseries: {},
      timeseriesDetails: null,
    });
  });

  it("should handle SAVE_TIMESERIES", () => {
    const timeseriesData = {
      tsid: "ts1",
      collId: "coll1",
      name: "Series 1",
      dtype: "int",
      freq: "M",
    };
    const action = saveTimeSeriesAction(timeseriesData);

    // Add a new timeseries
    let newState = timeseriesReducer(undefined, action);
    expect(newState.timeseries["ts1"]).toEqual(timeseriesData);
    expect(newState.timeseriesListByColl["coll1"]).toEqual([timeseriesData]);

    // Add another timeseries to the same collection
    const timeseriesData2 = {
      tsid: "ts2",
      collId: "coll1",
      name: "Series 2",
      dtype: "float",
      freq: "D",
    };
    const action2 = saveTimeSeriesAction(timeseriesData2);
    newState = timeseriesReducer(newState, action2);
    expect(newState.timeseries["ts2"]).toEqual(timeseriesData2);
    expect(newState.timeseriesListByColl["coll1"]).toEqual([
      timeseriesData,
      timeseriesData2,
    ]);
  });

  it("should handle SAVE_TIMESERIES_LIST", () => {
    const timeseriesList = [
      {
        tsid: "ts1",
        collId: "coll1",
        name: "Series 1",
        dtype: "int",
        freq: "M",
      },
      {
        tsid: "ts2",
        collId: "coll1",
        name: "Series 2",
        dtype: "float",
        freq: "D",
      },
    ];
    const action = saveTimeseriesListAction({
      collId: "coll1",
      timeseriesList,
    });
    const newState = timeseriesReducer(undefined, action);
    expect(newState.timeseriesListByColl["coll1"]).toEqual(timeseriesList);
  });

  it("should handle SAVE_TIMESERIES_DETAILS", () => {
    const details = {
      tsid: "ts1",
      collId: "coll1",
      name: "Series 1",
      dtype: "int",
      freq: "M",
      title: "My Series",
      description: "A detailed description",
    };
    const action = saveTimeseriesDetailsAction(details);
    const newState = timeseriesReducer(undefined, action);
    expect(newState.timeseriesDetails).toEqual(details);
  });

  it("should handle SAVE_TIMESERIES_DELETE", () => {
    const initialState: ITimeseriesState = {
      timeseriesListByColl: {
        coll1: [
          {
            tsid: "ts1",
            collId: "coll1",
            name: "Series 1",
            dtype: "int",
            freq: "M",
          },
          {
            tsid: "ts2",
            collId: "coll1",
            name: "Series 2",
            dtype: "float",
            freq: "D",
          },
        ],
      },
      timeseries: {
        ts1: {
          tsid: "ts1",
          collId: "coll1",
          name: "Series 1",
          dtype: "int",
          freq: "M",
        },
        ts2: {
          tsid: "ts2",
          collId: "coll1",
          name: "Series 2",
          dtype: "float",
          freq: "D",
        },
      },
      timeseriesDetails: null,
    };

    // Delete a single timeseries
    let action = saveTimeseriesDeleteAction("coll1", ["ts1"]);
    let newState = timeseriesReducer(initialState, action);
    expect(newState.timeseriesListByColl["coll1"].length).toBe(1);
    expect(newState.timeseriesListByColl["coll1"][0].tsid).toBe("ts2");
    expect(newState.timeseries["ts1"]).toBeUndefined();

    // Delete multiple timeseries
    action = saveTimeseriesDeleteAction("coll1", ["ts1", "ts2"]);
    newState = timeseriesReducer(initialState, action);
    expect(newState.timeseriesListByColl["coll1"].length).toBe(0);
    expect(newState.timeseries["ts1"]).toBeUndefined();
    expect(newState.timeseries["ts2"]).toBeUndefined();
  });
});
