import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { numberFormat } from '../../../helper/fontColorHelper';

const BarChart = (props) => {

    const { data, keys, color, legendAnchor, axisRight, axisLeft } = props
    return <ResponsiveBar {...configCommonProperties(data, keys, color, legendAnchor, axisRight, axisLeft)} />
}

const configCommonProperties = (data, keys, color, legendAnchor, axisRight, axisLeft) => ({
    data: data,
    colors: color,
    padding: 0.4,
    keys,
    enableLabel: false,
    indexBy: 'time',
    margin: {
        top: 40,
        right: axisRight && axisRight.legend ? 70 : !axisRight ? 20 : 50,
        bottom: 60,
        left: axisLeft.legend ? 60 : 40
    },
    axisLeft: axisLeft,
    axisRight: axisRight,
    axisBottom: {
        orient: 'bottom',
        tickSize: 0,
        tickPadding: 20,
        tickRotation: 0,
        legend: 'Time',
        legendOffset: 50,
        legendPosition: 'middle'
    },
    yFormat: (d) => numberFormat(d),
    tooltip: (d) => {       
        const unit = d.id === 'Power Output' ? 'kW' : ''
        return <div className="px-4 py-2 bg-white rounded">
            <div>{`${d.id} : ${d.value} ${unit}`}</div>
            <div>{`Time : ${d.indexValue}`}</div>
        </div>;
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
            anchor: legendAnchor,
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
