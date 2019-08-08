import React, { useState } from "react"
import ChartContainer from "../../app/components/ChartContainer"
import KmToggleButton from "../../../kumocom/KmToggleButton";
import KmSearchbox from "../../../kumocom/KmSearchbox"
import KmButton from "../../../kumocom/KmButton"
import InverterCollapseItem from "../components/InverterCollapseItem"
import { withMedia } from 'react-media-query-hoc'
import { fsc } from "../../../helper/fontColorHelper";

const InverterContainer = props => {
    const { media } = props
    const [compareMode, switchNormalMode] = useState(false)
    const selected = 'btn_3'
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-5 p-2">
                    <div className="py-2 px-1 d-flex align-items-center" style={{ color: '#FF8800', fontSize: fsc(media, 14), height: 42 }}>{"INVERTERS"}</div>
                    <div>
                        <KmSearchbox placeholder="Search Inverters" style={{ height: 48, backgroundColor: "white" }} />
                        <div className="py-2">
                            <InverterCollapseItem
                                text="Inverter001"
                                codeno={"002-001245b3a87f3d"}
                                selected={compareMode}
                                data={[
                                    { name: 'Panels', value: '65' },
                                    { name: 'Temp(C)', value: '45' },
                                    { name: 'Dc Input(kW)', value: '0.11' },
                                    { name: 'Efficiency', value: '0.11' }
                                ]} />

                            <InverterCollapseItem
                                text="Inverter002"
                                codeno={"002-00124abea87f3d"}
                                data={[
                                    { name: 'Panels', value: '65' },
                                    { name: 'Temp(C)', value: '45' },
                                    { name: 'Dc Input(kW)', value: '0.11' },
                                    { name: 'Efficiency', value: '0.11' }
                                ]}
                            />
                            <InverterCollapseItem
                                text="Inverter003"
                                codeno={"002-00124bbea87f3d"}
                                selected={compareMode}
                                data={[
                                    { name: 'Panels', value: '65' },
                                    { name: 'Temp(C)', value: '45' },
                                    { name: 'Dc Input(kW)', value: '0.11' },
                                    { name: 'Efficiency', value: '0.11' }
                                ]}
                            />
                            <InverterCollapseItem
                                text="Inverter004"
                                codeno={"002-001a45bea87f3d"}
                                data={[
                                    { name: 'Panels', value: '65' },
                                    { name: 'Temp(C)', value: '45' },
                                    { name: 'Dc Input(kW)', value: '0.11' },
                                    { name: 'Efficiency', value: '0.11' }
                                ]}
                            />
                            <InverterCollapseItem
                                text="Inverter005"
                                codeno={"002-097a45bea17f3d"}
                                data={[
                                    { name: 'Panels', value: '65' },
                                    { name: 'Temp(C)', value: '45' },
                                    { name: 'Dc Input(kW)', value: '0.11' },
                                    { name: 'Efficiency', value: '0.11' }
                                ]}
                            />
                            <InverterCollapseItem
                                text="Inverter006"
                                codeno={"002-00aa45bba85f3d"}
                                data={[
                                    { name: 'Panels', value: '65' },
                                    { name: 'Temp(C)', value: '45' },
                                    { name: 'Dc Input(kW)', value: '0.11' },
                                    { name: 'Efficiency', value: '0.11' }
                                ]}
                            />
                        </div>
                        <div className="py-2">
                            <KmButton text="View Selected Inverter Comparison" onClick={() => switchNormalMode(!compareMode)} />
                            <div className="py-3 font-weight-bold text-uppercase" align="center" style={{ fontSize: 14, color: "#a2a2a2" }}>Reset Selection</div>
                        </div>
                    </div>

                </div>
                <div className="col-md-7 p-1">
                    <div className="p-2 d-flex justify-content-between align-items-center" style={{ height: 42, fontSize: fsc(media, 14) }}>
                        <div style={{ color: '#FF8800' }}>{"ALL INVERTERS"}</div>
                        <div className="d-flex align-items-center">
                            <div className="px-1" style={{ color: "gray" }}>{"Dates"}</div>
                            <i className="fa fa-calendar-alt pr-2" style={{ color: '#88A2CD', fontSize: 20 }} />
                            <div className="px-1">
                                <KmToggleButton
                                    text="YEAR"
                                    btnNumber="btn_1"
                                    // onClick={_onBtnSelected}
                                    selected={selected === "btn_1" ? true : false} />
                            </div>
                            <div className="px-1">
                                <KmToggleButton
                                    text="MONTH"
                                    btnNumber="btn_2"
                                    // onClick={_onBtnSelected}
                                    selected={selected === "btn_2" ? true : false} />
                            </div>
                            <div className="pl-1">
                                <KmToggleButton
                                    text="DATE"
                                    btnNumber="btn_3"
                                    // onClick={_onBtnSelected}
                                    selected={selected === "btn_3" ? true : false} />
                            </div>
                        </div>
                    </div>
                    <div className="p-1">
                        <div className="bg-white px-4 py-3" style={{ borderRadius: 4, fontSize: fsc(media, 14) }}>
                            <div style={{ color: '#FF8800', }}>{"EFFICIENCY"}</div>
                            <div className="pt-2" style={{ color: '#153784', fontSize: 24, fontWeight: 800 }}>
                                {"88"}
                                <span className="pl-2" style={{ fontSize: 16, color: 'black' }}>{"%"}</span>
                            </div>
                            <div style={{ color: 'gray' }}>{"INVERTER EFFICIENCY"}</div>
                        </div>
                    </div>
                    {
                        compareMode ?
                            <CompareInverterComponent />
                            :
                            <AllInverterComponent />
                    }
                </div>
            </div>
        </div>
    )
}

export default withMedia(InverterContainer)

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
                        headerText={'GRAPH TITLE 1'}
                        data={compareAreaData}
                        color={['#2195F4', '#6522CE']}
                        legendAnchor
                        exportIcon
                    />
                </div>
            </div>
            <div className="p-1">
                <div className="bg-white">
                    <ChartContainer
                        headerText={'GRAPH TITLE 2'}
                        chartType='bar'
                        data={compareBardata}
                        keys={['inverter 001', 'inverter 002', 'inverter 003']}
                        color={['#1B9817', '#29CE22', '#6FD1F6']}
                        legendAnchor
                        exportIcon
                    />
                </div>
            </div>
        </div>
    )
}
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