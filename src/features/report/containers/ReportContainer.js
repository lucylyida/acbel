import React, { useState } from "react"
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'

import ReportGeneratorView from '../components/ReportGenerateView'
import ReportGenerateHistoryView from '../components/ReportGenerateHistoryView'

import { useSelector, useDispatch } from 'react-redux'
import * as Action from '../../../action'
import action from "../../../action/action";

const ReportContainer = props => {
    const { media } = props
    // const [onchangedata, setonchangedata] = useState("")

    const vendorState = useSelector(state => state.vendorReducer)
    const reportState = useSelector(state => state.siteReportReducer)

    // const vendor_id = selectedVendor !== null ? selectedVendor.id : null
    // const site_id = selectedSite !== null ? selectedSite.hid : null

    const dispatch = useDispatch()
  
    return (
        <div className="container-fluid px-1">
            <div className="bg-white p-2" style={{ borderRadius: 4 }}>
                <ReportGeneratorView
                    vendorNameList={vendorState.vendorNameList}
                    siteNameList={vendorState.siteNameList}
                    
                    selectedVendor={reportState.selectedVendor}
                    selectedSite={reportState.selectedSite}
                    selectedReportType={reportState.selectedReportType}
                    selectedDeviceType={reportState.selectedDeviceType}
                    selectedDate= {reportState.selectedDate}

                    onVendorChanged={d => dispatch(Action.reportHandleChanged({ selectedVendor: d }))}
                    onSiteChanged={d => dispatch(Action.reportHandleChanged({ selectedSite: d }))}
                    onDeviceTypeChanged={(d) => dispatch(Action.reportHandleChanged({ selectedDeviceType: d }))}
                    onDateChanged={d => dispatch(Action.reportHandleChanged({ selectedDate: d }))}
                    onReportTypeChanged={d => dispatch(Action.reportHandleChanged({ selectedReportType: d }))}

                    ondownloadReport={() => {
                        // console.log({ 
                        //     selectedVendor: reportState.selectedVendor, 
                        //     selectedSite: reportState.selectedSite, 
                        //     selectedReportType: reportState.selectedReportType, 
                        //     selectedDeviceType: reportState.selectedDeviceType, 
                        //     selectedDate: reportState.selectedDate })
                        const { 
                            selectedVendor,
                            selectedSite,
                            selectedReportType,
                            selectedDeviceType,
                            selectedDate,
                        } = reportState
                        dispatch(Action.getSiteReportData(reportState))
                    }}

                />
            </div>
            <div className="pt-5">
                <div className='' style={{ color: '#FF8902', fontSize: fsc(media, 14) }}> {"HISTORY"} </div>
                <ReportGenerateHistoryView />
            </div>
        </div>
    )
}
export default withMedia(ReportContainer)