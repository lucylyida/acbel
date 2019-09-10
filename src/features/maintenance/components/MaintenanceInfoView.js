import React from "react"
import moment from 'moment'
import { withMedia } from 'react-media-query-hoc'
import { fsc, numberFormat } from '../../../helper/fontColorHelper'
import KmDropdown from '../../../kumocom/KmDropdown'
import KmButton from '../../../kumocom/KmButton'

const MaintenanceInfoView = props => {
    const { media, filter, setFilter } = props
    const total_num = 6
    const total_cost = 123905.60
    return (
        <div className="container-fluid px-1 pb-3 d-flex justify-content-between align-items-center flex-wrap">
            <div className="">
                <div className="font-weight-bold" style={{ fontSize: fsc(media, 26) }}>{`Maintenance for ${moment().format("MMMM YYYY")}`}</div>
                <div className="d-flex flex-wrap py-2">
                    <div>
                        <span style={{ color: '#aaaaaa' }}>{"Total Number: "}</span>
                        <span style={{ color: '#000000' }} className="font-weight-bold pl-1 pr-4">{total_num}</span>
                    </div>
                    <div>
                        <span style={{ color: '#aaaaaa' }}>{"Total Cost: "}</span>
                        <span style={{ color: '#000000' }} className="font-weight-bold pl-1 pr-4">{"NT$ " + numberFormat(total_cost)}</span>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-row-reverse align-items-center pl-3">
                <KmButton text={"ADD NEW"} noMinWidth style={{ width: 150 }} />
                <KmDropdown
                    className="pr-3"
                    hideDropdownToggle
                    onClick={setFilter}
                    selectedItem={{ icon: <i className="fa fa-sliders-h" style={{ color: '#8AA3CE' }} />, text: <span style={{ color: '#8AA3CE' }}>FILTER</span> }}
                    data={[
                        {
                            id: 1,
                            icon: 
                            <span className="border rounded" style={{ paddingLeft: 1, paddingRight: 1 }}>
                                <i className="fa fa-square" style={{ color: filter.id === 1 ? '#ffffff' : '#ffffff00' }} />
                            </span>,
                            text: 'All types'
                        },
                        {
                            id: 2,
                            icon:
                                <span className="border rounded" style={{ paddingLeft: 1, paddingRight: 1 }}>
                                    <i className="fa fa-square" style={{ color: filter.id === 2 ? '#ffffff' : '#ffffff00' }} />
                                </span>,
                            text: 'Ad-hoc Maintenance only'
                        },
                        {
                            id: 3,
                            icon:
                                <span className="border rounded" style={{ paddingLeft: 1, paddingRight: 1 }}>
                                    <i className="fa fa-square" style={{ color: filter.id === 3 ? '#ffffff' : '#ffffff00' }} />
                                </span>,
                            text: 'Water Proofing Maintenance only'
                        },
                        {
                            id: 4,
                            icon:
                                <span className="border rounded" style={{ paddingLeft: 1, paddingRight: 1 }}>
                                    <i className="fa fa-square" style={{ color: filter.id === 4 ? '#ffffff' : '#ffffff00' }} />
                                </span>,
                            text: 'Annual Maintenance Only'
                        },
                    ]}
                    style={{ backgroundColor: ' #2244aa', color: '#ffffff' }}
                />

            </div>
        </div>
    )
}

export default withMedia(MaintenanceInfoView)