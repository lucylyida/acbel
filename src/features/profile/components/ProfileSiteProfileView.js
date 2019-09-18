import React from 'react'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'
import FourItemBox from '../../app/components/FourItemBox'

import moment from 'moment'
const SitePicArray = ['/s1.jpg', '/s2.jpg', '/s3.jpg', '/s4.jpg']
// const SitePicArray = ['/s1.jpg', '/s2.jpg', '/s3.jpg', '/s4.jpg', '/s5.jpg', '/s6.jpg', '/s7.jpg', '/s8.jpg']

const ProfileSiteProfileView = props => {
    const { media, startDate, priceSetup, capacity } = props

    return (
        <div className="p-4 h-100" style={{ backgroundColor: '#FFFFFF', borderRadius: 4 }}>

            <div className='py-2' style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"SITE PROFILE"}</div>

            <div className="d-flex pt-2 pb-4 flex-wrap">
                {
                    startDate !== null &&
                    <div className="py-2">
                        <FourItemBox value={startDate} desc={"START DATE"} useNumberFormat={false} />
                    </div>
                }
                {
                    priceSetup !== null &&
                    <div className={`px-${media.mobile ? '3' : '5'} py-2`}>
                        <FourItemBox value={priceSetup} unit={'NT$'} desc={"PRICE SET-UP"} />
                    </div>
                }
                {
                    capacity !== null &&
                    <div className="py-2">
                        <FourItemBox value={capacity} unit={"kW"} desc={"CAPACITY"} />
                    </div>
                }
            </div>

            <div className="d-flex">
                <img src={require('./panelpic1.jpg')} alt="panel" className="img rounded img-fluid w-100" />
            </div>

            <div className="container-fluid p-1">
                <div className="row px-2">
                    {
                        SitePicArray.map((v, k) =>
                            <div key={k} className="col-3 col-lg-3 col-md-6 p-1">
                                <img src={`${v}`} alt="panel" className="img rounded img-fluid" width={'100%'} height={160} />
                            </div>)
                    }
                </div>
            </div>

        </div>
    )
}

export default withMedia(ProfileSiteProfileView)
