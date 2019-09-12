import React from 'react'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'
import moment from 'moment'
import FourItemBox from '../../app/components/FourItemBox'
import CloudyIcon from '../../../assets/icons/Cloudy-Icon'
import RainyIcon from '../../../assets/icons/Rainy_Icon'

const ForecastStatusViewB = props => {
    const { media } = props
    const date1 = moment().add(1, 'days').format('MMMM DD YYYY').split(" ")
    const date2 = moment().add(2, 'days').format('MMMM DD YYYY').split(" ")
    return (
        <div className="container-fluid pt-3 pb-2" style={{ background: 'white', borderRadius: 4 }}>
            <div className='pt-3 px-2' style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"NEXT DAYS"}</div>

            <div className="row pb-3">
                <div className="col-sm-6">
                    <div className="pt-2 px-2" style={{ fontSize: fsc(media, 14) }}>
                        {`Tomorrow, ${date1[0]} ${date1[1]}, ${date1[2]}`}
                    </div>
                    <div className="d-flex align-items-center px-2">
                        <div className="flex-grow-1">
                            <FourItemBox value={32} unit={<span>&#8451;</span>} icon={<RainyIcon />} />
                        </div>
                        <div className="flex-grow-1">
                            <FourItemBox value={470} unit={"kW"} desc={"POWER"} />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="pt-2 px-2" style={{ fontSize: fsc(media, 14) }}>
                        {`${date2[0]} ${date2[1]}, ${date2[2]}`}
                    </div>
                    <div className="d-flex align-items-center px-2">
                        <div className="flex-grow-1">
                            <FourItemBox value={32} unit={<span>&#8451;</span>} icon={<CloudyIcon />} />
                        </div>
                        <div className="flex-grow-1">
                            <FourItemBox value={470} unit={"kW"} desc={"POWER"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withMedia(ForecastStatusViewB);