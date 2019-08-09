import React from "react"
import PanelStatusView from "../components/PanelStatusView";
import PanelMapSelectView from "../components/PanelMapSelectView";
import PanelMap from '../components/PanelMap'
import PanelInfo from '../components/PanelInfo'
const PanelContainer = props => {
    return (
        <div className="container-fluid p-0">
            <div className="bg-white p-2" style={{ borderRadius: 4 }}>
                <div>All Panels</div>
                <PanelStatusView />
                <PanelMapSelectView />
                <div className="row">
                    <div className="col-md-6">
                        <PanelMap />
                    </div>
                    <div className="col-md-6">
                        <PanelInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanelContainer