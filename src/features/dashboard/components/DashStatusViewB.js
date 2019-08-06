import React from 'react'

import { FourItemBox } from '../../app/components/FourItemBox'

const DashStatusViewB = props => {
    const { } = props
    return (
        <div className="container-fluid" style={{ background: 'white', borderRadius: 4 }}>

            <div className='row py-2'>
                <div className='col-12 py-2' style={{ fontSize: 10 }}>
                    <span style={{ color: '#FF8902' }}>{"PERFOMANCE"}</span>
                </div>

                <div className="col-6 col-sm-4 py-2 ">
                    <FourItemBox value={1859} unit={"kW"} desc={"TOTAL POWER OUTPUT"} />
                </div>

                <div className="col-6 col-sm-4 py-2 ">
                    <FourItemBox value={88} unit={'%'} desc={"EQUIPMENT RELIABILITY"} />
                </div>

                <div className="col-6 col-sm-4 py-2 ">
                    <FourItemBox value={'Normal'} desc={"SITE STATUS"} />
                </div>

                <div className="col-6 col-sm-4 py-2 ">
                    <FourItemBox value={93} unit={"%"} desc={"RA"} />
                </div>

                <div className="col-6 col-sm-4 py-2 ">
                    <FourItemBox value={76} unit={"%"} desc={"DATA CONNECTIVITY"} />
                </div>

            </div>
        </div>
    )
}

export default DashStatusViewB;