import React, { useState } from 'react'
import KmButton from '../../../kumocom/KmButton'
import KmToggleButton from '../../../kumocom/KmToggleButton'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'


const SearchPanel = props => {
    const { media } = props
    return (
        <div className="container-fluid px-4 py-3 bg-white" style={{ borderRadius: 4 }}>
            <div className='  ' style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"TRENDS"}</div>
            <div className="py-1 " style={{ fontSize: fsc(media, 13), color: '#999999' }}>GENERATE BY</div>
            <div className="d-flex py-2" >
                <div className="px-1"> <KmToggleButton text="YEAR" className="py-2" style={{ width: 100 }} /> </div>
                <div className="px-1"> <KmToggleButton text="MONTH" className="py-2" style={{ width: 100 }} /></div>
                <div className="px-1"> <KmToggleButton text="DAY" selected className="py-2" style={{ width: 100 }} /> </div>
            </div>

            <div className="d-flex" style={{ width: media.mobile ? '100%' : 400 }}>
                <div className="p-1 flex-grow-1">
                    <div style={{ fontSize: fsc(media, 14), color: '#999999' }}>FROM</div>
                    <div className="bg-light p-2 rounded border border-secondary d-flex justify-content-between" style={{ cursor: "pointer" }}>
                        <div>22/04/2019</div>
                        <div><i className="far fa-calendar" /></div>
                    </div>
                </div>
                <div className="p-1 flex-grow-1 ">
                    <div style={{ fontSize: fsc(media, 14), color: '#999999' }}>TO</div>
                    <div className="bg-light p-2 rounded border border-secondary d-flex justify-content-between" style={{ cursor: "pointer" }}>
                        <div>22/04/2019</div>
                        <div><i className="far fa-calendar" /></div>
                    </div>
                </div>
            </div>

            <div className="pl-1 py-2">
                <KmButton text="SEARCH" style={{ width: 120 }} />
            </div>
        </div>
    )
}
export default withMedia(SearchPanel)