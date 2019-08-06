import React from 'react'
import { ResponsiveBar } from '@nivo/bar'


const BarChart = (props) => {
  const { data,keys, color } = props
      return  <ResponsiveBar {...configCommonProperties(data, keys, color)} />
}

const configCommonProperties = (data, keys, color) => ({
  data: data,
  colors: color,
  padding: 0.4,
  keys,
  enableLabel: false,
  indexBy: 'time',
  margin: {
    top: 40,
    right: 60,
    bottom: 60,
    left: 80
  },
  axisLeft: {
    orient: 'left',
    tickSize: 0,
    tickPadding: 20,
    tickRotation: 0,
    legend: 'Power (kw)',
    legendOffset: -50,
    legendPosition: 'middle'
  },
  axisBottom: {
    orient: 'bottom',
    tickSize: 0,
    tickPadding: 20,
    tickRotation: 0,
    legend: 'Time',
    legendOffset: 50,
    legendPosition: 'middle'
  },
  theme: {
    axis: {
      ticks: {
        line: {
          stroke: "green"
        },
        text: {
          fill: "#A9A9A9"
        }
      }
    },
    grid: {
      line: {
        stroke: "#A9A9A9",
        strokeWidth: 1,
        strokeDasharray: "4 4"
      }
    },
  },
  legends: [
    {
      dataFrom: 'keys',
      anchor: 'top-right',
      direction: 'row',
      translateX: -4,
      translateY: -27,
      itemWidth: 100,
      itemHeight: 0,
      itemsSpacing: 4,
      symbolSize: 10,
      symbolShape: 'circle',
      itemDirection: 'left-to-right',
      itemTextColor: '#777',
      effects: [
        {
          on: 'hover',
          style: {
            itemBackground: 'rgba(0, 0, 0, .03)',
            itemOpacity: 1
          }
        }
      ]
    }
  ]
})

export default BarChart;
