import React from "react"
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'

const ReportContainer = props => {
    const { media } = props
    return (
        <div className="container-fluid p-1">
            <div className="bg-white" style={{ height: 200 }}>

            </div>
            <div className='py-3' style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"HISTORY"}</div>
        </div>
    )
}

export default withMedia(ReportContainer)