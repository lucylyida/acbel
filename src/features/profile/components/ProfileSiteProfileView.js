import React from 'react'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'
import FourItemBox from '../../app/components/FourItemBox'


const SitePicArray = [
    { id: 1, profile: '/Siteprofilepic/profile_1_2014.png' },
    { id: 2, profile: '/Siteprofilepic/profile_1_2077.png' },
    { id: 3, profile: '/Siteprofilepic/profile_1_2084.png' },
    { id: 4, profile: '/Siteprofilepic/profile_1_2091.png' },
    { id: 5, profile: '/Siteprofilepic/profile_2_1.png' },
    { id: 6, profile: '/Siteprofilepic/profile_2_2.png' },
    { id: 7, profile: '/Siteprofilepic/profile_32_1.png' },
    { id: 8, profile: '/Siteprofilepic/profile_32_2.png' },
]
// const SitePicArray = ['/s1.jpg', '/s2.jpg', '/s3.jpg', '/s4.jpg']
// const SitePicArray = ['/s1.jpg', '/s2.jpg', '/s3.jpg', '/s4.jpg', '/s5.jpg', '/s6.jpg', '/s7.jpg', '/s8.jpg']

const ProfileSiteProfileView = props => {
    const { media, startDate, priceSetup, capacity, vendorId, siteId, money_unit } = props

    return (
        <div className="p-4 h-100" style={{ backgroundColor: '#FFFFFF', borderRadius: 4 }}>

            <div className='py-2' style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"SITE PROFILE"}</div>           

            <div className="container-fluid p-0 m-0">
                <div className="row pt-2 pb-3">
                    {
                        startDate !== null &&
                        <div className="col-4 col-lg-5 col-xl-4">
                            <FourItemBox value={startDate} desc={"START DATE"} useNumberFormat={false} />
                        </div>
                    }
                    {
                        priceSetup !== null &&
                        <div className="col-4 col-lg-4 col-xl-4">
                            <FourItemBox value={priceSetup} unit={money_unit} desc={"PRICE SET-UP"} />
                        </div>
                    }
                    {
                        capacity !== null &&
                        <div className="col-4 col-lg-3 col-xl-4">
                            <FourItemBox value={capacity} unit={"kW"} desc={"CAPACITY"} />
                        </div>
                    }
                </div>
            </div>

            <div className="d-flex">
                <img src={`/Siteprofilepic/profile_${vendorId}_${siteId}.png`}
                    alt="panel"
                    className="img rounded img-fluid w-100"
                />
            </div>

            {/* <div className="container-fluid p-1">
                <div className="row px-2">
                    {
                        SitePicArray.map((v, k) =>
                            <div key={k} className="col-3 col-lg-3 col-md-6 p-1">
                                <img src={`${v.profile}`} alt="panel" 
                                className="img rounded img-fluid"
                                 width={'100%'} height={160} 
                                 />
                            </div>)
                    }
                </div>
            </div> */}

        </div>
    )
}

export default withMedia(ProfileSiteProfileView)
