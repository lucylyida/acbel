import React from "react"
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'

import ReportGeneratorView from '../components/ReportGenerateView'
import ReportGenerateHistoryView from '../components/ReportGenerateHistoryView'


const ReportContainer = props => {
    const { media } = props
    return (
        <div className="container-fluid p-1">
            <div className="bg-white p-2" style={{ borderRadius: 4 }}>
                <ReportGeneratorView />
            </div>
            <div className="py-5">
                <div className='py-2' style={{ color: '#FF8902', fontSize: fsc(media, 14) }}> {"HISTORY"} </div>
                <ReportGenerateHistoryView />
            </div>


        </div>
    )
}

export default withMedia(ReportContainer)