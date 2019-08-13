import React from 'react'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'
import moment from 'moment'
import FourItemBox from '../../app/components/FourItemBox'
import SunnyIcon from '../../../assets/icons/Sunny_Icon'

const ForecastStatusViewA = props => {
    const { media } = props
    const date = moment().format('dddd MMMM DD YYYY hh:mm A').split(" ")
    return (
        <div className="container-fluid pt-3 pb-2" style={{ background: 'white', borderRadius: 4 }}>
            <div className='pt-3 px-2' style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"TODAY"}</div>

            <div className="row p-2">
                <div className="col-6 col-sm-3" style={{ fontSize: fsc(media, 14) }}>
                    <div>{date[0]}</div>
                    <div>{date[1]} {date[2]} {date[3]}</div>
                    <div>{date[4]} {date[5]}</div>
                </div>
                <div className="col-6 col-sm-9 d-flex align-items-center">
                    <FourItemBox value={32} unit={<span>&#8451;</span>} icon={<SunnyIcon />} />
                </div>
            </div>

            <div className="row pb-3">
                <div className="col-3 py-2">
                    <FourItemBox value={890} unit={<span>W/m<sup>{2}</sup></span>} desc={"RADIATION"} />
                </div>

                <div className="col-3 py-2">
                    <FourItemBox value={555} unit={"kW"} desc={"POWER"} />
                </div>
                <div className="col-3 py-2">
                    <FourItemBox value={61} unit={'%'} desc={"HUMIDITY"} />
                </div>

                <div className="col-3 py-2 ">
                    <FourItemBox value={5} unit={'m/s'} desc={"WIND"} />
                </div>
            </div>
        </div>
    )
}

export default withMedia(ForecastStatusViewA);