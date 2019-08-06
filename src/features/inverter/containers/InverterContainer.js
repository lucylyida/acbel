import React from "react"
import ChartContainer from "../../app/components/ChartContainer"

const InverterContainer = props => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-5">"first"</div>
                <div className="col-md-7">
                    <div>all inverter date</div>
                    <div>inverter status card</div>

                    <div className="p-1">
                        <div className="bg-white">
                            <ChartContainer
                                chartType='area'
                                headerText={'PV INVERTER CONVERSION RATE'}
                                data={pvData}
                                color={['#6522CE', '#309BF3']}
                                legendAnchor
                                exportIcon
                            />
                        </div>
                    </div>

                    <div className=" p-1">
                        <div className="bg-white">
                        <ChartContainer
                                chartType='area'
                                headerText={'PV INVERTER WATT TREND'}
                                data={wattTrend}
                                color={[ '#FEC61B','#54D74F', '#03C2D2']}
                                legendAnchor
                                exportIcon
                            />
                        </div>
                    </div>

                    <div className="p-1">
                        <div className="bg-white">
                        <ChartContainer
                                chartType='area'
                                headerText={'PV INVERTER CURRENT TREND'}
                                data={pvData}
                                color={[ '#FF78C8', '#03C2D2']}
                                legendAnchor
                                exportIcon
                            />
                        </div>
                    </div>
                    <div className="p-1">
                        <div className="bg-white">
                        <ChartContainer
                                chartType='area'
                                headerText={'PV INVERTER VOLTAGE TREND'}
                                data={pvData}
                                color={[ '#6522CE', '#54D74F']}
                                legendAnchor
                                exportIcon
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const pvData = [
    {
        "id": "Inverter Conversion Rate",
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
        "id": "Solar Radiation",
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

const currentTrend = [
    {
        "id": "Inverter Conversion Rate",
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
        "id": "Solar Radiation",
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

const wattTrend = [
    {
        "id": "Inverter DC",
        "data": [
            {
                "x": "06:00",
                "y": 7900
            },
            {
                "x": "07:00",
                "y": 5000
            },
            {
                "x": "08:00",
                "y": 4500
            },
            {
                "x": "09:00",
                "y": 9000
            },
            {
                "x": "10:00",
                "y": 5000
            },
            {
                "x": "11:00",
                "y": 13000
            },
            {
                "x": "12:00",
                "y": 16000
            },
            {
                "x": "13:00",
                "y": 11000
            },
            {
                "x": "14:00",
                "y": 19000
            },
            {
                "x": "15:00",
                "y": 8000
            },
            {
                "x": "16:00",
                "y": 9000
            },
            {
                "x": "17:00",
                "y": 6000
            }

        ]
    },
    {
        "id": "Inverter AC",
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
        "id": "Solar Radiation",
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



export default InverterContainer

