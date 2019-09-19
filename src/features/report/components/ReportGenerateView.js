import React from 'react'
import KmSelector from '../../../kumocom/KmSelector'
import KmButtom from '../../../kumocom/KmButton'
import KmDatePicker from '../../../kumocom/KmDatePicker'

import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'

const ReportGeneratorView = props => {
    const {
        media,
        vendorNameList,
        siteNameList,
        
        selectedVendor,
        selectedSite,
        selectedDate,
        selectedReportType,
        selectedDeviceType,

        onVendorChanged,
        onSiteChanged,
        onDeviceTypeChanged,
        onDateChanged,
        onReportTypeChanged,
        // onchangedata,
        
        ondownloadReport,

    } = props
    // console.log(selectedDate)
    return (
        <div className="p-2 ">
            <div className="py-2" style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>REPORT GENERATION</div>

            <div className="d-flex flex-lg-nowrap flex-wrap">
                <div className=" px-1 py-2 flex-fill col-lg-4 col-xs-6">
                    <div style={{ fontSize: fsc(media, 13), color: '#999999' }}>TYPE OF REPORT</div>
                    <KmSelector
                        style={{ indicator: 'none' }}
                        placeholder="Select Report Type"
                        options={
                            [
                                { label: 'Report Raw', type: '1' },
                            ]
                        }
                        value={selectedReportType}
                        onChange={onReportTypeChanged}
                        optionLabel='label'
                    />
                </div>

                <div className=" px-1 py-2 flex-fill col-lg-4 col-xs-6 ">
                    <div style={{ fontSize: fsc(media, 13), color: '#999999' }}>Vendor</div>
                    <KmSelector
                        style={{ indicator: 'none' }}
                        value={selectedVendor}
                        onChange={onVendorChanged}
                        placeholder="Select Vendor"
                        options={vendorNameList} // [ { value: 'chocolate_value', label: 'Vendor 1', type: '1' } ]
                        optionLabel='vendor_name'
                    />
                </div>
                <div className=" px-1 py-2 flex-fill col-lg-4 col-xs-6  ">
                    <div style={{ fontSize: fsc(media, 13), color: '#999999' }}>Site</div>
                    <KmSelector
                        style={{ indicator: 'none' }}
                        value={selectedSite}
                        onChange={onSiteChanged}
                        placeholder="Select Site"
                        options={siteNameList} // [ { value: 'chocolate_value', label: 'Site1', type: '1' }]

                        optionLabel='site_name'
                    />
                </div>
                <div className=" px-1 py-2 flex-fill col-lg-4 col-xs-6">
                    <div style={{ fontSize: fsc(media, 13), color: '#999999' }}>DEVICE TYPE</div>
                    <KmSelector
                        style={{ indicator: 'none' }}
                        placeholder="Select Type"
                        onChange={onDeviceTypeChanged}
                        value={selectedDeviceType}
                        options={
                            [
                                { label: 'Inverter', type: '1', value:"inverter" },
                                { label: 'Panel', type: '1', value: "panel" },
                                { label: 'Radiator', type: '1', value: "radiator" },
                                { label: 'Thermometer', type: '1', value: "thermometer" },
                            ]
                        }
                        optionLabel='label'
                    />
                </div>
                <div className="px-1 py-2 flex-fill col-lg-4 col-xs-6">
                    <div style={{ fontSize: fsc(media, 13), color: '#999999' }}> DATE</div>
                    <div>
                        <KmDatePicker 
                            noWidth
                            value={selectedDate}
                            onChange={onDateChanged}    
                        />
                    </div>
                </div>
                <div className="flex-fill p-2 col-4 ">
                    <div style={{ fontSize: fsc(media, 13), color: '#999999' }}>EXPORT REPORT AS</div>
                    <KmButtom text="CSV"
                        onClick={ondownloadReport}
                        style={{ width: 80 }}
                    />
                </div>
            </div>
        </div >
    )
}
export default withMedia(ReportGeneratorView)

