import React from "react"
import ChartContainer from "../../app/components/ChartContainer"
import SearchPanel from '../../app/components/SearchPanel'
import ForecastStatusViewA from "../components/ForecastStatusViewA";
import ForecastStatusViewB from "../components/ForecastStatusViewB";

const ForecastContainer = props => {
    return (
        <div className="container-fluid">
            <div className="row pb-2">
                <div className="col-md-6 p-0 d-flex flex-column justify-content-between">
                    <div className="p-1">
                        <ForecastStatusViewA />
                    </div>

                    <div className="p-1">
                        <ForecastStatusViewB />
                    </div>
                </div>
                <div className="col-md-6 p-1">
                    <div className="bg-white d-flex align-items-center h-100">
                        <ChartContainer
                            chartType='area'
                            headerText={''}
                            data={areaData}
                            color={['#2195F4', '#6522CE']}
                            axisLeftLegend="Revenue"
                            axisRightLegend="Temperature"
                            axisBottomLegend='Date'
                            legendAnchor="top-left"
                            exportIcon
                        />
                    </div>
                </div>
            </div>

            <div className="row p-1">
                <div className="col-12" style={{ border: '1px solid lightgrey' }}></div>
            </div>
            <div className="row pt-2">
                <div className="col-md-6 p-1 ">
                    <SearchPanel />
                </div>

                <div className="col-md-6 p-1">
                    <div className="bg-white h-100 d-flex align-items-center">
                        <ChartContainer
                            chartType='area'
                            headerText={'COMPARE OUTPUT TREND'}
                            data={areaData}
                            color={['#57D752', '#36CEDC']}
                            axisLeftLegend="Revenue"
                            axisRightLegend="Temperature"
                            axisBottomLegend="Date"
                            legendAnchor="top"
                            exportIcon
                        />

                    </div>
                </div>
            </div>
        </div >
    )
}

export default ForecastContainer


const areaData = [
    {
        "id": "Revenue",
        "data": [
            {
                "x": "06:00",
                "y": 7900
            },
            {
                "x": "07:00",
                "y": 3000
            },
            {
                "x": "08:00",
                "y": 3500
            },
            {
                "x": "09:00",
                "y": 10000
            },
            {
                "x": "10:00",
                "y": 4500
            },
            {
                "x": "11:00",
                "y": 14000
            },
            {
                "x": "12:00",
                "y": 11000
            },
            {
                "x": "13:00",
                "y": 15000
            },
            {
                "x": "14:00",
                "y": 9000
            },
            {
                "x": "15:00",
                "y": 8000
            },
            {
                "x": "16:00",
                "y": 19000
            },
            {
                "x": "17:00",
                "y": 6000
            }

        ]
    },
    {
        "id": "Radiator",
        "data": [
            {
                "x": "06:00",
                "y": 3000
            },
            {
                "x": "07:00",
                "y": 4000
            },
            {
                "x": "08:00",
                "y": 5000
            },
            {
                "x": "09:00",
                "y": 8000
            },
            {
                "x": "10:00",
                "y": 5500
            },
            {
                "x": "11:00",
                "y": 5600
            },
            {
                "x": "12:00",
                "y": 5900
            },
            {
                "x": "13:00",
                "y": 6700
            },
            {
                "x": "14:00",
                "y": 4000
            },
            {
                "x": "15:00",
                "y": 19000
            },
            {
                "x": "16:00",
                "y": 3000
            },
            {
                "x": "17:00",
                "y": 6000
            }

        ]
    }
]