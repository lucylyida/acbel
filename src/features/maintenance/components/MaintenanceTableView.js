import React from "react"
import { withMedia } from 'react-media-query-hoc'
import { fsc, numberFormat } from '../../../helper/fontColorHelper'

const MaintenanceTableView = props => {
    const { media } = props
    return (
        <div className="container-fluid p-0">
            <div className="pb-2" style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"HISTORY"}</div>
        </div>
    )
}

export default withMedia(MaintenanceTableView)