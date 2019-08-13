import React from "react"
import PanelStatusView from "../components/PanelStatusView";
import PanelMapSelectView from "../components/PanelMapSelectView";
import PanelMap from '../components/PanelMap'
import PanelInfo from '../components/PanelInfo'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'

const PanelContainer = props => {
    const { media } = props
    return (
        <div className="container-fluid p-0">
            <div className="bg-white p-4" style={{ borderRadius: 4 }}>
                <div className="pl-2" style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"ALL PANELS"}</div>
                <PanelStatusView />
                <PanelMapSelectView />
                <div className="row pl-2">
                    <div className="col-md-6 pb-4">
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

export default withMedia(PanelContainer)