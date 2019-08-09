import React from "react"
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'

import ReportGeneratorView from '../components/ReportGenerateView'

const ReportContainer = props => {
    const { media } = props
    return (
        <div className="container-fluid p-1">
            <div className="bg-white p-2" >
                <ReportGeneratorView />
            </div>
            <div className='py-3' style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"HISTORY"}</div>
        </div>
    )
}

export default withMedia(ReportContainer)