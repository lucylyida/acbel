import React from 'react'
import { withMedia } from 'react-media-query-hoc';
import { fsc } from '../../../helper/fontColorHelper';
import FourItemBox from '../../app/components/FourItemBox'

const DashStatusViewB = props => {
    const { media, selectedSite } = props
    return (
        <div className="container-fluid" style={{ background: 'white', borderRadius: 4 }}>

            <div className='row py-2'>
                <div className='col-12 py-2' >
                    <span style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"PERFOMANCE"}</span>
                </div>

                <div className="col-6 col-sm-4 py-2 ">
                    <FourItemBox value={1859} unit={"kW"} desc={"TOTAL POWER OUTPUT"} />
                </div>

                <div className="col-6 col-sm-4 py-2 ">
                    <FourItemBox value={88} unit={'%'} desc={"EQUIPMENT RELIABILITY"} />
                </div>

                <div className="col-4 col-sm-4 py-2 ">
                    <FourItemBox value={selectedSite.isOnline ? 'Online' : 'Offline'} desc={"SITE STATUS"} />
                </div>

                <div className="col-2 col-sm-4 py-2 ">
                    <FourItemBox value={93} unit={"%"} desc={"RA"} />
                </div>

                <div className="col-6 col-sm-4 py-2 ">
                    <FourItemBox value={76} unit={"%"} desc={"DATA CONNECTIVITY"} />
                </div>

            </div>
        </div>
    )
}

export default withMedia(DashStatusViewB);