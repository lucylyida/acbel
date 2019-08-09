import React from "react"


import RevenueStatusView from "../components/RevenueStatusView";
import SearchPanel from '../../app/components/SearchPanel'
import ChartContainer from "../../app/components/ChartContainer"

const RevenueContainer = props => {

    return (
        <div className="container-fluid ">
            <div className="row px-1">
                <div className="p-1 col-12 bg-white" style={{ borderRadius: 4 }}>
                    <RevenueStatusView />
                </div>
            </div>

            <div className="row pt-2 ">
                <div className=" col-md-6 p-1"><SearchPanel /></div>

                <div className="col-md-6 p-1">
                    <div className="bg-white" style={{ borderRadius: 4 }}>
                    <ChartContainer
                            chartType='area'
                            data={data}
                            color={'#FEC71F'}
                            axisLeftLegend="NT$"
                            legendAnchor="top-left"
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RevenueContainer

const data = [
    {
        "id": "Revenue",
        "data": [
            {
                "x": "05:00",
                "y": 50
            },
            {
                "x": "06:00",
                "y": 47
            },
            {
                "x": "07:00",
                "y": 33
            },
            {
                "x": "08:00",
                "y": 15
            },
            {
                "x": "09:00",
                "y": 30
            },
            {
                "x": "10:00",
                "y": 33
            },
            {
                "x": "11:00",
                "y": 70
            },
            {
                "x": "12:00",
                "y": 65
            },
            {
                "x": "13:00",
                "y": 45
            },
            {
                "x": "14:00",
                "y": 42
            },
            {
                "x": "15:00",
                "y": 43
            },
            {
                "x": "16:00",
                "y": 11
            },
            {
                "x": "17:00",
                "y": 23
            }
            ,
            {
                "x": "18:00",
                "y": 29
            }
            ,
            {
                "x": "19:00",
                "y": 13
            }
            ,
            {
                "x": "20:00",
                "y": 19
            }
            ,
            {
                "x": "21:00",
                "y": 22
            }
            ,
            {
                "x": "22:00",
                "y": 30
            }
            ,
            {
                "x": "23:00",
                "y": 50
            }

        ]
    }
]