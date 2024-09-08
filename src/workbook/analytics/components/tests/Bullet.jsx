import * as React from 'react';
import styled from 'styled-components';

import '@blueprintjs/core/lib/css/blueprint.css';
import 'highcharts/css/highcharts.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
// import HighchartsBullet from 'highcharts/modules/bullet';

// HighchartsMore(Highcharts);
// HighchartsBullet(Highcharts);

(function (H) {
  H.seriesType('lineargauge', 'column', null, {
    setVisible() {
      H.seriesTypes.column.prototype.setVisible.apply(this, arguments);
      if (this.markLine) {
        this.markLine[this.visible ? 'show' : 'hide']();
      }
    },
    drawPoints() {
      // Draw the Column like always
      H.seriesTypes.column.prototype.drawPoints.apply(this, arguments);

      // Add a Marker
      const series = this;
      const { chart } = this;
      const { inverted } = chart;
      const { xAxis } = this;
      const { yAxis } = this;
      const point = this.points[0]; // we know there is only 1 point
      let { markLine } = this;
      const ani = markLine ? 'animate' : 'attr';

      // Hide column
      point.graphic.hide();

      if (!markLine) {
        const path = inverted ? ['M', 0, 0, 'L', -5, -5, 'L', 5, -5, 'L', 0, 0, 'L', 0, 0 + xAxis.len] : ['M', 0, 0, 'L', -5, -5, 'L', -5, 5, 'L', 0, 0, 'L', xAxis.len, 0];
        markLine = this.markLine = chart.renderer.path(path)
          .attr({
            fill: series.color,
            stroke: series.color,
            'stroke-width': 1,
          }).add();
      }
      markLine[ani]({
        translateX: inverted ? xAxis.left + yAxis.translate(point.y) : xAxis.left,
        translateY: inverted ? xAxis.top : yAxis.top + yAxis.len - yAxis.translate(point.y),
      });
    },
  });
}(Highcharts));

const GraphContainer = styled.div`
  width: 600px;
  height: 85px;
  display: flex;
  align-items: center;
`;


