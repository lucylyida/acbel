import React from "react"
import moment from 'moment'
import { withMedia } from 'react-media-query-hoc'
import { fsc, numberFormat } from '../../../helper/fontColorHelper'
import MaintenanceInfoView from "../components/MaintenanceInfoView";
import MaintenanceItemCardView from "../components/MaintenanceItemCardView";
import MaintenanceTableView from "../components/MaintenanceTableView";

const MaintenanceContainer = props => {
    const { media } = props

    return (
        <div className="container-fluid p-1">

            <MaintenanceInfoView />

            <MaintenanceItemCardView />

            <MaintenanceTableView />

        </div>
    )
}

export default withMedia(MaintenanceContainer)