import React from 'react'
import FourItemBox from '../../app/components/FourItemBox'

const PanelStatusView = props => {
    // const { } = props
    return (
        <div className="container-fluid py-2">
            <div className="row">
                <div className="col-4 col-sm-3 col-xl-1 py-2 px-0">
                    <FourItemBox value={94} unit={'%'} desc={'EFFICIENCY'} />
                </div>
                <div className="col-4 col-sm-3 col-xl-1 py-2 px-0">
                    <FourItemBox value={32.91} unit={'kW'} desc={'CAPACITY'} />
                </div>
                <div className="col-4 col-sm-3 col-xl-1 py-2 px-0">
                    <FourItemBox value={32.91} unit={'kW'} desc={'OUTPUT'} />
                </div>
            </div>
        </div>
    )
}

export default PanelStatusView;