import { path } from "ramda";
import { IRootState } from "../../workbook/reducers/index";
import { IFredSeries } from "../types/TFred";
import {
  fredApiKeySelector,
  fredRemoveDiscontinuedSelector,
  fredSeriesByCategorySelector,
} from "./fred";

// Mock state
const mockRootState: any = {
  fred: {
    config: {
      apiKey: "testApiKey",
      removeDiscontinued: true,
    },
    categories: {},
    timeseriesByCategory: {
      1: ["id1", "id2"],
      2: ["id3"],
    },
    timeseries: {
      id1: { id: "id1", isDiscontinued: true } as IFredSeries,
      id2: { id: "id2", isDiscontinued: false } as IFredSeries,
      id3: { id: "id3", isDiscontinued: false } as IFredSeries,
      id4: { id: "id4", isDiscontinued: true } as IFredSeries,
      id5: { id: "id5", isDiscontinued: false } as IFredSeries,
    },
  },
};

describe("fred selectors", () => {
  it("should select fredApiKey", () => {
    expect(fredApiKeySelector(mockRootState)).toEqual("testApiKey");
  });

  it("should select fredRemoveDiscontinued", () => {
    expect(fredRemoveDiscontinuedSelector(mockRootState)).toEqual(true);
  });

  it("should select fredSeriesByCategory and filter discontinued", () => {
    expect(fredSeriesByCategorySelector(1)(mockRootState)).toEqual([
      { id: "id2", isDiscontinued: false },
    ]);
  });

  it("should select fredSeriesByCategory and not filter discontinued if removeDiscontinued is false", () => {
    const mockRootState2 = { ...mockRootState };
    mockRootState2.fred.config.removeDiscontinued = false;

    expect(fredSeriesByCategorySelector(1)(mockRootState2)).toEqual([
      { id: "id1", isDiscontinued: true },
      { id: "id2", isDiscontinued: false },
    ]);
  });

  it("should select fredSeriesByCategory and handle empty category", () => {
    expect(fredSeriesByCategorySelector(3)(mockRootState)).toEqual([]);
  });

  it("should select fredSeriesByCategory and return empty array for categoryId", () => {
    const mockStateWithoutCategory = { ...mockRootState };
    mockStateWithoutCategory.fred.timeseriesByCategory = {};
    expect(fredSeriesByCategorySelector(1)(mockStateWithoutCategory)).toEqual(
      []
    );
  });
});
