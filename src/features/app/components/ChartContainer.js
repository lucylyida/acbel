import React from 'react'
import AreaChart from './AreaChart'
import BarChart from './BarChart'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'



const ChartContainer = props => {
    const { headerText, chartType, data, color, keys, axisLeftLegend, axisRightLegend, legendAnchor = 'top-right', axisBottomLegend = 'Time', exportIcon, media } = props    

    const isTickWhichShouldBeHidden = tick => false//data.length > 0 && data[0].data.length >= 18 && parseInt(tick.split(":")[0]) % 2 === 0 
    
    const axisLeft = {
        orient: 'left',
        tickSize: 0,
        tickPadding: 6,
        tickRotation: 0,
        legend: axisLeftLegend,
        legendOffset: -50,
        legendPosition: 'middle',
        tickvalue: 5,
    }

    const axisRight = axisRightLegend === undefined ? undefined : {
        orient: 'right',
        tickSize: 5,
        tickPadding: 10,
        tickRotation: 0,
        legend: axisRightLegend,
        legendOffset: 59,
        legendPosition: 'middle'
    }

    const axisBottom = {
        orient: 'bottom',
        tickSize: 0,
        tickPadding: 20,
        tickRotation: 0,
        legend: axisBottomLegend,
        legendOffset: 50,
        legendPosition: 'middle',
        format: tick => (isTickWhichShouldBeHidden(tick) ? '' : tick)
    }
    return (
        <div className="p-1 w-100">
            <div className="rounded" style={{ backgroundColor: "white", width: "100%", height: media.tablet ? 380 : 280 }}>
                <div style={{
                    position: 'relative',
                    top: media.tablet ? 20 : undefined,
                    left: 0,
                    right: 0,
                    color: '#FF8800',
                    fontWeight: 'bold',
                    background: "#00000000",
                    paddingLeft: 10,
                    display: "inline",
                    fontSize: fsc(media, 14)
                }}>
                    {headerText}
                </div>
                {
                    exportIcon === undefined ? null : <div style={{
                        position: 'relative',
                        top: media.tablet ? 20 : 5,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        color: '#91A7CE',
                        background: "#00000000",
                        paddingRight: 20,
                        float: 'right',
                        cursor: 'pointer !important',
                        fontSize: fsc(media, 14)

                    }}>
                        <i className="fas fa-external-link-alt" style={{ cursor: 'inherient' }}> </i> <span style={{ marginTop: -3, cursor: 'pointer', paddingLeft: 5 }}>Export</span>
                    </div>
                }
                <div className="" style={{ width: "96%", height: media.tablet ? 350 : 250, marginLeft: '2%' }}>
                    {chartType === "area" && <AreaChart
                        data={data}
                        color={color}
                        axisLeft={axisLeft}
                        axisRight={axisRight}
                        legendAnchor={legendAnchor}
                        axisBottom={axisBottom} />}
                    {chartType === 'bar' && <BarChart
                        data={data}
                        color={color}
                        keys={keys}
                        axisLeft={axisLeft}
                        axisRight={axisRight}
                        axisBottom={axisBottom}
                        legendAnchor={legendAnchor} />}
                </div>
            </div>
        </div>
    )
}

export default withMedia(ChartContainer);