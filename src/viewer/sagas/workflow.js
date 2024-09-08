/* eslint-disable */
/*
How is resolve graph?
1. resolve all series
  - Series can be defined (1) explicitely by coll_id and tsid and real_time (optional), or (2) by a mean of equation
  - Each series is evaluated asynchroniesly.
  - If series is an expression, resolving it means parsing and evaluate it.
      a) Expression is parsed
      b) required data is fetched if not available in local store
      c) expression is evaluated
        (Units are evaluated based on the expression (TODO))
  - if series is explicit (defined explictely) with coll_id, tsid, and real_time (optional)
  fetch series for specific 
  - all series are resolved asynchroniously
  - each one series failed the error message is stored with that series and displayed
  - `realtime` is a graph and each series parameter, which determined which version of data to pick up; user has ability to pick 
     historical version of data
  - if series has no real-time defined then default to real-time of graph
  - if graph has no realtime defined then use fetch data using current time (this time has ot be UTC), fetching data without providing current time will give you current data anyway.
  
2. Graph frequency is determined
 - graph can have a frequency set by a user or frequency is defermined automotaically
 - if frequency is automatically determined based on the frequency of the resolved time series, 
 - there are a few methods to do it
   - lowest frequency (graph frequency is the lowest frequency of all resolved series)
   - highest frequency (graph frequency is the highest frequency of all resolved series)
3. Series are transformed to graph frequency using methods specified in
  `ToLowerFrequencyMethod` and `ToHigherFrequencyMethod` parameters
  - these parameters can be set by user per series, for given graph, and for given workbook
  - if series doesn't have the parameter defined, then default to this parameter in the graph object,
    if it is not in graph object, default to parameter in document/workbook definition
4. Series are converted to desired currency and units are adjusted
5. Figure out all the graph options:
  a) Pick highcharts options for a theme piucked by user in graph object or default theme is used as defined in document/workbook
  b) apply all graph options from graph definition by overwritting theme options
6. constructed data and graph options are direct input to HighCharts; 
  - ! this has to be saved in the graph object !
  - when graph is saved to the databased, or workbook with this graph is saved to the database
    it has to be self-contained. This is because, user can share this graph with other users who 
    has to be able to display this graph without performing all the steps above
  - resolved graph have to have its definition saved as well, becuase another user can import this graph
    to his/her notebook in order to modify it






Add series data if 
Add annotations if enabled
Save in the store under state.graphs.realized
Every series added to the graph has a unique id generated, wsid (workbook series id)
*/

const defaults = {
  GraphSeriesMergeMethod: '',
  PartialPeriodsMethod: '',
  ToLowerFrequencyMethod: 'auto',
  ToHigherFrequencyMethod: 'auto',
  MissingValueMethod: ''
}

const graph = {
  title: {},
  series: [{
    wsid: 'adfds',
    // either expression
    expr: '$gdp.coll.space + 2',
    // or explicit reference to a series
    collId: undefined,
    tsid: undefined,
    vid: undefined,
    realtime: undefined,

    // resolved options
    PartialPeriodsMethod: undefined,
    ToLowerFrequencyMethod: undefined,
    ToHigherFrequencyMethod: undefined,
    MissingValueMethod: undefined,

    // formating
    name: '',
    color: '',
    label: '',
  }],
  GraphSeriesMergeMethod: undefined,
  // default method for all series
  PartialPeriodsMethod: undefined, 
  ToLowerFrequencyMethod: undefined,
  ToHigherFrequencyMethod: undefined,
  MissingValueMethod: undefined,

  resolved: [], // series fetched and evaluated

  transformed: [], // series transformed to graph frequency and converted to desired frequency

  output: {
    // highchart options passed directly to Highcharts component
  }
};

function parseExpr(expr, {default_collection, default_space}={}) {
  /*
  parse expression into ast and references to time series in the expression
  */
 
}

function realizeSeries(series, realtime) {
  try {
    ast, refs = parseExpr(series.expr);
  } catch {
    // any errors in parsing are displayed 
    return "Error"
  }
  
  fetch_series = fetch_references(refs, realtime)

  evaluate = evaluateExpr(ast, realtime)

}

function workflow(graph) {

  // realize each series
  realizedSeries = [];
  for (var series in graph.series) {
    realizedSeries += realizeSeries(series, realtime)
  }

  // determine graph frequency using realized series
  const graphFrequency = determineGraphFrequency(realizedSeries);
  
  // convert each series to graph frequency
  convertedRealizedSeries = [];
  for (var series in realizedSeries) {
    convertedRealizedSeries += convertToFrequency(series, graphFrequency);
  }

  // merge series, PartialPeriodsMethod

  finalSeries = [];
  for (var series in convertedRealizedSeries) {
    finalSeries += convertToFrequency(series, graphFrequency);
  }

  return {
    ...graph,
    ///////////
    realizedSeries,
    graphFrequency,
    finalSeries
  }
}

/*
graphDefinition
-> update of graph definition
-> sage picks up this action and determines what do do
  if update requires only change in formating then 
  outputGraph is generated with updated series
  if update required resolving series, then graph is saved with status: resolving and 
  series resolving saga is called, then 
  if 
-> saves graph with new definition and status: RESOLVING to the store
->

stages:
graph.definition
* resolution of series
graph.resolvedSeries is updated
* graphFreq determination
graph.freq is updated
* transforming Series
grapg.transformedSeries is updated
* graph generation
 - all graph options are determined based on the theme and user selection
graph.output is updated in the store and GraphComponent is updated
*/