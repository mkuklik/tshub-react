import * as R from 'ramda';
import { isMoment } from 'moment';
import {
  GRAPH_SAVE_NEW_GRAPH,
  GRAPH_SAVE_GRAPH_OBJECT,
  GRAPH_SAVE_APPEND_SERIES,
  GRAPH_SAVE_REMOVE_SERIES,
  GRAPH_SAVE_CLEAR_SERIES,
  GRAPH_SAVE_REORDER_SERIES,
  GRAPH_ERRORS_ADD,
  GRAPH_ERRORS_CLEAR,
  GRAPH_UPDATE_STATUS, // main process
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
  GRAPH_SAVE_CHART_REF,
  GRAPH_SAVE_EXPORT_OPTIONS,
  GRAPH_SAVE_CURRENT_GID,
  GRAPH_SAVE_DELETE_OBJECT,
} from '../actions/graphActions';

import {
  defaultGraph,
  defaultGraphDefinition,
  defaultResolvedSeries,
} from '../sagas/graph.defaults';
import { GraphPropNames, SeriesPropNames, GraphUIPropNames } from '../types/Graph';
import { GraphStatus } from '../sagas/graph.constants';

const reorder = (data, wsid, pos) => {
  let res = [];
  let i = 0;
  const item = data.find((x) => x.wsid === wsid);

  for (let p = 0; p < data.length; p += 1) {
    if (pos === p) {
      res = [...res, item];
    } else if (data[i].wsid === wsid) {
      i += 1; // skip
      res = [...res, data[i]];
      i += 1;
    } else {
      res = [...res, data[i]];
      i += 1;
    }
  }
  return res;
};

const initialState = {
  currentGraphId: undefined,
  theme: undefined,
  errors: [],
  objects: {
    // gid -> GraphObject
  },
};

