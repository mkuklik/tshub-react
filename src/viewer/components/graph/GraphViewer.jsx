/* eslint-disable max-classes-per-file */
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { isNil, path } from 'ramda';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsOffLineExporting from 'highcharts/modules/offline-exporting';
import NoDataToDisplay from 'highcharts/modules/no-data-to-display';
import { Segment } from 'semantic-ui-react';
import { withSize } from 'react-sizeme';
import FlexView from 'react-flexview';
import { Spinner } from '@blueprintjs/core';
import { GraphType } from '../../types/Graph';
import GraphErrors from './GraphErrors.Container';
import { GraphStatus } from '../../sagas/graph.constants';
import { graphSaveChartRefAction } from '../../actions/graphActions';
import { currentGraphSelector, graphSelector } from '../../selectors/graph';
import highchartBlank from '../../sagas/graph.highchartBlank';

NoDataToDisplay(Highcharts);
HighchartsExporting(Highcharts);
HighchartsOffLineExporting(Highcharts);

// import * as Moment from "moment";
// import * as mTZ_ from "moment-timezone";
// import 'moment';
// import 'moment-timezone';
// window.moment = Moment;
// const mTZ = mTZ_;
// mTZ()
// console.log(mTZ);
// window["moment"] = Moment;


// const isObject = R.compose(R.equals('Object'), R.type);
// const allAreObjects = R.compose(R.all(isObject), R.values);
// const hasLeft = R.has('left');
// const hasRight = R.has('right');
// const hasBoth = R.both(hasLeft, hasRight);
// const isEqual = R.both(hasBoth, R.compose(R.apply(R.equals), R.values));

// const markAdded = R.compose(R.append(undefined), R.values);
// const markRemoved = R.compose(R.prepend(undefined), R.values);
// const isAddition = R.both(hasLeft, R.complement(hasRight));
// const isRemoval = R.both(R.complement(hasLeft), hasRight);

// function _diff(l, r) {
//   return R.compose(
//     R.map(R.cond([
//       [isAddition, markAdded],
//       [isRemoval, markRemoved],
//       [hasBoth, R.ifElse(
//         allAreObjects,
//         R.compose(R.apply(objectDiff), R.values),
//         R.values)
//       ]
//     ])),
//     R.reject(isEqual),
//     R.useWith(R.mergeWith(R.merge), [R.map(R.objOf('left')), R.map(R.objOf('right'))])
//   )(l, r);
// }
// const objectDiff = R.curry(_diff);


Highcharts.dateFormats.q = function (timestamp) {
  let date;
  if (timestamp instanceof Date) {
    date = timestamp;
  } else {
    date = new Date(timestamp);
  }
  const quarter = Math.floor(date.getUTCMonth() / 3) + 1;

  return quarter;
};

Highcharts.dateFormats.W = function (timestamp) {
  const date = new Date(timestamp);
  const day = date.getUTCDay() === 0 ? 7 : date.getUTCDay();

  date.setDate(date.getUTCDate() + 4 - day);
  const dayNumber = Math.floor(
    (date.getTime() - new Date(date.getUTCFullYear(), 0, 1, -6)) / 86400000,
  );

  return 1 + Math.floor(dayNumber / 7);
};

class GraphViewer extends React.Component {
  constructor(props) {
    super(props);
    this.chart = undefined;
    this.afterChartCreated = this.afterChartCreated.bind(this);
  }

  componentDidMount() {
    console.log('did mount');
  //   this.chartRef = React.createRef();
  //   this.props.graphSaveChartRef(this.chartRef);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { gid, size, graph } = this.props;
    if (
      !isNil(nextProps.size)
      && (nextProps.size.width !== size.width
      || nextProps.size.height !== size.height
      || nextProps.gid !== gid
      || nextProps.graph.status !== graph.status)
    ) {
      //       console.log('Graph render, size', nextProps.selected);
      return true;
    }
    if (!isNil(nextProps.graph)
      && (nextProps.graph.output !== graph.output && !isNil(this.chart))) {
      let opts = nextProps.graph.output;
      opts = this.sizeOptions(opts);

      try {
        this.chart.update(opts, true, true, true);
      } catch {
        // chart object gets corrupt on export and update() throw an error. this is a work around.
        return true;
      }
      // set series highlight on the graph
      this.chart.series.forEach((s) => {
        if (nextProps.selected.includes(s.options.wsid)) {
          s.setState('hover');
        } else {
          s.setState('');
        }
      });

      return false;
      // return true;
    }
    if (!isNil(nextProps.graph)
     && (nextProps.graph !== graph && isNil(this.chart))) {
      console.log('Graph render', nextProps.selected);
      return true;
    }

    return false;
  }


