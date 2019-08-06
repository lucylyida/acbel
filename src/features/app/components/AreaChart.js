import React from 'react'
import { ResponsiveLine } from '@nivo/line'


const MyResponsiveLine = (props) => {
    const { data, color, axisRight, axisLeft, legendAnchor} = props
    return (
            <ResponsiveLine
                data={data}
                margin={{
                    "top": 40,
                    "right": 80,
                    "bottom": 60,
                    "left": 70
                }}
                xScale={{ type: 'point' }}
                // yScale={{ type: 'linear', stacked: false, min: '0', max: 'auto' }}
                curve="monotoneX"
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 0,
                    tickPadding: 20,
                    tickRotation: 0,
                    legend: 'Time',
                    legendOffset: 50,
                    legendPosition: 'middle'
                }}
                axisLeft={axisLeft}
                axisRight={axisRight}
                enableGridX={false}
                colors={color}
                enablePoints={false}
                enableArea={true}
                areaOpacity={0.5}
                areaBaselineValue={0}
                enableCrosshair={false}
                crosshairType="y"
                useMesh={true}
                theme={{
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
                            stroke: "gray",
                            strokeWidth: 0.8,
                            strokeDasharray: "6 6"
                        }
                    }
                }}
                legends={[
                    {
                        anchor: legendAnchor,
                        direction: 'row',
                        translateX: -40,
                        translateY: -27,
                        itemWidth: 53,
                        itemHeight: 0,
                        itemsSpacing: 50,
                        symbolSize: 9,
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
                ]}
                motionStiffness={95}
                motionDamping={35}
            />
    )
}






export default MyResponsiveLine;