const graphs = (state = initialState, action) => {
  switch (action.type) {
    case GRAPH_SAVE_NEW_GRAPH:
    {
      const {
        gid, freq, title, subtitle, legend,
      } = action.payload;
      return {
        ...state,
        objects: {
          ...state.objects,
          [gid]: {
            ...defaultGraph(),
            definition: {
              ...defaultGraphDefinition({ title, subtitle, legend }),
              freq,
            },
          },
        },
      };
    }
    case GRAPH_SAVE_GRAPH_OBJECT:
    {
      return {
        ...state,
        objects: {
          ...state.objects,
          [action.payload.gid]: action.payload.object,
        },
      };
    }

    case GRAPH_SAVE_CURRENT_GID: {
      const { gid } = action.payload;
      return {
        ...state,
        currentGraphId: gid,
      };
    }
    case GRAPH_SAVE_APPEND_SERIES:
    {
      const { gid, series } = action.payload;
      if (!R.has(gid, state.objects)) {
        console.error(`GRAPH_APPEND_SERIES: graph object [${gid}] not found`);
        return state;
      }
      const old = state.objects[gid];

      // TODO check if series already in definition
      const graph = {
        ...old,
        definition: {
          ...old.definition,
          series: [...old.definition.series, series],
        },
        transformedSeries: {
          ...old.transformedSeries,
          [series.wsid]: defaultResolvedSeries(series.wsid),
        },
      };

      return {
        ...state,
        objects: {
          ...state.objects,
          [gid]: graph,
        },
      };
    }

    case GRAPH_SAVE_REMOVE_SERIES:
    {
      const { gid, wsid } = action.payload;
      // const old = state.objects[gid] || { series: [] };
      if (!R.has(gid, state.objects)) {
        console.error(`GRAPH_REMOVE_SERIES: graph object [${gid}] not found`);
        return state;
      }
      const series = state.objects[gid].definition.series.filter((x) => x.wsid !== wsid);
      const transformedSeries = R.omit([wsid], state.objects[gid].transformedSeries);
      // .filter((x) => x.wsid !== wsid);

      const graph = {
        ...state.objects[gid],
        definition: {
          ...state.objects[gid].definition,
          series,
        },
        transformedSeries,
      };

      return {
        ...state,
        objects: {
          ...state.objects,
          [gid]: graph,
        },
      };
    }

    case GRAPH_SAVE_REPLACE_SERIES:
    {
      // eslint-disable-next-line camelcase
      const { gid, wsid, to_wsid } = action.payload;
      if (!R.has(gid, state.objects)) {
        console.error(`GRAPH_SAVE_REPLACE_SERIES: graph object [${gid}] not found`);
        return state;
      }
      const old = state.objects[gid];

      const graph = {
        ...old,
        definition: {
          ...old.definition,
          series: R.map((s) => (
            (s.wsid === wsid) ? { ...s, wsid: to_wsid } : s), old.definition.series),
        },
        transformedSeries: {
          ...R.filter((s) => (s.wsid !== wsid), old.transformedSeries),
          [to_wsid]: defaultResolvedSeries(to_wsid),
        },
      };

      return {
        ...state,
        objects: {
          ...state.objects,
          [gid]: graph,
        },
      };
    }

    case GRAPH_SAVE_GRAPH_PROPS: {
      const { gid, props } = action.payload;
      if (!R.has(gid, state.objects)) {
        console.error(`GRAPH_SAVE_GRAPH_PROPS: graph object [${gid}] not found`);
        return state;
      }
      const old = state.objects[gid];
      const tmp = R.pick(GraphPropNames, props);
      // merge nested properties
      const newdef = R.mergeDeepRight(old.definition, tmp);
      // deep merge strips realtime off the Moment class. therefore we set realtime
      // to undefined.
      if (isMoment(props.realtime)) {
        newdef.realtime = props.realtime;
      }

      const graph = {
        ...old,
        definition: newdef,
        // {
        //   ...old.definition,
        //   ...tmp,
        // },
      };

      return {
        ...state,
        objects: {
          ...state.objects,
          [gid]: graph,
        },
      };
    }
    case GRAPH_SAVE_UI_PROPS: {
      const { gid, props } = action.payload;
      if (!R.has(gid, state.objects)) {
        console.error(`GRAPH_SAVE_UI_PROPS: graph object [${gid}] not found`);
        return state;
      }
      const old = state.objects[gid];
      const tmp = R.pick(GraphUIPropNames, props);
      const graph = {
        ...old,
        ui: {
          ...old.ui,
          ...tmp,
        },
      };

      return {
        ...state,
        objects: {
          ...state.objects,
          [gid]: graph,
        },
      };
    }

    case GRAPH_SAVE_SERIES_PROPS: {
      const { gid, wsid, props } = action.payload;
      if (!R.has(gid, state.objects)) {
        console.error(`GRAPH_UPDATE_SERIES: graph object [${gid}] not found`);
        return state;
      }
      const old = state.objects[gid];
      const series = old.definition.series.map((x) => ((x.wsid !== wsid)
        ? x
        : R.mergeDeepRight(x, R.pick(SeriesPropNames, props))
        // {
        //   ...x,
        //   ...R.pick(SeriesPropNames, props),
        // }
      ));

      const graph = {
        ...old,
        definition: {
          ...old.definition,
          series,
        },
      };

      return {
        ...state,
        objects: {
          ...state.objects,
          [gid]: graph,
        },
      };
    }
    case GRAPH_SAVE_DETERMINED_FREQ:
    {
      const { gid, freq } = action.payload;
      if (!R.has(gid, state.objects)) {
        console.error(`GRAPH_SAVE_DETERMINED_FREQ: graph object [${gid}] not found`);
        return state;
      }
      const old = state.objects[gid];
      const graph = {
        ...old,
        determinedFreq: freq,
      };
      return {
        ...state,
        objects: {
          ...state.objects,
          [gid]: graph,
        },
      };
    }
    case GRAPH_SAVE_TRANSFORMED_SERIES:
    {
      const { gid, wsid, data } = action.payload;
      if (!R.has(gid, state.objects)) {
        console.error(`GRAPH_SAVE_TRANSFORMED_SERIES: graph object [${gid}] not found`);
        return state;
      }
      const old = state.objects[gid];
      const graph = {
        ...old,
        transformedSeries: {
          ...old.transformedSeries,
          [wsid]: data,
        },
      };
      return {
        ...state,
        objects: {
          ...state.objects,
          [gid]: graph,
        },
      };
    }
    case GRAPH_SAVE_TRANSFORMED_SERIES_BULK:
    {
      const { gid, transformedSeries } = action.payload;
      if (!R.has(gid, state.objects)) {
        console.error(`GRAPH_SAVE_TRANSFORMED_SERIES_BULK: graph object [${gid}] not found`);
        return state;
      }
      const old = state.objects[gid];
      const graph = {
        ...old,
        transformedSeries: {
          ...transformedSeries,
        },
      };
      return {
        ...state,
        objects: {
          ...state.objects,
          [gid]: graph,
        },
      };
    }
    case GRAPH_SAVE_OUTPUT:
    {
      const { gid, output } = action.payload;
      if (!R.has(gid, state.objects)) {
        console.error(`GRAPH_UPDATE_OUTPUT: graph object [${gid}] not found`);
        return state;
      }
      const old = state.objects[gid];
      const graph = {
        ...old,
        output,
        status: GraphStatus.READY,
      };
      return {
        ...state,
        objects: {
          ...state.objects,
          [gid]: graph,
        },
      };
    }
    case GRAPH_UPDATE_STATUS:
    {
      const { gid, status } = action.payload;
      if (!R.has(gid, state.objects)) {
        console.error(`GRAPH_UPDATE_STATUS: graph object [${gid}] not found`);
        return state;
      }
      const old = state.objects[gid];
      const graph = {
        ...old,
        status,
      };
      return {
        ...state,
        objects: {
          ...state.objects,
          [gid]: graph,
        },
      };
    }
    case GRAPH_SAVE_REORDER_SERIES:
    {
      const { gid, wsid, pos } = action.payload;
      if (!R.has(gid, state.objects)) {
        console.error(`GRAPH_SAVE_REORDER_SERIES: graph object [${gid}] not found`);
        return state;
      }
      const old = state.objects[gid];
      const series = reorder(old.definition.series, wsid, pos);

      const graph = {
        ...state.objects[gid],
        definition: {
          ...state.objects[gid].definition,
          series,
        },
      };

      return {
        ...state,
        objects: {
          ...state.objects,
          [gid]: graph,
        },
      };
    }
    case GRAPH_SAVE_CLEAR_SERIES:
    {
      const { gid } = action.payload;
      if (!R.has(gid, state.objects)) {
        console.error(`GRAPH_CLEAR_SERIES: graph object [${gid}] not found`);
        return state;
      }
      const graph = {
        ...state.objects[gid],
        definition: {
          ...state.objects[gid].definition,
          series: [],
        },
        transformedSeries: {},
      };
      return {
        ...state,
        objects: {
          ...state.objects,
          [gid]: graph,
        },
      };
    }
    case GRAPH_SAVE_SELECT_SERIES:
    {
      const { gid, wsid, clear } = action.payload;
      if (!R.has(gid, state.objects)) {
        console.error(`GRAPH_SAVE_SELECT_SERIES: graph object [${gid}] not found`);
        return state;
      }
      const graph = {
        ...state.objects[gid],
        ui: {
          ...state.objects[gid].ui,
          selected: (clear || false) ? [wsid] : [...state.objects[gid].ui.selected, wsid],
        },
      };
      return {
        ...state,
        objects: {
          ...state.objects,
          [gid]: graph,
        },
      };
    }
    case GRAPH_SAVE_DESELECT_SERIES:
    {
      const { gid, wsid } = action.payload;
      if (!R.has(gid, state.objects)) {
        console.error(`GRAPH_SAVE_DESELECT_SERIES: graph object [${gid}] not found`);
        return state;
      }
      const graph = {
        ...state.objects[gid],
        ui: {
          ...state.objects[gid].ui,
          selected: R.filter((x) => x !== wsid, state.objects[gid].ui.selected) || [],
        },
      };
      return {
        ...state,
        objects: {
          ...state.objects,
          [gid]: graph,
        },
      };
    }
    case GRAPH_ERRORS_ADD:
    {
      const { gid, errors } = action.payload;
      if (!R.has(gid, state.objects)) {
        console.error(`GRAPH_ADD_ERRORS: graph object [${gid}] not found`);
        return state;
      }
      const old = state.objects[gid];
      return {
        ...state,
        objects: {
          ...state.objects,
          [gid]: {
            ...old,
            errors: [...old.errors, ...errors],
          },
        },
      };
    }
    case GRAPH_ERRORS_CLEAR:
    {
      const { gid } = action.payload;
      if (!R.has(gid, state.objects)) {
        console.error(`GRAPH_CLEAR_ERRORS: graph object [${gid}] not found`);
        return state;
      }
      const old = state.objects[gid];
      return {
        ...state,
        objects: {
          ...state.objects,
          [gid]: {
            ...old,
            errors: [],
          },
        },
      };
    }
    case GRAPH_SAVE_DELETE_OBJECT:
      return {
        ...state,
        objects: R.omit([action.payload.gid], state.objects),
      };

    case GRAPH_SAVE_RESTORE_REDUCER:
      return {
        ...state,
        ...action.payload,
      };
    case GRAPH_SAVE_EXPORT_OPTIONS:
    {
      const { gid, opts } = action.payload;
      if (!R.has(gid, state.objects)) {
        console.error(`GRAPH_SAVE_EXPORT_OPTIONS: graph object [${gid}] not found`);
        return state;
      }
      const graph = {
        ...state.objects[gid],
        ui: {
          ...state.objects[gid].ui,
          export: {
            ...state.objects[gid].ui.export,
            ...opts,
          },
        },
      };
      return {
        ...state,
        objects: {
          ...state.objects,
          [gid]: graph,
        },
      };
    }
    case GRAPH_SAVE_CHART_REF:
    {
      const tmp = R.path(['objects', action.payload.gid, 'ui'], state);
      if (!R.isNil(tmp)) tmp.chartRef = action.payload.ref;
      return state;
    }

    default:
      return state;
  }
};

export default graphs;
