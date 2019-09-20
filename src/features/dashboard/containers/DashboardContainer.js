import React from "react"
import ChartContainer from "../../app/components/ChartContainer"
import DashMap from '../components/DashMapView';
import DashStatusViewA from '../components/DashStatusViewA';
import DashStatusViewB from '../components/DashStatusViewB';

import { useSelector, useDispatch } from 'react-redux'
import * as Action from '../../../action'
import moment from 'moment'
import { isArray } from "util";
import { useCookies } from 'react-cookie'
import * as route from '../../../config/route.config'

const DashboardContainer = props => {
    const vendorState = useSelector(state => state.vendorReducer)

    const weatherCurrentCityList = useSelector(state => state.weatherCountryReducer)
    const dispatch = useDispatch()

    const wCurrentdata = weatherCurrentCityList.weatherCurrentList
    const wForecastdata = weatherCurrentCityList.weatherForecastList.length === 0 ? [] : weatherCurrentCityList.weatherForecastList[0].list

    // const tomorrow = wForecastdata.filter(d => moment(d.dt_txt).format('HH:mm:ss A') > 24 ?
    //     console.log("hiii")
    //     :
    //     moment(d.dt_txt).format('YYYY-MM-DD') === moment().add(1, 'days').format("YYYY-MM-DD") &&
    //     moment(d.dt_txt).format("HH:mm:ss A")
    // )
    // console.log({tomorrow})

    const temperature = wCurrentdata.length > 0 ? wCurrentdata[0].main.temp.toFixed(1) * 1 : 0
    const humidity = wCurrentdata.length > 0 ? wCurrentdata[0].main.humidity.toFixed(1) * 1 : 0
    const wind = wCurrentdata.length > 0 ? wCurrentdata[0].wind.speed.toFixed(1) * 1 : 0

    const bodyData = { vendor_id: props.match.params.vendorId, site_id: props.match.params.siteId }

    const selectSiteDataFromSiteList = vendorState.siteNameList.filter(d => d.vendor_id === parseInt(bodyData.vendor_id) && d.hid === bodyData.site_id)

    if (weatherCurrentCityList.isLoading) {
        if (selectSiteDataFromSiteList.length > 0) {
            const latlngData = { lat: selectSiteDataFromSiteList[0].latitude, lng: selectSiteDataFromSiteList[0].longitude }
            dispatch(Action.getweathercountry(latlngData))
        }
    }

    if (selectSiteDataFromSiteList.length === 0) return <div className="text-center" style={{ position: "fixed", left: 0, top: "45%", right: 0, bottom: "45%", zIndex: 1 }}>
        <span className="h3 font-weight-bold text-secondary">Loading...</span>
    </div>;

    return (
        <div className="container-fluid">

            <div className="row">
                <div className="col-md-7 p-0 pb-1 d-flex flex-column justify-content-between">
                    <div className="px-1 pb-1">
                        <div className="bg-white h-100">
                            <DashStatusViewA temperature={temperature} humidity={humidity} wind={wind}
                                selectedSite={selectSiteDataFromSiteList[0]}
                            />
                        </div>
                    </div>

                    <div className="p-1">
                        <div className="bg-white h-100"><DashStatusViewB selectedSite={selectSiteDataFromSiteList[0]} /></div>
                    </div>
                </div>

                <div className="col-md-5 px-1">
                    <div className="bg-white"><DashMap selectedSite={selectSiteDataFromSiteList[0]} /></div>
                </div>

                <div className="col-md-6 p-1">
                    <div className="bg-white ">
                        {/* Bar requires kes */}
                        <ChartContainer
                            headerText={'SITE OUTPUT TREND'}
                            chartType='bar'
                            data={sampleData}
                            keys={['CurrentOutput']}
                            color={'#6FD1F6'}
                            axisLeftLegend="Power(kw)"
                            axisRightLegend="Power(kw)"

                        />
                    </div>
                </div>

                <div className="col-md-6 p-1">
                    <div className="bg-white">
                        <ChartContainer
                            headerText={'SITE EFFICIENCY TREND'}
                            chartType='area'
                            data={data}
                            color={'#FEC71F'}
                            axisLeftLegend="%"
                        />
                    </div>
                </div>

                <div className="col-md-6 px-1 pt-1">
                    <div className="bg-white">
                        <ChartContainer
                            chartType='area'
                            headerText={'POWER GENERATION NORMALIZED AGAINST RADIANCE'}
                            data={data1}
                            color={['#6522CE', '#309BF3']}
                            axisLeftLegend="Power(kw)"
                            axisRightLegend="Radiance"
                        />
                    </div>
                </div>

                <div className="col-md-6 px-1 pt-1">
                    <div className="bg-white">
                        <ChartContainer
                            chartType='area'
                            headerText={'ACTUAL POWER OUTPUT VS RADIATION'}
                            data={data2}
                            color={['#29CE22', '#00C1D2']}
                            axisLeftLegend="Power(kw)"
                            axisRightLegend="Irradiance"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const data = [
    {
        "id": "Efficiency",
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

const sampleData = [
    {
        "time": "05:00",
        CurrentOutput: 30
    },
    {
        "time": "06:00",
        CurrentOutput: 21
    },
    {
        "time": "07:00",
        CurrentOutput: 33
    },
    {
        "time": "08:00",
        CurrentOutput: 45
    },
    {
        "time": "09:00",
        CurrentOutput: 49
    },
    {
        "time": "10:00",
        CurrentOutput: 30
    },
    {
        "time": "11:00",
        CurrentOutput: 44
    },
    {
        "time": "12:00",
        CurrentOutput: 22
    },
    {
        "time": "13:00",
        CurrentOutput: 26
    },
    {
        "time": "14:00",
        CurrentOutput: 11
    },
    {
        "time": "15:00",
        CurrentOutput: 23
    },
    {
        "time": "16:00",
        CurrentOutput: 42
    },
    {
        "time": "17:00",
        CurrentOutput: 32
    }
];

const data1 = [
    {
        "id": "Power Normalized",
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
        "id": "Radiance",
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
const data2 = [
    {
        "id": "Power",
        "data": [
            {
                "x": "05:00",
                "y": 4500
            },
            {
                "x": "06:00",
                "y": 2200
            },
            {
                "x": "07:00",
                "y": 8000
            },
            {
                "x": "08:00",
                "y": 16000
            },
            {
                "x": "09:00",
                "y": 12500
            },
            {
                "x": "10:00",
                "y": 18000
            },
            {
                "x": "11:00",
                "y": 2000
            },
            {
                "x": "12:00",
                "y": 4400
            },
            {
                "x": "13:00",
                "y": 19000
            },
            {
                "x": "14:00",
                "y": 2900
            },
            {
                "x": "15:00",
                "y": 3800
            },
            {
                "x": "16:00",
                "y": 8800
            },
            {
                "x": "17:00",
                "y": 15000
            }
            ,
            {
                "x": "18:00",
                "y": 1950
            }
            ,
            {
                "x": "19:00",
                "y": 3300
            }
            ,
            {
                "x": "20:00",
                "y": 5500
            }
            ,
            {
                "x": "21:00",
                "y": 4800
            }
            ,
            {
                "x": "22:00",
                "y": 5000
            }
            ,
            {
                "x": "23:00",
                "y": 6000
            }

        ]
    },
    {
        "id": "Irridiance",
        "data": [
            {
                "x": "05:00",
                "y": 4090
            },
            {
                "x": "06:00",
                "y": 4700
            },
            {
                "x": "07:00",
                "y": 3300
            },
            {
                "x": "08:00",
                "y": 1500
            },
            {
                "x": "09:00",
                "y": 3000
            },
            {
                "x": "10:00",
                "y": 3300
            },
            {
                "x": "11:00",
                "y": 7000
            },
            {
                "x": "12:00",
                "y": 6500
            },
            {
                "x": "13:00",
                "y": 4500
            },
            {
                "x": "14:00",
                "y": 4200
            },
            {
                "x": "15:00",
                "y": 4300
            },
            {
                "x": "16:00",
                "y": 1100
            },
            {
                "x": "17:00",
                "y": 2300
            }
            ,
            {
                "x": "18:00",
                "y": 1900
            }
            ,
            {
                "x": "19:00",
                "y": 1300
            }
            ,
            {
                "x": "20:00",
                "y": 1900
            }
            ,
            {
                "x": "21:00",
                "y": 2200
            }
            ,
            {
                "x": "22:00",
                "y": 3000
            }
            ,
            {
                "x": "23:00",
                "y": 5000
            }

        ]
    }
]


export default DashboardContainer