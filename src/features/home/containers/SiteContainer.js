import React, { Suspense } from "react"
import { Route, Redirect, Switch } from "react-router-dom"
import { enc } from "../../../network-sec/cypher"
import { withMedia } from "react-media-query-hoc"
import { fsc } from "../../../helper/fontColorHelper"
import * as route from "../../../config/route.config"
import SiteNavbar from "../../app/components/SiteNavbar"
import { withPageLoading } from "../../app/hoc/withLoading"
import LeftSidebar from "../../app/components/LeftSidebar";

const DashboardContainer = React.lazy(() => import("../../dashboard/containers/DashboardContainer"))
const ForecastContainer = React.lazy(() => import("../../forecast/containers/ForecastContainer"))
const MaintenanceContainer = React.lazy(() => import("../../maintenance/containers/MaintenanceContainer"))
const ProfileContainer = React.lazy(() => import("../../profile/containers/ProfileContainer"))
const InverterContainer = React.lazy(() => import("../../inverter/containers/InverterContainer"))
const PanelContainer = React.lazy(() => import("../../panel/containers/PanelContainer"))
const RevenueContainer = React.lazy(() => import("../../revenue/containers/RevenueContainer"))
const ReportContainer = React.lazy(() => import("../../report/containers/ReportContainer"));


const SiteContainer = props => {
    const { match, location, media } = props
    const queryData = {
        siteId: 1,
        siteName: "Organic Farmer's Association",
        city: "Hualien City",
        country: "Taiwan"
    }
    // const queryDataEnc = enc(queryData)

    return (
        <div className={`container-fluid ${media.mobile ? "px-0" : "px-4"}`}>
            <SiteNavbar {...props} />
            <div className="d-flex flex-row flex-wrap flex-md-nowrap">
                <div className="flex-grow-1">
                    <LeftSidebar
                        online={218} offine={12} siteChoose={true} active={true} efficiency={100} capacity={170.00}
                        siteName={"Organic Farmer's Association"}
                    />
                </div>
                <div className="w-100 pb-3" style={{ overflow: 'hidden' }}>
                    <Switch>
                        <Route path={`${match.path}/:pageName`} component={SitePage} />
                        <Redirect to={`${match.path}/${route.dashboard}`} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default withMedia(SiteContainer)

const SitePage = props => {
    const pageName = props.match.params.pageName

    switch (pageName) {
        case route.dashboard:
            return withPageLoading(DashboardContainer, props)
        case route.forecast:
            return withPageLoading(ForecastContainer, props)
        case route.revenue:
            return withPageLoading(RevenueContainer, props)
        case route.maintenance:
            return withPageLoading(MaintenanceContainer, props)
        case route.profile:
            return withPageLoading(ProfileContainer, props)
        case route.inverter:
            return withPageLoading(InverterContainer, props)
        case route.panel:
            return withPageLoading(PanelContainer, props)
        case route.report:
            return withPageLoading(ReportContainer, props)
        default:
            return withPageLoading(DashboardContainer, props)
    }
}