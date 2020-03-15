import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chart from 'chart.js';

import { abbreviateNumber } from 'utility';

import { fires } from '../../../data/constants';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const lineColor = 'rgba(255, 255, 255, 0.37)';
    const { items } = this.props;
    const { labels, sizes } = items;
    const { getXAxesTicks } = this;

    const horizontalBarChartData = {
      labels,
      datasets: [{
        label: 'Acres Burned',
        backgroundColor: this.getBarColors(),
        borderColor: 'white',
        borderWidth: 1,
        data: sizes,
      }],
    };

    window.onload = () => {
      const ctx = document.getElementById('header-barchart').getContext('2d');
      window.myHorizontalBar = new Chart(ctx, {
        type: 'horizontalBar',
        data: horizontalBarChartData,
        options: {
          elements: {
            rectangle: {
              borderWidth: 2,
            },
          },
          animation: false,
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: false,
          },
          gridLines: {
            display: false,
            color: 'white',
          },
          legend: {
            display: false,
          },
          tooltips: {
            backgroundColor: '#fe7030',
            borderColor: 'white',
            borderWidth: 1,
            cornerRadius: 1,
            displayColors: false,
            callbacks: {
              label: (label) => (
                `${label.xLabel.toLocaleString()} Acres Burned`
              ),
            },
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false,
                color: 'white',
              },
              ticks: {
                fontColor: 'white',
                beginAtZero: true,
                autoSkip: true,
                maxTicksLimit: getXAxesTicks(),
                userCallback: (label) => (
                  label === '0' ? label : `${abbreviateNumber(label)} Acres`
                ),
              },
              scaleLabel: {
                display: false,
              },
            }],
            yAxes: [{
              gridLines: {
                display: false,
                color: lineColor,
                zeroLineColor: '#ffffff00',
              },
              ticks: {
                fontColor: 'white',
                callback: (value, index) => {
                  if (window.screen.width < 650) {
                    return fires[index].shortName;
                  }
                  return value;
                },
              },
            }],
          },
        },
      });
    };
  }

  getBarColors = () => {
    const {
      helpers: {
        color,
      },
    } = Chart;
    const {
      items: {
        labels, singleFire,
      },
    } = this.props;
    const fireColor = color('white');
    return labels.map((item, i) => (
      singleFire.name === labels[i]
        ? fireColor.alpha(1).rgbString()
        : fireColor.alpha(0.5).rgbString()
    ));
  }

  getXAxesTicks = () => (
    window.screen.width < 650
      ? 2
      : 4
  )

  render() {
    return (
      <div className="bar-chart">
        <p className="chart-title">Top 10 over the past 20 years</p>
        <div className="chart-container">
          <canvas id="header-barchart" />
        </div>
        <p>Total acres burned (millions)</p>
      </div>
    );
  }
}


BarChart.propTypes = {
};

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(BarChart);
