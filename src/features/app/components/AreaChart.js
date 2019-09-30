import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { numberFormat } from '../../../helper/fontColorHelper';

const MyResponsiveLine = (props) => {
    const { data, color, axisRight, axisLeft, legendAnchor, axisBottom, isAllZero, media } = props
    return (
        <ResponsiveLine
            data={data}
            margin={{
                "top": isAllZero ? media.tablet ? 290 : 190 : 40,
                "right": axisRight && axisRight.legend ? 80 : !axisRight ? 20 : 50,
                "bottom": 60,
                "left": axisLeft.legend ? 70 : 40
            }}
            xScale={{ type: 'point' }}
            // yScale={{ type: 'linear', stacked: false, min: '0', max: 'auto' }}
            curve="monotoneX"
            axisBottom={axisBottom}
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
            yFormat={(d) => numberFormat(d)}
            tooltip={(d) => {
                const unit = d.point.serieId === 'Efficiency' ? '%' : d.point.serieId === 'Power' ? 'kW' : ''
                return <div className="px-4 py-2 bg-white" style={{ borderRadius: 4 }}>
                    <div>{`${d.point.serieId} : ${d.point.data.yFormatted} ${unit}`}</div>
                    <div>{`Time : ${d.point.data.x}`}</div>
                </div>;
            }}
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
                    translateY: isAllZero ? media.tablet ? -190 : -180 : -27,
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