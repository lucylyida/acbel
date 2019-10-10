import React from 'react'

import FourItemBox from '../../app/components/FourItemBox';
import SolarPanelIcon from '../../../assets/icons/solarpanel_icn';
import PowerIcon from '../../../assets/icons/Power_icon';
import CapacityIcon from '../../../assets/icons/CapacityIcon';
import ConnnectivityIcon from '../../../assets/icons/Connectivity_icon';
import MoneyIcon from '../../../assets/icons/Money_Icon';
import { withMedia } from 'react-media-query-hoc';


const HomeStatusView = props => {
    const {  data, money_unit } = props  
    return (
        <div className="container-fluid" style={{ background: 'white', borderRadius: 4 }}>

            <div className='row py-3'>
                {/* <div className='col-12 py-2' style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"TODAY"}</div> */}

                <div className="col-6 col-lg-4 col-xl-3 py-2">
                    <FourItemBox value={data.total_number_sites} desc={"TOTAL NO. OF SITES"} icon={<SolarPanelIcon />} />
                </div>

                <div className="col-6 col-lg-4 col-xl-3 py-2">
                    <FourItemBox value={data.total_online_sites} desc={"ONLINE SITES"} active={true} icon={<SolarPanelIcon />} />
                </div>

                <div className="col-6 col-lg-4 col-xl-3 py-2">
                    <FourItemBox value={data.total_offline_sites} desc={"OFFLINE SITES"} active={false} icon={<SolarPanelIcon />} />
                </div>

                <div className="col-6 col-lg-4 col-xl-3 py-2 text-truncate">
                    <FourItemBox value={data.total_acc_power} unit={"kW"} desc={"TOTAL ACC. POWER"} icon={<PowerIcon />} />
                </div>

                <div className="col-6 col-lg-4 col-xl-3 py-2">
                    <FourItemBox value={data.total_capacity_kw} unit={"kW"} desc={"TOTAL CAPACITY"} icon={<CapacityIcon />} />
                </div>

                <div className="col-6 col-lg-4 col-xl-3 py-2">
                    <FourItemBox value={data.total_power_output} unit={"kW"} desc={"POWER OUTPUT"} icon={<PowerIcon />} />
                </div>

                <div className="col-6 col-lg-4 col-xl-3 py-2">
                    <FourItemBox value={data.site_connectivity} unit={"%"} desc={"SITES CONNECTIVITY"} icon={<ConnnectivityIcon />} />
                </div>

                <div className="col-6 col-lg-4 col-xl-3 py-2 text-truncate">
                    <FourItemBox value={data.total_acc_revenue} unit={money_unit} desc={"TOTAL ACC. REVENUE"} icon={<MoneyIcon />} />
                </div>
            </div>
        </div>
    )
}

export default withMedia(HomeStatusView);