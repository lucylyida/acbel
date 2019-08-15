import React from 'react'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'
import p1 from './panelpic1.jpg'
import FourItemBox from '../../app/components/FourItemBox'
const ProfileSiteProfileView = props => {
    const { media } = props
    return (
        <div className="p-4 h-100" style={{ backgroundColor: '#FFFFFF', borderRadius: 4 }}>
            <div className='py-2' style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"SITE PROFILE"}</div>
            <div className="d-flex pt-2 pb-4">
                <div className="pr-5">
                    <FourItemBox value={"Apr 25, 2017"} desc={"START DATE"} useNumberFormat={false} />
                </div>
                <div className="px-5">
                    <FourItemBox value={"540"} unit={'NT$'} desc={"PRICE SET-UP"} />
                </div>
                <div className="pl-5">
                    <FourItemBox value={"32.91"} unit={"kW"} desc={"CAPACITY"} />
                </div>
            </div>
            <div className="d-flex">
                <img src={p1} alt="panel" className="img rounded w-100" style={{ height: 500 }} />
            </div>
        </div>
    )
}

export default withMedia(ProfileSiteProfileView)
