import React from 'react'
import moment from 'moment'

import { FourItemBox } from '../../app/components/FourItemBox'
import SunnyIcon from '../../../assets/icons/Sunny_Icon'

const DashStatusViewA = props => {
    const { } = props
    return (
        <div className="container-fluid" style={{ background: 'white', borderRadius: 4 }}>

            <div className='row py-2'>
                <div className='col-12 py-2' style={{ fontSize: 10 }}>
                    <span style={{ color: '#FF8902' }}>{"TODAY"}</span>
                    <span className="pl-2">{moment().format('dddd D MMMM YYYY h:mm A')}</span>
                </div>

                <div className="col-6 col-sm-4 py-2 ">
                    <FourItemBox value={32} unit={<span>&#8451;</span>} icon={<SunnyIcon />} />
                </div>

                <div className="col-6 col-sm-4 py-2 ">
                    <FourItemBox value={61} unit={'%'} desc={"HUMIDITY"}  />
                </div>

                <div className="col-6 col-sm-4 py-2 ">
                    <FourItemBox value={5} unit={'m/s'} desc={"WIND"}  />
                </div>

                <div className="col-6 col-sm-4 py-2 ">
                    <FourItemBox value={324} unit={"kW"} desc={"TODAY'S POWER"} />
                </div>

                <div className="col-6 col-sm-4 py-2 ">
                    <FourItemBox value={384} unit={"NT$"} desc={"TOTAL ACC REVENUE"} />
                </div>

                <div className="col-6 col-sm-4 py-2 text-truncate">
                    <FourItemBox value={22280034} unit={"kW"} desc={"TOTAL ACC. POWER"} />
                </div>

            </div>
        </div>
    )
}

export default DashStatusViewA;