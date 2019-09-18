import React from "react"
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'

import ReportGeneratorView from '../components/ReportGenerateView'
import ReportGenerateHistoryView from '../components/ReportGenerateHistoryView'

import { useSelector, useDispatch } from 'react-redux'
import * as Action from '../../../action'
import * as api from "../../../network-sec/api"

const ReportContainer = props => {
    const { media } = props
    const reportOfVendorState = useSelector(state => state.vendorReducer)
    const siteReportState = useSelector(state => state.siteReportReducer)
    console.log("report ",reportOfVendorState)
    const {
        vendorNameList,
        siteNameList,
        selectedVendor,
        selectedSite,
    } = reportOfVendorState

    const vendor_id = selectedVendor !== null ? selectedVendor.id : null
    const site_id = selectedSite !== null ? selectedSite.hid : null
  

    const dispatch = useDispatch()

    if(siteReportState && siteReportState.SiteReportData!==null) {
        window.location.href = `${api.BASE_URL}${siteReportState.SiteReportData}`  
        // dispatch(Action.globalHandleSelectFilter({ SiteReportData: null }))
    }

    return (
        <div className="container-fluid px-1">
            <div className="bg-white p-2" style={{ borderRadius: 4 }}>
                <ReportGeneratorView
                    vendorNameList={vendorNameList}
                    siteNameList={siteNameList}
                    selectedVendor={selectedVendor}
                    selectedSite={selectedSite}
                    onVendorChange={d => dispatch(Action.globalHandleSelectFilter({ selectedVendor: d }))}
                    onSiteChange={d => dispatch(Action.globalHandleSelectFilter({ selectedSite: d }))}
                    ondownloadReport ={ () => dispatch(Action.getSiteReportData()) }
                />
            </div>
            <div className="pt-5">
                <div className='' style={{ color: '#FF8902', fontSize: fsc(media, 14) }}> {"HISTORY"} </div>
                <ReportGenerateHistoryView />
            </div>
        </div>
    )
}
// onVendorChange={d => dispatch(Action.globalHandleSelectFilter({ selectedVendor: d }))}
export default withMedia(ReportContainer)