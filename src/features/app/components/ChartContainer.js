import React from 'react'
import AreaChart from './AreaChart'
import BarChart from './BarChart'

const ChartContainer = props => {
    const { headerText, Chart, chartType, data, color, keys, axisLeftLegend, axisRightLegend } = props
    const axisLeft = {
        orient: 'left',
        tickSize: 0,
        tickPadding: 6,
        tickRotation: 0,
        legend: axisLeftLegend,
        legendOffset: -50,
        legendPosition: 'middle'
    }
    const axisRight = {
        orient: 'right',
        tickSize: 5, tickPadding: 10,
        tickRotation: 0, legend: axisRightLegend,
        legendOffset: 59, legendPosition: 'middle'
    }
    return (
        <div className="p-1 w-100">
            <div className="rounded" style={{ backgroundColor: "white", width: "100%", height: 380 }}>
                <div style={{
                        position: 'relative',
                        top: 20,
                        left: 0,
                        right: 0,
                        color: '#FF8800',
                        fontWeight: 'bold',
                        background: "#00000000",
                        paddingLeft: 40,
                        display: "inline"
                    }}>
                        {headerText}
                    </div>
                <div className="" style={{ width: "100%", height: 340 }}>
                    {chartType === "area" && <AreaChart data={data} color={color} axisLeft={axisLeft} axisRight={axisRight} />}
                    {chartType === 'bar' && <BarChart data={data} color={color} keys={keys} />}
                </div>
            </div>
        </div>
    )

}

export default ChartContainer;