  sizeOptions = (opts) => {
    const { size } = this.props;

    if (!isNil(size) && isNil(path(['chart', 'height'], opts))) {
      console.log(size);
      opts = {
        ...opts,
        chart: {
          ...(path(['chart'], opts) || {}),
          height: size.height,
          width: size.width,
        },
      };
    }

    if (!isNil(size) && !isNil(path(['chart', 'height'], opts))) {
      const width = opts.chart.width || size.width;
      let height = opts.chart.height || size.height;
      if (opts.chart.height instanceof String) {
        height = parseFloat(height);
        height *= size.width;

        // for some reason this doesn't work :(
        // flexlayout still moves into
        // if (height > size.height) {
        //   height = size.height;
        //   width = height/size.width;
        // }
      }

      opts = {
        ...opts,
        chart: {
          ...(path(['chart'], opts) || {}),
          height,
          width,
        },
      };
    }
    return opts;
  };

  afterChartCreated(chart) {
    const { gid, graphSaveChartRef } = this.props;
    this.chart = chart;
    if (!chart.renderer.forExport) {
      graphSaveChartRef({ gid, ref: this.chart });
    } else {
      // this.chart.reflow();
      // this.forceUpdate();
    }
  }

  render() {
    const { graph, size } = this.props;
    let opts;
    if (graph !== undefined && graph.output !== undefined) {
      opts = graph.output;
    } else {
      opts = { ...highchartBlank };
    }
    const errors = graph !== undefined ? graph.errors : [];
    const loading = graph !== undefined
      ? [GraphStatus.LOADING, GraphStatus.UPDATING].includes(graph.status)
      : true;

    if (graph !== undefined && graph.status === GraphStatus.ERROR) {
      opts = { ...highchartBlank };
    }

    // for debugging
    // opts.chart.height = "60%";
    // opts.chart.width = 200;
    // opts.chart.height = 200;

    opts = this.sizeOptions(opts);

    console.log('opts', opts);
    if (isNil(size)) {
      return (
        <>
          <GraphErrors errors={errors} />
          <Segment basic loading={loading}>
            <HighchartsReact
              highcharts={Highcharts}
              constructorType="stockChart"
              options={opts}
              ref={this.chart}
              style={{ width: '100%', height: '100%' }}
              callback={this.afterChartCreated}
            />
          </Segment>
        </>
      );
    }
    console.log("size", size, opts, loading);
    console.log("status", graph.status, loading);
    return (
      <>
        {loading && (
        // <Segment basic style={{ minHeight: '400px' }}>
        <FlexView
          hAlignContent="center"
          vAlignContent="center"
          height="100%"
          width="100%"
          style={{ zIndex: 100, position: 'absolute' }}
        >
          <Spinner />
        </FlexView>
        // </Segment>
        )}
        {( //!loading && (
          // <FlexView
          //   hAlignContent="center"
          //   vAlignContent="center"
          //   height={size.height} // "100%"
          //   width={size.width} // "100%"
          // >
          <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
            <HighchartsReact
              highcharts={Highcharts}
              constructorType="stockChart"
              allowChartUpdate
              immutable={false}
              options={opts}
                // ref={this.chart}
              style={{ width: '100%', height: '100%' }}
              // style={{ width: size.width, height: size.height }}
              callback={this.afterChartCreated}
            />
            </div>
          // </FlexView>
        )}
      </>
    );
  }
}
/*
           <Segment basic>
             <GraphErrors errors={errors} />
            <FlexView
              hAlignContent="center"
              vAlignContent="center"
              height="100%"
              width="100%"
            >

               </FlexView>
           </Segment>

            */
GraphViewer.defaultProps = {
  graph: undefined,
  size: {},
  gid: undefined,
  selected: [],
};

GraphViewer.propTypes = {
  graph: GraphType,
  gid: PropTypes.string,
  selected: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  graphSaveChartRef: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { gid } = ownProps;
  const graph = gid ? graphSelector(gid)(state) : currentGraphSelector(state);
  const selected = path(['ui', 'selected'], graph) || [];
  return {
    graph,
    selected,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  graphSaveChartRef: graphSaveChartRefAction,
}, dispatch);

export const ConnectedGraphViewer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphViewer);

export default withSize({ monitorHeight: true, monitorWidth: true })(ConnectedGraphViewer);
