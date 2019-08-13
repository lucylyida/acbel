import React from 'react'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'
 import p1 from './panelpic1.jpg'

const ProfileSiteProfileView = props => {
    const { media } = props
    return (
        <div>
            <div style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>SITE PROFILE</div>
            <div className="d-flex py-2">
                <div className="flex-fill ">
                    <div style={{ fontSize: fsc(media, 20), color: '#0B3D92' }} className="font-weight-bold"> Apr 25 ,2017</div>
                    <div style={{ fontSize: fsc(media, 12), color: '#C4C4C4' }}>START DATE</div>
                </div>
                <div className="flex-fill">
                    <div style={{ fontSize: fsc(media, 20), color: '#0B3D92' }} className="font-weight-bold">NT$ 540</div>
                    <div style={{ fontSize: fsc(media, 12), color: '#C4C4C4' }}>PRICE SET UP</div>
                </div>
                <div className="flex-fill">
                    <div style={{ fontSize: fsc(media, 20), color: '#0B3D92' }} className="font-weight-bold">32.91 kw</div>
                    <div style={{ fontSize: fsc(media, 12), color: '#C4C4C4' }}>CAPACITY</div>
                </div>
            </div>
            <div className="d-flex">
                <div className="flex-grow-1 py-2" >
                     <img src={p1} alt="panel" className="img-fluid rounded w-100"  style={{ objectFit: 'contain', }}/>
                </div>

            </div>
            

        </div>
    )
}
export default withMedia(ProfileSiteProfileView)



{/* <div className="flex-grow-1  pt-3 pb-3" >
                <img src={p1} alt="panel" className="img-fluid rounded w-75"  style={{ objectFit: 'contain', }}/>
            </div> */}