class Bullet extends React.PureComponent {
  render() {
    return (
      <GraphContainer>
        <HighchartsReact
          containerProps={{
            style: {
              maxWidth: '800px',
              height: '115px',
            },
          }}
          highcharts={Highcharts}
          options={
          {
            chart: {
              type: 'gauge',
              plotBackgroundColor: null,
              plotBackgroundImage: null,
              plotBorderWidth: 0,
              plotShadow: false,
            },

            title: {
              enabled: false,
            },

            pane: {
              startAngle: -150,
              endAngle: 150,
              background: [{
                backgroundColor: {
                  linearGradient: {
                    x1: 0, y1: 0, x2: 0, y2: 1,
                  },
                  stops: [
                    [0, '#FFF'],
                    [1, '#333'],
                  ],
                },
                borderWidth: 0,
                outerRadius: '109%',
              }, {
                backgroundColor: {
                  linearGradient: {
                    x1: 0, y1: 0, x2: 0, y2: 1,
                  },
                  stops: [
                    [0, '#333'],
                    [1, '#FFF'],
                  ],
                },
                borderWidth: 1,
                outerRadius: '107%',
              }, {
                // default background
              }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%',
              }],
            },

            // the value axis
            yAxis: {
              min: 0,
              max: 30,

              minorTickInterval: 'auto',
              minorTickWidth: 1,
              minorTickLength: 10,
              minorTickPosition: 'inside',
              minorTickColor: '#666',

              tickPixelInterval: 30,
              tickWidth: 2,
              tickPosition: 'inside',
              tickLength: 10,
              tickColor: '#666',
              labels: {
                step: 2,
                rotation: 'auto',
              },
              title: {
                text: 'p-value',
              },
              plotBands: [{
                from: 0.0,
                to: 1.0,
                color: '#55BF3B', // green
              }, {
                from: 1.0,
                to: 5.0,
                color: '#DDDF0D', // yellow
              }, {
                from: 5.0,
                to: 10,
                color: '#DF5353', // red
              }, {
                from: 10.0,
                to: 100,
                color: '#DF5953', // r
              }],
            },

            series: [{
              name: 'P-value',
              data: [20],
              // tooltip: {
              //   valueSuffix: ' km/h',
              // },
            }],

          }


          //   {
          //     chart: {
          //         type: 'lineargauge',
          //         inverted: true,
          //         height: 100
          //     },
          //     title: {
          //         text: 'A Horizontal Linear Gauge'
          //     },
          //     xAxis: {
          //         lineColor: '#C0C0C0',
          //         labels: {
          //             enabled: false
          //         },
          //         tickLength: 0
          //     },
          //     yAxis: {
          //         min: 0,
          //         max: 100,
          //         tickLength: 5,
          //         tickWidth: 1,
          //         tickColor: '#C0C0C0',
          //         gridLineColor: '#C0C0C0',
          //         gridLineWidth: 1,
          //         minorTickInterval: 5,
          //         minorTickWidth: 1,
          //         minorTickLength: 5,
          //         minorGridLineWidth: 0,

          //         title: null,
          //         labels: {
          //             format: '{value}%'
          //         },
          //         plotBands: [{
          //             from: 0,
          //             to: 40,
          //             color: 'rgba(255,0,0,0.5)',
          //             className: 'blabla',
          //         }, {
          //             from: 40,
          //             to: 80,
          //             color: 'rgba(255,255,0,0.5)'
          //         }, {
          //             from: 80,
          //             to: 100,
          //             color: 'rgba(0,255,0,0.5)'
          //         }]
          //     },
          //     legend: {
          //         enabled: false
          //     },

          //     series: [{
          //         data: [92],
          //         color: '#000000',
          //         dataLabels: {
          //             enabled: true,
          //             align: 'center',
          //             format: '{point.y}%'
          //         }
          //     }]

          // }

            // {
            //   chart: {
            //     inverted: true,
            //     marginLeft: 135,
            //     type: 'bullet',
            //     marginTop: 40,
            //   },
            //   title: {
            //     text: null,
            //   },
            //   legend: {
            //     enabled: false,
            //   },
            //   xAxis: {
            //     categories: 'P',
            //   },
            //   yAxis: {
            //     gridLineWidth: 0,
            //     plotBands: [{
            //       from: -1.9,
            //       to: -0.1,
            //       color: '#e51b1b',
            //     }, {
            //       from: -0.1,
            //       to: 1,
            //       color: '#fa7921',
            //     }, {
            //       from: 1,
            //       to: 1.5,
            //       color: '#fde74c',
            //     }, {
            //       from: 1.5,
            //       to: 4.4,
            //       color: '#9bc53d',
            //     }],
            //     labels: {
            //       format: '{value}%',
            //     },
            //     title: null,
            //   },
            //   pane: {
            //     borderColor: '#FFFFFF',
            //     background: [
            //       {
            //         borderColor: '#FFFFFF',
            //         opacity: 1.0,
            //       },
            //     ],
            //   },
            //   plotOptions: {
            //     series: {
            //       pointPadding: 0.25,
            //       borderWidth: 0,
            //       color: '#000',
            //       targetOptions: {
            //         width: '200%',
            //       },
            //     },
            //   },
            //   credits: {
            //     enabled: false,
            //   },
            //   exporting: {
            //     enabled: false,
            //   },
            //   series: [{
            //     data: [{
            //       y: 0,
            //       target: 2,
            //     }],
            //   }],
            //   tooltip: {
            //     pointFormat: '<b>{point.y}</b> (with target at {point.target})',
            //   },
            // }

            // {
            //   chart: {
            //     inverted: true,
            //     marginLeft: 135,
            //     type: 'bullet',
            //     height: '85px',
            //     // width: '300px',
            //   },
            //   xAxis: {
            //     categories: [''],
            //   },
            //   yAxis: {
            //     plotBands: [{
            //       from: 0,
            //       to: 150,
            //       color: '#666',
            //       // label: {
            //       //   text: '1%',
            //       //   rotation: 0,
            //       //   // verticalAlign: "top",
            //       //   align: 'right',
            //       //   y: -10,
            //       //   style: {
            //       //   // color: 'red',
            //       //   },
            //       // },
            //     }, {
            //       from: 150,
            //       to: 225,
            //       color: '#999',
            //     }, {
            //       from: 225,
            //       to: 9e9,
            //       color: '#bbb',
            //     }],
            //     title: null,
            //   },
            //   series: [{
            //     data: [{
            //       // y: 275,
            //       target: 250,
            //     }],
            //   }],
            //   credits: {
            //     enabled: false,
            //   },
            //   exporting: {
            //     enabled: false,
            //   },
            //   title: {
            //     text: null,
            //   },
            //   legend: {
            //     enabled: false,
            //   },
            // }

          //   {
          //   chart: {
          //     width: "400px",
          //     height: "85px",
          //     // marginTop: 40,
          //     inverted: true,
          //     // marginLeft: 135,
          //     type: 'bullet',
          //   },
          //   title: {
          //     text: null,
          //   },
          //   legend: {
          //     enabled: false,
          //   },
          //   plotOptions: {
          //     series: {
          //       // pointWidth: 15,
          //       // pointHeight: 15,
          //       pointPadding: 0.25,
          //       borderWidth: 0,
          //       color: '#000',
          //       targetOptions: {
          //         width: '200%',
          //       },
          //     },
          //   },
          //   credits: {
          //     enabled: false,
          //   },
          //   exporting: {
          //     enabled: false,
          //   },
          //   xAxis: {
          //     categories: [''],
          //   },
          //   yAxis: {
          //     gridLineWidth: 0,
          //     plotBands: [{
          //       from: -9e9,
          //       to: -3.4537536300652,
          //       color: '#05ff3f',
          //       label: {
          //         text: '1%',
          //         rotation: 0,
          //         // verticalAlign: "top",
          //         align: 'right',
          //         y: -10,
          //         style: {
          //           // color: 'red',
          //         },
          //       },
          //     }, {
          //       from: -3.4537536300652,
          //       to: -2.8718443180148836,
          //       color: '#c8ff05',
          //       label: {
          //         text: '5%',
          //         rotation: 0,
          //         // verticalAlign: "top",
          //         align: 'right',
          //         y: -10,
          //         style: {
          //           // color: 'red',
          //         },
          //       },
          //     }, {
          //       from: -2.8718443180148836,
          //       to: -2.572260641818822,
          //       color: '#ffb705',
          //       label: {
          //         text: '10%',
          //         rotation: 0,
          //         // verticalAlign: "top",
          //         align: 'right',
          //         y: -10,
          //         style: {
          //           // color: 'red',
          //         },
          //       },
          //     },
          //     {
          //       from: -2.572260641818822,
          //       to: 9e9,
          //       color: '#ff0505',
          //       // label: {
          //       //   text: '10%',
          //       //   rotation: 0,
          //       //   align: 'right',
          //       //   y: -10,
          //       //   style: {
          //       //     color: 'red',
          //       //   },
          //       // },
          //     }],
          //     title: {
          //       text: 'ADF statistics',
          //     },
          //   },
          //   series: [{
          //     data: [{
          //       target: -2.57,
          //     }],
          //   }],
          // }
        }
        />
      </GraphContainer>
    );
  }
}

export default Bullet;
