import React from "react"

import { withMedia } from 'react-media-query-hoc'
import ChartContainer from "../../app/components/ChartContainer"

// import { fsc, numberFormat } from '../../../helper/fontColorHelper'
// import * as route from "../../../config/route.config"

const ChartComparisonView = props => {
    // const { } = props
    return (
        <div className="container-fluid p-0" style={{ overflow: 'hidden' }}>
            <div className="pb-1 px-1">
                <div className="d-flex align-items-center bg-white">
                    <ChartContainer
                        chartType='area'
                        headerText={'GRAPH TITLE 1'}
                        data={compareAreaData}
                        color={['#2195F4', '#6522CE']}
                        legendAnchor='top'
                        exportIcon
                    />
                </div>
            </div>
            <div className="pt-1 px-1">
                <div className="bg-white d-flex align-items-center">
                    <ChartContainer
                        headerText={'GRAPH TITLE 2'}
                        chartType='bar'
                        data={compareBardata}
                        keys={['inverter 001', 'inverter 002', 'inverter 003']}
                        color={['#1B9817', '#29CE22', '#6FD1F6']}
                        legendAnchor='top'
                        exportIcon
                    />
                </div>
            </div>
        </div>
    )
}

export default withMedia(ChartComparisonView)


const compareBardata = [
    {
        "time": "05:00",
        "inverter 001": 80,
        "inverter 002": 146,
        "inverter 003": 20,
    },
    {
        "time": "06:00",
        "inverter 001": 80,
        "inverter 002": 154,
        "inverter 003": 40,

    },
    {
        "time": "07:00",
        "inverter 001": 109,
        "inverter 002": 131,
        "inverter 003": 20,

    },
    {
        "time": "08:00",
        "inverter 001": 156,
        "inverter 002": 36,
        "inverter 003": 20,
    },
    {
        "time": "09:00",
        "inverter 001": 116,
        "inverter 002": 111,
        "inverter 003": 40,
    },
    {
        "time": "10:00",
        "inverter 001": 16,
        "inverter 002": 179,
        "inverter 003": 35,
    },
    {
        "time": "11:00",
        "inverter 001": 49,
        "inverter 002": 105,
        "inverter 003": 66,
    }
]
const compareAreaData = [
    {
        "id": "Inverter 1",
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
        "id": "Inverter 003",
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