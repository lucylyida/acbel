import React from 'react'
import moment from 'moment'

import FourItemBox from '../../app/components/FourItemBox'
import SunnyIcon from '../../../assets/icons/Sunny_Icon'

import { withMedia } from 'react-media-query-hoc';
import { fsc } from '../../../helper/fontColorHelper';

const DashStatusViewA = props => {
    const { media, temperature, humidity, wind } = props
    return (
        <div className="container-fluid" style={{ background: 'white', borderRadius: 4 }}>

            <div className='row py-2'>

                <div className="col-12 pt-3 pb-2 d-flex" style={{ whiteSpace: 'nowrap', fontSize: fsc(media, 14) }}>
                    <div style={{ color: '#FF8902' }}>{"TODAY"}</div>
                    <div className={media.mobile ? "pl-3" : "pl-5"}>
                        {/* {moment().format('dddd D MMMM YYYY h:mm A')} */}
                        Wednesday 22 September 2019 22:22 PM
                    </div>
                </div>

                <div className="col-6 col-sm-4 py-2">
                    <FourItemBox value={temperature} unit={<span>&#8451;</span>} icon={<SunnyIcon />} />
                </div>

                <div className="col-6 col-sm-4 py-2 ">
                    <FourItemBox value={humidity} unit={'%'} desc={"HUMIDITY"} />
                </div>

                <div className="col-6 col-sm-4 py-2 ">
                    <FourItemBox value={wind} unit={'m/s'} desc={"WIND"} />
                </div>

                <div className="col-6 col-sm-4 py-2 ">
                    <FourItemBox value={324} unit={"kW"} desc={"TODAY'S POWER"} />
                </div>

                <div className="col-6 col-sm-4 py-2 ">
                    <FourItemBox value={384} unit={"NT$"} desc={"TOTAL ACC REVENUE"} />
                </div>

                <div className="col-6 col-sm-4 py-2">
                    <FourItemBox value={22280034} unit={"kW"} desc={"TOTAL ACC. POWER"} />
                </div>

            </div>
        </div>
    )
}

export default withMedia(DashStatusViewA);