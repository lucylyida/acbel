import React from 'react'

import { FourItemBox } from '../../app/components/FourItemBox';
import SolarPanelIcon from '../../../assets/icons/solarpanel_icn'//'./icons/solarpanel_icn'; 
import PowerIcon from '../../../assets/icons/Power_icon';
import CapacityIcon from '../../../assets/icons/CapacityIcon';
import ConnnectivityIcon from '../../../assets/icons/Connectivity_icon';
import MoneyIcon from '../../../assets/icons/Money_Icon';

const HomeStatusView = props => {
    const { } = props
    return (
        <div className="container-fluid" style={{ background: 'white', borderRadius: 4 }}>

            <div className='row py-3'>
                <div className='col-12 py-2' style={{ color: '#FF8902', fontSize: 10 }}>{"TODAY"}</div>

                <div className="col-6 col-lg-3 py-2">
                    <FourItemBox value={230} desc={"TOTAL NO. OF SITES"} icon={<SolarPanelIcon />} />
                </div>

                <div className="col-6 col-lg-3 py-2">
                    <FourItemBox value={218} desc={"ONLINE SITES"} active={true} icon={<SolarPanelIcon />} />
                </div>

                <div className="col-6 col-lg-3 py-2">
                    <FourItemBox value={12} desc={"OFFLINE SITES"} active={false} icon={<SolarPanelIcon />} />
                </div>

                <div className="col-6 col-lg-3 py-2">
                    <FourItemBox value={230} unit={"kW"} desc={"TOTAL ACC. POWER"} icon={<PowerIcon />} />
                </div>

                <div className="col-6 col-lg-3 py-2">
                    <FourItemBox value={320} unit={"kW"} desc={"TOTAL CAPACITY"} icon={<CapacityIcon />} />
                </div>

                <div className="col-6 col-lg-3 py-2">
                    <FourItemBox value={147.75} unit={"kW"} desc={"POWER OUTPUT"} icon={<PowerIcon />} />
                </div>

                <div className="col-6 col-lg-3 py-2">
                    <FourItemBox value={56} unit={"%"} desc={"SITES CONNECTIVITY"} icon={<ConnnectivityIcon />} />
                </div>

                <div className="col-sm-6 col-lg-3 py-2">
                    <FourItemBox value={456890.55} unit={"NT$"} desc={"TOTAL ACC. REVENUE"} icon={<MoneyIcon />} />
                </div>
            </div>
        </div>
    )
}

export default HomeStatusView;