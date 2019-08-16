import React from "react"
import moment from 'moment'
import { Route, Link, Switch, Redirect, } from "react-router-dom"
import { withMedia } from 'react-media-query-hoc'
import { fsc, numberFormat } from '../../../helper/fontColorHelper'
import MaintenanceNavbar from "../../app/components/MaintenanceNavbar"
import LeftSidebar from "../../app/components/LeftSidebar";
import MaintenanceSideListContainer from "./MaintenanceSideListContainer"
import MaintenanceSideCalendarContainer from "./MaintenanceSideCalendarContainer"
import * as route from "../../../config/route.config"

const MaintenanceContainer = props => {
    const { media, match } = props

    return (
        <div className={`container-fluid py-2 ${media.mobile ? "px-1" : "px-4"}`}>
            <MaintenanceNavbar {...props} />

            <div className="d-flex flex-row flex-wrap flex-md-nowrap">
                <div className="flex-grow-1">
                    <LeftSidebar
                        online={218} offine={12} siteChoose={true} active={true} efficiency={100} capacity={170.00}
                    />
                </div>
                <div className="w-100 pb-2">
                    <MaintenancePage {...props} />
                </div>
            </div>
        </div>
    )
}

export default withMedia(MaintenanceContainer)

const MaintenancePage = props => {
    const pageName = props.match.params.pageName
    switch (pageName) {
        case route.list:
            return <MaintenanceSideListContainer {...props} />
        case route.calendar:
            return <MaintenanceSideCalendarContainer {...props} />
        default:
            return <MaintenanceSideListContainer {...props} />
    }
}