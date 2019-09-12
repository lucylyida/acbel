import React from "react"
import moment from 'moment'
import { Route, Link, Switch, Redirect, } from "react-router-dom"
import { withMedia } from 'react-media-query-hoc'
import { fsc, numberFormat } from '../../../helper/fontColorHelper'

import KmSelector from '../../../kumocom/KmSelector'
import KmDatePicker from '../../../kumocom/KmDatePicker'
import KmTimePicker from '../../../kumocom/KmTimePicker'
import KmInputBox from '../../../kumocom/KmInputBox'
import KmButton from '../../../kumocom/KmButton'

const MaintenanceSideCalendarContainer = props => {
    const { media, match } = props

    return (
        <div className={`container-fluid py-2 ${media.mobile ? "px-1" : "px-4"}`}>
            <div className="row  p-2 px-3" >
                <div className=" w-100  p-4 bg-white" style={{ borderRadius: 4 }}>
                    <div className="px-1" style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>LOCATION</div>
                    <div className="d-flex flex-wrap pt-3">
                        <div className="px-1 ">
                            <div className="py-1" style={{ fontSize: fsc(media, 13), color: '#999999' }}>VENDOR</div>
                            <div className="py-1">
                                <KmSelector
                                    style={{ indicator: 'none' }}
                                    placeholder="Select Type"
                                    options={
                                        [
                                            { label: 'Vendor1', type: '1' },
                                            { label: 'Vendor2', type: '2' },
                                            { label: 'Vendor3', type: '3' }
                                        ]
                                    }
                                    optionLabel='label'
                                />
                            </div>
                        </div>
                        <div className=" px-1 ">
                            <div className="py-1" style={{ fontSize: fsc(media, 13), color: '#999999' }}>COUNTRY</div>
                            <div className="py-1">
                                <KmSelector
                                    style={{ indicator: 'none' }}
                                    placeholder="Select Type"
                                    options={
                                        [
                                            { label: 'Country1', type: '1' },
                                            { label: 'Country2', type: '2' },
                                            { label: 'Country3', type: '3' }
                                        ]
                                    }
                                    optionLabel='label'
                                />
                            </div>
                        </div>
                        <div className=" px-1 ">
                            <div className="py-1" style={{ fontSize: fsc(media, 13), color: '#999999' }}>CITY</div>
                            <div className="py-1">
                                <KmSelector
                                    style={{ indicator: 'none' }}
                                    placeholder="Select Type"
                                    options={
                                        [
                                            { label: 'City1', type: '1' },
                                            { label: 'City2', type: '2' },
                                            { label: 'City3', type: '3' }
                                        ]
                                    }
                                    optionLabel='label'
                                />
                            </div>
                        </div>
                        <div className=" px-1 ">
                            <div className="py-1" style={{ fontSize: fsc(media, 13), color: '#999999' }}>SITES</div>
                            <div className="py-1">
                                <KmSelector
                                    style={{ indicator: 'none' }}
                                    placeholder="Select Type"
                                    options={
                                        [
                                            { label: 'Site1', type: '1' },
                                            { label: 'Site2', type: '2' },
                                            { label: 'Site3', type: '3' }
                                        ]
                                    }
                                    optionLabel='label'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row p-2 px-3" >
                <div className="  w-100  p-4 bg-white" style={{ borderRadius: 4 }}>
                    <div className="px-1" style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>INFORMATION</div>
                    <div className="d-flex flex-wrap pt-3">
                        <div className="px-1 ">
                            <div className="py-1" style={{ fontSize: fsc(media, 13), color: '#999999' }}>TYPE OF MAINTENANCE</div>
                            <div className="py-1">
                                <KmSelector
                                    style={{ indicator: 'none' }}
                                    placeholder="Select Type"
                                    options={
                                        [
                                            { label: 'Maintenance1', type: '1' },
                                            { label: 'Maintenance2', type: '2' },
                                            { label: 'Maintenance3', type: '3' }
                                        ]
                                    }
                                    optionLabel='label'
                                />
                            </div>
                        </div>
                        <div className="px-1  ">
                            <div className="py-1" style={{ fontSize: fsc(media, 13), color: '#999999' }}>DATE</div>
                            <div className="py-1"><KmDatePicker placeholder="MM/DD/YY" /> </div>
                        </div>
                        <div className="px-1  ">
                            <div className="py-1" style={{ fontSize: fsc(media, 13), color: '#999999' }}>TIME</div>
                            <div className="py-1"><KmTimePicker noIcon placeholder="HH:MM" /> </div>
                        </div>
                    </div>
                   

                    <div className="d-flex flex-wrap pt-2">
                        <div className="px-1 ">
                            <div  className="py-1" style={{ fontSize: fsc(media, 13), color: '#999999' }}>SUPPLIER</div>
                            <div  className="py-1"><KmInputBox minWidth  /> </div>
                        </div>
                        <div className="px-1 ">
                            <div  className="py-1" style={{ fontSize: fsc(media, 13), color: '#999999' }}>COST(NT$)</div>
                            <div  className="py-1"><KmInputBox minWidth /> </div>
                        </div>
                        <div className="px-1 ">
                            <div className="py-1" style={{ fontSize: fsc(media, 13), color: '#999999' }}>TYPE</div>
                            <div  className="py-1">
                                <KmSelector
                                    style={{ indicator: 'none' }}
                                    placeholder="Select Type"
                                    options={
                                        [
                                            { label: 'Maintenance1', type: 'type1' },
                                            { label: 'Maintenance2', type: 'type2' },
                                            { label: 'Maintenance3', type: 'type3' }
                                        ]
                                    }
                                    optionLabel='type'
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-2 px-1">
                        <div className="py-1" style={{ fontSize: fsc(media, 13), color: '#999999' }}>DESCRIPTION</div>
                        <div className="py-1 d-flex flex-shrink-1"><KmInputBox className="py-5" minWidth /> </div>
                    </div>

                </div>
            </div>

            <div className="py-2 ">
                <KmButton text="SUBMIT" style={{ width: 200 }} />
            </div>
        </div>
    )
}

export default withMedia(MaintenanceSideCalendarContainer)