import {
  seriesStoreSelector,
  seriesSelector,
  seriesDefListSelector,
  resolvedSeriesListSelector,
  resolvedSeriesSelector,
  resolvedSeriesFrequencySelector,
} from "./series"; // Import the selectors
import { SeriesKind, TSeriesKind } from "../sagas/series.constants";
import { ISeries, IResolvedSeries } from "../types/TSeries";
import { IFreq } from "../types/Tcommon";
import { IRootState } from "../../workbook/reducers";
import { ISeriesState } from "../reducers/seriesReducer";

describe("Series Selectors", () => {
  const mockRootState: IRootState = {
    series: {
      definition: {
        wsid1: {
          kind: TSeriesKind.data,
          freq: "D" as IFreq,
          wsid: "wsid1",
          name: "series1",
        },
        wsid2: {
          kind: TSeriesKind.expr,
          expr: "some expression",
          wsid: "wsid2",
          name: "series2",
        },
      },
      resolved: {
        wsid2: {
          kind: TSeriesKind.expr,
          freq: "W" as IFreq,
          wsid: "wsid2",
          name: "series2",
          expr: "resolved expression",
          errors: [] as any,
          status: "success" as any,
        },
      },
    } as unknown as ISeriesState, // Cast as unknown to avoid excess property checks in test setup

    // other mock state if needed in other tests for IRootState
  };

  it("seriesStoreSelector should return the series slice of state", () => {
    expect(seriesStoreSelector(mockRootState)).toEqual(mockRootState.series);
  });

  it("seriesSelector should return series definition for given wsid", () => {
    expect(seriesSelector("wsid1")(mockRootState)).toEqual(
      mockRootState.series.definition.wsid1
    );
    expect(seriesSelector("wsid3")(mockRootState)).toBeUndefined(); // Test for undefined case
  });

  it("seriesDefListSelector should return the series definition list", () => {
    expect(seriesDefListSelector(mockRootState)).toEqual(
      mockRootState.series.definition
    )
  });

  it("resolvedSeriesListSelector should return the resolved series list", () => {
    expect(resolvedSeriesListSelector(mockRootState)).toEqual(
      mockRootState.series.resolved
    );
  });

  it("resolvedSeriesSelector should return the resolved series for a given wsid", () => {
    expect(resolvedSeriesSelector("wsid1")(mockRootState)).toEqual(
      mockRootState.series.definition.wsid1
    ); // data series
    expect(resolvedSeriesSelector("wsid2")(mockRootState)).toEqual(
      mockRootState.series.resolved.wsid2
    ); // resolved expr series
    expect(resolvedSeriesSelector("wsid3")(mockRootState)).toBeUndefined(); // undefined case
  });

  it("resolvedSeriesFrequencySelector should return the frequency of the resolved series", () => {
    expect(resolvedSeriesFrequencySelector("wsid1")(mockRootState)).toEqual(
      "D"
    ); // Frequency from definition for data series
    expect(resolvedSeriesFrequencySelector("wsid2")(mockRootState)).toEqual(
      "W"
    ); // Frequency from resolved for expr series
    expect(
      resolvedSeriesFrequencySelector("wsid3")(mockRootState)
    ).toBeUndefined(); // Undefined case
  });
});
