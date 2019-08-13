import React from "react"
import moment from 'moment'
import { withMedia } from 'react-media-query-hoc'
import { fsc, numberFormat } from '../../../helper/fontColorHelper'

const MaintenanceContainer = props => {
    const { media } = props
    const total_num = 6
    const total_cost = 123905.60
    return (
        <div className="container-fluid p-1">

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

            <div className="py-2" style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"HISTORY"}</div>

        </div>
    )
}

export default withMedia(MaintenanceContainer)