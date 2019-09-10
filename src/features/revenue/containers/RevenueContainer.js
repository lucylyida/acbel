import React from "react"
import querystring from 'query-string'
import RevenueStatusView from "../components/RevenueStatusView";
import SearchPanel from '../../app/components/SearchPanel'
import ChartContainer from "../../app/components/ChartContainer"
import moment from 'moment';

const RevenueContainer = props => {
    const { } = props

    const date = data[0].data[0].x;
    console.log(date)
    const UpDate = moment(date).format('LL');
    console.log(UpDate)

    return (
        <div className="container-fluid ">
            <div className="row px-1">
                <div className="p-1 col-12 bg-white" style={{ borderRadius: 4 }}>
                    <RevenueStatusView />
                </div>
            </div>

            <div className="row pt-2 h-100">
                <div className=" col-md-6 px-1 pt-1">
                    <SearchPanel />
                </div>

                <div className="col-md-6 px-1 pt-1">
                    <div className="bg-white h-100" style={{ borderRadius: 4 }}>
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
                "x": "6/17",
                "y": 50
            },
            {
                "x": "6/18",
                "y": 47
            },
            {
                "x": "6/19",
                "y": 33
            },
            {
                "x": "6/20",
                "y": 15
            },
            {
                "x": "6/21",
                "y": 30
            },
            {
                "x": "6/22",
                "y": 33
            },
            {
                "x": "6/23",
                "y": 70
            },
            {
                "x": "6/24",
                "y": 65
            },
            {
                "x": "6/25",
                "y": 45
            },
            {
                "x": "6/26",
                "y": 42
            },
            {
                "x": "6/27",
                "y": 43
            },
            {
                "x": "6/28",
                "y": 11
            },
            {
                "x": "6/29",
                "y": 23
            }
            ,
            {
                "x": "6/30",
                "y": 29
            }
            ,
            {
                "x": "6/31",
                "y": 13
            }
            // ,
            // {
            //     "x": "6/17",
            //     "y": 19
            // }
            // ,
            // {
            //     "x":"6/17",
            //     "y": 22
            // }
            // ,
            // {
            //     "x": "6/17",
            //     "y": 30
            // }
            // ,
            // {
            //     "x": "6/17",
            //     "y": 50
            // }

        ]
    }
]