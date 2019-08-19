import React from 'react'
import KmButton from '../../../kumocom/KmButton'
import KmToggleButton from '../../../kumocom/KmToggleButton'
import KmDatePicker from '../../../kumocom/KmDatePicker'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'


const SearchPanel = props => {
    const { media } = props
    return (
        <div className="container-fluid p-4 bg-white h-100" style={{ borderRadius: 4 }}>

            <div className='pt-2' style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"TRENDS"}</div>

            <div className="pt-3" style={{ fontSize: fsc(media, 14), color: '#999999' }}>GENERATE BY</div>
            <div className="d-flex py-2" >
                <div className="pr-1"> <KmToggleButton text="YEAR" className="py-2" style={{ width: 100 }} onClick={() => null} /> </div>
                <div className="px-1"> <KmToggleButton text="MONTH" className="py-2" style={{ width: 100 }} onClick={() => null} /></div>
                <div className="px-1"> <KmToggleButton text="DAY" selected className="py-2" style={{ width: 100 }} onClick={() => null} /> </div>
            </div>

            {/* <div className="d-flex flex-lg-nowrap flex-wrap pt-0" style={{ width: media.mobile ? '100%' : 400 ,cursor:'pointer'}}>
                <div className="p-1 flex-fill">
                    <div className="pb-2" style={{ fontSize: fsc(media, 14), color: '#999999' }}>FROM</div>
                    <KmDatePicker />
                </div>
                <div className="p-1 flex-fill">
                    <div className="pb-2" style={{ fontSize: fsc(media, 14), color: '#999999' }}>TO</div>
                    <KmDatePicker />
                </div>
            </div> */}


            <div className="row pt-0" style={{ cursor: 'pointer' }}>
                <div className="col-sm-6">
                    <div className="pb-2" style={{ fontSize: fsc(media, 14), color: '#999999' }}>FROM</div>
                    <KmDatePicker />
                </div>
                <div className="col-sm-6">
                    <div className="pb-2" style={{ fontSize: fsc(media, 14), color: '#999999' }}>TO</div>
                    <KmDatePicker />
                </div>
            </div>
            <div className="pl-1 pt-4 pb-2">
                <KmButton text="SEARCH" style={{ width: 120 }} />
            </div>
        </div>
    )
}
export default withMedia(SearchPanel)

// style={{ width: media.mobile ? '100%' : 400 }}