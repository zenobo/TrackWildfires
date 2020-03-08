import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chart from 'chart.js';

import {abbreviateNumber} from 'utility'

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    const lineColor = 'rgba(255, 255, 255, 0.37)';
		const color = Chart.helpers.color;
    const {labels, sizes} = this.props.items;

		const horizontalBarChartData = {
			labels: labels,
			datasets: [{
				label: 'Acres Burned',
				backgroundColor: this.getBarColors(),
				borderColor: 'white',
				borderWidth: 1,
				data: sizes
			}]
		};

		window.onload = function() {
			const ctx = document.getElementById('header-barchart').getContext('2d');
			window.myHorizontalBar = new Chart(ctx, {
				type: 'horizontalBar',
				data: horizontalBarChartData,
				options: {
					elements: {
						rectangle: {
							borderWidth: 2,
						}
					},
          animation: false,
          responsive: true,
          maintainAspectRatio: false,
					legend: {
						position: 'right',
					},
					title: {
						display: false
					},
          gridLines: {
            display: false ,
            color: 'white'
          },
          legend: {
            display:false
          },
          tooltips: {
            backgroundColor: '#fe7030',
            borderColor: 'white',
						borderWidth: 1,
            cornerRadius: 1,
            displayColors: false,
            callbacks: {
                label: function(label, data) {
                    return label.xLabel.toLocaleString() + ' Acres Burned';
                }
            }
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false,
                color: 'white'
              },
              ticks: {
                fontColor: 'white',
                beginAtZero: true,
                autoSkip: true,
                maxTicksLimit: 7,
                userCallback: function(label, index, labels) {
                  if(label=='0') return '0';
                  return abbreviateNumber(label) + ' Acres';
                }
              },
              scaleLabel: {
                display: false,
              }
            }],
            yAxes: [{
              gridLines: {
                display: false,
                color: lineColor,
                zeroLineColor: '#ffffff00',
              },
              ticks: {
                fontColor: 'white',
              }
            }]
          }
				}
			});

		};
  }

  getBarColors = () => {
    const color = Chart.helpers.color;
    let { labels, singleFire } = this.props.items;
    const fireColor = color('white');
    return labels.map((item, i) => (
      singleFire.name == labels[i] ? fireColor.alpha(1).rgbString() : fireColor.alpha(0.5).rgbString()
    ));
  }

  render() {
    return (
      <div className="bar-chart">
        <p className="chart-title">Top 10 over the past 20 years</p>
        <div className="chart-container">
          <canvas id="header-barchart"></canvas>
        </div>
        <p>Total acres burned (millions)</p>
      </div>
    );
  }
}


BarChart.propTypes = {
};

const mapStateToProps = (state) => ({
  items: state.items
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(BarChart);
