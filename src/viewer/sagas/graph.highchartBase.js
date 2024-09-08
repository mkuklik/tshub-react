/* eslint-disable import/prefer-default-export */
import { getFormat } from '../utilities/format';

const highchartBase = (freq) => ({
  time: {
    // timezone: 'Etc/UTC', // REQUIRED FOR TIME TO ALIGN
    timezoneOffset: 0, // should be equivalent to UTC
  },
  chart: {
    type: 'line', // line, bar, column, etc
    // renderTo: 'graph-container', // div where my graph will be drawn
    // zoomType: 'x', // Making x-axis zoomable/scrollable
  },
  title: {
    // text: 'my title'
  },
  subtitle: {
    // text: document.ontouchstart === undefined ?
    //     'Click and drag in the plot area to zoom in' :
    //     'Pinch the chart to zoom in'
  },
  xAxis: [{
    type: 'datetime',
    labels: {
      format: `{value: ${getFormat(freq)}}`,
      rotation: -30,
    },
  }, {}],
  yAxis: [{}, {}],
  series: [
    /*
    {
      name,
      expression, // if undefined, expression if f(x)=x
      ...
      yAxis: 0 or 1
    }
    */
  ], // definition of series on the graph
  tooltip: {
    split: false,
    xDateFormat: getFormat(freq),
    headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
  },
  plotOptions: {
    series: {
      point: {
        events: {
          // mouseOver: this.setHoverData.bind(this)
        },
      },
    },
  },
  rangeSelector: {
    enabled: false,
  },
  navigator: {
    enabled: true,
    margin: 60,
  },
  exporting: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  scrollbar: {
    enabled: false,
  },
  lang: {
    noData: 'Add series to the graph',
  },
  noData: {
    style: {
      fontWeight: 'bold',
      fontSize: '15px',
      color: '#303030',
    },
  },
});

export default highchartBase;
