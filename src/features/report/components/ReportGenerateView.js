import React from 'react'
import KmSelector from '../../../kumocom/KmSelector'
import KmButtom from '../../../kumocom/KmButton'
import KmDatePicker from '../../../kumocom/KmDatePicker'

import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'

const ReportGeneratorView = props => {
    const { media } = props
    return (
        <div className="p-2">
            <div className="py-2" style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>REPORT GENERATION</div>
            <div className="d-flex flex-lg-nowrap flex-wrap">
                <div className=" px-1 py-2 flex-fill ">
                    <div style={{ fontSize: fsc(media, 13), color: '#999999' }}>TYPE OF REPORT</div>
                    <KmSelector
                        style={{ indicator: 'none' }}
                        placeholder="Select Type"
                        options={
                            [
                                { label: 'Report1', type: '1' },
                                { label: 'Report2', type: '2' },
                                { label: 'Report3', type: '3' }
                            ]
                        }
                        optionLabel='label'
                    />
                </div>
                <div className="d-flex flex-nowrap">
                    <div className="px-1 py-2">
                        <div style={{ fontSize: fsc(media, 13), color: '#999999' }}>FROM</div>
                        <div><KmDatePicker style={{ width: 150 }} /></div>
                    </div>
                    <div className="px-1 py-2">
                        <div style={{ fontSize: fsc(media, 13), color: '#999999' }}>TO</div>
                        <div><KmDatePicker style={{ width: 150 }} /></div>
                    </div>
                </div>
                <div className="flex-fill p-2">
                    <div style={{ fontSize: fsc(media, 13), color: '#999999' }}>EXPORT REPORT AS</div>
                    <div className="d-flex">
                        <div>
                            <KmButtom text="PDF" noMinWidth style={{ width: 80 }} />
                        </div>
                        <div className="px-2">
                            <KmButtom text="PRINT" noMinWidth style={{ width: 80 }} />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default withMedia(ReportGeneratorView)

