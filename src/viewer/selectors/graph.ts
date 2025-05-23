import * as R from 'ramda';
import { keyBuilder } from '../reducers/namespaceReducer';
import type {
    IGraphType,
    IGraphDefinitionType,
    ISeriesDefinitionType,
    ITransformedSeriesType,
    IResolvedSeriesType,
    IGraphUIType,
    IErrorType,
} from '../types/TGraph';
import type { IFreq } from '../types/Tcommon';
import type { IRootState } from '../../workbook/reducers/index';
import type { IDefaultsState } from '../reducers/defaultReducer';


// Selector functions with proper types
export const graphsReducerSelector = (state: IRootState) => state.graphs;

export const obsSelector = (tsid: string) => (state: IRootState): any | undefined => state.obs[tsid]; // TODO: fix type

export const defaultsSelector = (state: IRootState): IDefaultsState => state.defaults;

export const getGraphObjects = (state: IRootState): { [key: string]: IGraphType } => state.graphs.objects;

export const graphSelector = (gid: string) => (state: IRootState): IGraphType | undefined => state.graphs.objects[gid];

export const currentGraphUISelector = (gid: string) => (state: IRootState): IGraphUIType | undefined => {
    const graph = state.graphs.objects[gid];
    if (graph === undefined) return undefined;
    return graph.ui;
};

export const currentGraphGidSelector = (state: IRootState): string | undefined => state.graphs.currentGraphId;
export const currentGraphSelector = (state: IRootState): IGraphType | undefined => {
    const graphId = state.graphs.currentGraphId;
    return graphId ? state.graphs.objects[graphId] : undefined;
};

export const currentGraphUI = (state: IRootState): IGraphUIType | undefined => {
    const graph = currentGraphSelector(state);
    if (graph === undefined) return undefined;
    return graph.ui;
};

export const currentGraphSeriesDeterminedFreqSelector = (state: IRootState): IFreq | undefined => {
    const graph = currentGraphSelector(state);
    if (graph === undefined) return undefined;
    return graph.determinedFreq;
};

export const currentGraphSeriesTransformedSelector = (state: IRootState): ITransformedSeriesType | undefined => {
    const graph = currentGraphSelector(state);
    if (graph === undefined) return undefined;
    return graph.transformedSeries;
};

export const currentGraphDefSelector = (state: IRootState): IGraphDefinitionType => {
    const graph = currentGraphSelector(state);
    if (graph === undefined) return { series: [] };
    return graph.definition;
};

export const currentGraphSeriesDefSelector = (state: IRootState): ISeriesDefinitionType[] => {
    const graph = currentGraphSelector(state);
    if (graph === undefined) return [];
    return graph.definition.series;
};

export const currentGraphErrorsSelector = (state: IRootState): IErrorType[] => {
    const graph = currentGraphSelector(state);
    if (graph === undefined) return [];
    return graph.errors || [];
};

export const graphSeriesDefSelector = (gid: string) => (state: IRootState): ISeriesDefinitionType[] | undefined => {
    if (state.graphs.objects[gid] !== undefined) {
        return R.path(['definition', 'series'], state.graphs.objects[gid]);
    }
    return undefined;
};

export const currentGraphSelectedSeriesSelector = (state: IRootState): string[] | undefined => {
    const graph = currentGraphSelector(state);
    if (R.isNil(graph)) return undefined;
    return R.path(['ui', 'selected'], graph);
};

export const currentGraphChartRefSelector = (state: IRootState): React.RefObject<unknown> | undefined => {
    const graph = currentGraphSelector(state);
    if (R.isNil(graph)) return undefined;
    return R.path(['ui', 'chartRef'], graph);
};

export const currentGraphExportOptionsSelector = (state: IRootState): Record<string, unknown> | undefined => {
    const graph = currentGraphSelector(state);
    if (R.isNil(graph)) return undefined;
    return R.path(['ui', 'export'], graph);
};

export const graphFreqSelector = (gid: string) => (state: IRootState): IFreq | undefined => {
    if (state.graphs.objects[gid] !== undefined) {
        return state.graphs.objects[gid].determinedFreq;
    }
    return undefined;
};

export const namespaceTimeSeriesSelector = (spaceName: string, collName: string, tsName: string) =>
    (state: IRootState): IResolvedSeriesType | undefined => {
        const key = keyBuilder(spaceName, collName, tsName);
        return state.namespace[key];
    };

export const graphRealtimeSelector = (gid: string) => (state: IRootState): Date | undefined => {
    if (state.graphs.objects[gid] !== undefined) {
        return R.path(['definition', 'realtime'], state.graphs.objects[gid]);
    }
    return undefined;
}; 