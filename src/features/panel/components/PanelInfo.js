import React from 'react'
import FourItemBox from '../../app/components/FourItemBox'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'
import moment from 'moment'
import { panel } from '../../../config/route.config'

const PanelInfo = props => {
    const { media ,panelInfo} = props
    
    const date = moment().format('DD MMMM YY')
    const time = moment().format('hh:mm:ss A')

    if(!panelInfo) return null

    return (
        <div className="container-fluid px-0 pt-4">
            <FourItemBox value={panelInfo.device_id} desc={'PANEL NUMBER'} useNumberFormat={false} icon={<div style={{ width: 50, height: 50, backgroundColor: '#F9C209' }} />} />

            <div className="pt-5 pb-2" style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"PANEL DETAILS"}</div>

            <div className="row">
                <div className="col-4 p-2">
                    <FourItemBox value={70.00} desc={'Capacity'} unit={'W'} />
                </div>
                <div className="col-4 p-2">
                    <FourItemBox value={panelInfo.watt} desc={'CURRENT OUTPUT'} unit={'W'} />
                </div>
                <div className="col-4 p-2">
                    <FourItemBox value={92} desc={'EFFICIENCY'} unit={'%'} />
                </div>
                <div className="col-4 p-2">
                    <FourItemBox value={moment(panelInfo.insert_date).format("DD MMM YY")} desc={
                        <div>
                            <div style={{ color: '#000000' }}>{moment(panelInfo.insert_date).format("HH:mm:ss A")}</div>
                            <div className="pt-2">{"LAST DATA"}</div>
                        </div>
                    }
                    />
                </div>
                {/* <div className="col-4 p-2">
                    <FourItemBox value={42} desc={'TEMPERATURE'} unit={<span>&#8451;</span>} />
                </div> */}
            </div>

            <div className="pt-4">
                <div style={{ fontSize: fsc(media, 26), color: '#F9C209' }}>{"Require Maintenance"}</div>
                <div style={{ fontSize: fsc(media, 13), color: '#aaaaaa' }}>{"STATUS"}</div>
            </div>
        </div>
    )
}

export default withMedia(PanelInfo);