import { path } from "ramda";
import { IRootState } from "../../workbook/reducers/index";
import { IFredSeries } from "../types/TFred";
// const fredStoreSelector = (state) => state.fred;
// const fredApiKeySelector = path(['fred', 'config', 'apiKey']);
// const fredRemoveDiscontinuedSelector = path(['fred', 'config', 'removeDiscontinued']);

const fredApiKeySelector = (state: IRootState) =>
  path(["fred", "config", "apiKey"], state);
const fredRemoveDiscontinuedSelector = (state: IRootState) =>
  path(["fred", "config", "removeDiscontinued"], state);

const fredSeriesByCategorySelector =
  (categoryId: number) =>
  (state: IRootState): IFredSeries[] => {
    const removeDiscontinued = fredRemoveDiscontinuedSelector(state);
    const timeseries: { [key: string]: IFredSeries } =
      path(["fred", "timeseries"], state) || {};
    const ids: string[] =
      path(["fred", "timeseriesByCategory", categoryId], state) || [];
    const results: IFredSeries[] = [];
    for (const id of ids) {
      const series: IFredSeries | undefined = path([id], timeseries);
      if (series && !(removeDiscontinued && series.isDiscontinued)) {
        results.push(series);
      }
    }
    return results;
  };

export {
  fredApiKeySelector,
  fredRemoveDiscontinuedSelector,
  fredSeriesByCategorySelector,
};
