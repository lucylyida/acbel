import React from 'react'

import FourItemBox from '../../app/components/FourItemBox';
import { withMedia } from 'react-media-query-hoc';
import { fsc } from '../../../helper/fontColorHelper';

const RevenueStatusView = props => {
    const { media } = props
    return (
        <div className="container-fluid" style={{ background: 'white', borderRadius: 4 }}>

            <div className='row py-3'>
                <div className='col-12 py-2' style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"SITE INFORMATION"}</div>

                <div className="col-6 col-md-4 col-lg-3 py-2">
                    <FourItemBox value={1745.23} unit={"NT$"} desc={"TODAY'S ACCUMULATED"} />
                </div>

                <div className="col-6 col-md-4 col-lg-3 py-2">
                    <FourItemBox value={9458.76} unit={"NT$"} desc={"THIS WEEK'S ACCUMULATED"} />
                </div>

                <div className="col-6 col-md-4 col-lg-3 py-2">
                    <FourItemBox value={37453.84} unit={"NT$"} desc={"THIS MONTH'S ACCUMULATED"} />
                </div>

                <div className="col-6 col-md-4 col-lg-3 py-2">
                    <FourItemBox value={183876.83} unit={"NT$"} desc={"THIS YEAR'S ACCUMULATED"} />
                </div>

                <div className="col-6 col-md-4 col-lg-3 py-2">
                    <FourItemBox value={183876.83} unit={"NT$"} desc={"YEARLY AVERAGE ACCUMULATED"} />
                </div>

                <div className="col-6 col-md-4 col-lg-3 py-2">
                    <FourItemBox value={183876.83} unit={"NT$"} desc={"TOTALACCUMULATED"} />
                </div>
            </div>
        </div>
    )
}

export default withMedia(RevenueStatusView);