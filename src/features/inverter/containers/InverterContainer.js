import React from "react"
import ChartContainer from "../../app/components/ChartContainer"
import KmToggleButton from "../../../kumocom/KmToggleButton";

const isCompare = true
const InverterContainer = props => {
    const { } = props
    const selected = 'btn_3'
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-5 p-2">
                    <div style={{ color: '#FF8800', fontSize: 14 }}>{"INVERTERS"}</div>
                    {/* Inverter Lists */}
                </div>
                <div className="col-md-7 p-1">
                    <div className="p-1 d-flex justify-content-between align-items-center" style={{ fontSize: 14 }}>
                        <div style={{ color: '#FF8800' }}>{"ALL INVERTERS"}</div>
                        <div className="d-flex align-items-center">
                            <div className="px-1" style={{ color: "gray" }}>{"Dates"}</div>
                            <i className="fa fa-calendar-alt pr-2" style={{ color: '#88A2CD', fontSize: 20 }} />
                            <div className="px-1"><KmToggleButton
                                text="YEAR"
                                btnNumber="btn_1"
                                // onClick={_onBtnSelected}
                                selected={selected === "btn_1" ? true : false} />
                            </div>
                            <div className="px-1"><KmToggleButton
                                text="MONTH"
                                btnNumber="btn_2"
                                // onClick={_onBtnSelected}
                                selected={selected === "btn_2" ? true : false} />
                            </div>
                            <div className="pl-1"><KmToggleButton
                                text="DATE"
                                btnNumber="btn_3"
                                // onClick={_onBtnSelected}
                                selected={selected === "btn_3" ? true : false} />
                            </div>
                        </div>
                    </div>
                    <div className="p-1">
                        <div className="bg-white px-4 py-3" style={{ borderRadius: 4, fontSize: 14 }}>
                            <div style={{ color: '#FF8800', }}>{"EFFICIENCY"}</div>
                            <div className="pt-2" style={{ color: '#153784', fontSize: 24, fontWeight: 800 }}>
                                {"88"}
                                <span className="pl-2" style={{ fontSize: 16, color: 'black' }}>{"%"}</span>
                            </div>
                            <div style={{ color: 'gray' }}>{"INVERTER EFFICIENCY"}</div>
                        </div>
                    </div>
                    {
                        isCompare ?
                            <CompareInverterComponent />
                            :
                            <AllInverterComponent />
                    }
                </div>
            </div>
        </div>
    )
}

export default InverterContainer

const AllInverterComponent = props => {
    return (
        <div className="w-100 p-0">
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
                        color={['#FEC61B', '#54D74F', '#03C2D2']}
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
                        color={['#FF78C8', '#03C2D2']}
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
                        color={['#6522CE', '#54D74F']}
                        legendAnchor
                        exportIcon
                    />
                </div>
            </div>
        </div>
    )
}

const CompareInverterComponent = props => {
    const { } = props
    return (
        <div className="w-100 p-0">
            <div className="p-1">
                <div className="bg-white">
                    <ChartContainer
                        chartType='area'
                        headerText={'PV INVERTER CURRENT TREND'}
                        data={pvData}
                        color={['#FF78C8', '#03C2D2']}
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
                        color={['#6522CE', '#54D74F']}
                        legendAnchor
                        exportIcon
                    />
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