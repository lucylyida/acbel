import React from 'react'
import KmSelector from '../../../kumocom/KmSelector'
import KmButtom from '../../../kumocom/KmButton'
import {withMedia} from 'react-media-query-hoc'
import {fsc} from '../../../helper/fontColorHelper'

const ReportGeneratorView = props => {
    const {media} = props
    return (
        <div>
            <div className="py-2" style={{ color: '#FF8902',fontSize:fsc(media,14) }}>REPORT GENERATION</div>

            <div className="d-flex flex-lg-nowrap flex-wrap">
                <div className="py-1 px-2 flex-fill">
                    <div style={{ fontSize: fsc(media,13), color: '#999999' }}>TYPE OF REPORT</div>
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
                <div className="flex-grow-1 d-flex px-2">
                    <div className="p-1 flex-grow-1">
                        <div style={{ fontSize: fsc(media,13), color: '#999999' }}>FROM</div>
                        <div className="bg-light p-1 rounded border border-secondary d-flex justify-content-between" style={{ cursor: "pointer" }}>
                            <div>22/04/2019</div>
                            <div><i className="far fa-calendar" /></div>
                        </div>
                    </div>
                    <div className="p-1 flex-grow-1">
                        <div style={{ fontSize: fsc(media,13), color: '#999999' }}>TO</div>
                        <div className="bg-light p-1 rounded border border-secondary d-flex justify-content-between" style={{ cursor: "pointer" }}>
                            <div>22/04/2019</div>
                            <div><i className="far fa-calendar" /></div>
                        </div>
                    </div>
                </div>
                <div className=" flex-grow-1  flex-fill">
                    <div style={{ fontSize: fsc(media,13), color: '#999999' }}>EXPORT REPORT AS</div>
                    <div className="d-flex">
                        <div > <KmButtom text="PDF" noMinWidth style={{ width: 80 }} /></div>
                        <div className="px-2"><KmButtom text="PRINT" noMinWidth style={{ width: 80 }} /> </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default withMedia(ReportGeneratorView)