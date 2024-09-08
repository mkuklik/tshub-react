/* eslint-disable import/prefer-default-export */

const highchartBlank = {
  time: {
    timezoneOffset: 0, // should be equivalent to UTC
  },
  chart: {
  },
  title: {
  },
  subtitle: {
  },
  xAxis: {},
  series: [
  ],
  tooltip: {
  },
  plotOptions: {
  },
  rangeSelector: {
    enabled: false,
  },
  navigator: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  lang: {
    noData: "Add series to the graph"
  },
  noData: {
      style: {
          fontWeight: 'bold',
          fontSize: '15px',
          color: '#303030'
      }
  }
};

export default highchartBlank;
