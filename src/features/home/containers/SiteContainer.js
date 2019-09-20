import React, { Suspense } from "react"
import { Route, Redirect, Switch } from "react-router-dom"
import { enc } from "../../../network-sec/cypher"
import { withMedia } from "react-media-query-hoc"
import { fsc } from "../../../helper/fontColorHelper"
import * as route from "../../../config/route.config"
import SiteNavbar from "../../app/components/SiteNavbar"
import { withPageLoading } from "../../app/hoc/withLoading"
import LeftSidebar from "../../app/components/LeftSidebar";
import { useSelector, useDispatch } from 'react-redux'
import * as Action from '../../../action'
import { useCookies } from 'react-cookie';

const DashboardContainer = React.lazy(() => import("../../dashboard/containers/DashboardContainer"))
const ForecastContainer = React.lazy(() => import("../../forecast/containers/ForecastContainer"))
const MaintenanceContainer = React.lazy(() => import("../../maintenance/containers/MaintenanceContainer"))
const ProfileContainer = React.lazy(() => import("../../profile/containers/ProfileContainer"))
const InverterContainer = React.lazy(() => import("../../inverter/containers/InverterContainer"))
const PanelContainer = React.lazy(() => import("../../panel/containers/PanelContainer"))
const RevenueContainer = React.lazy(() => import("../../revenue/containers/RevenueContainer"))
const ReportContainer = React.lazy(() => import("../../report/containers/ReportContainer"));

// import DashboardContainer from "../../dashboard/containers/DashboardContainer"
// import ForecastContainer from "../../forecast/containers/ForecastContainer"
// import MaintenanceContainer from "../../maintenance/containers/MaintenanceContainer"
// import ProfileContainer from "../../profile/containers/ProfileContainer"
// import InverterContainer from "../../inverter/containers/InverterContainer"
// import PanelContainer from "../../panel/containers/PanelContainer"
// import RevenueContainer from "../../revenue/containers/RevenueContainer"
// import ReportContainer from "../../report/containers/ReportContainer"

const SiteContainer = props => {
    const { match, location, media } = props
    const [cookies] = useCookies(['user']);
    const queryData = {
        siteId: 1,
        siteName: "Organic Farmer's Association",
        city: "Hualien City",
        country: "Taiwan"
    }
    // const queryDataEnc = enc(queryData)
    const vendorState = useSelector(state => state.vendorReducer)
     const dispatch = useDispatch()

    const {
        vendorNameList,
        siteNameList,
        selectedVendor,
        selectedSite,
    } = vendorState

    const vendor_id = selectedSite !== null
        ? selectedSite.vendor_id
        : selectedVendor !== null
            ? selectedVendor.id
            : cookies.user === undefined ? undefined : cookies.user.vendor_id

    const site_id = selectedSite !== null ? selectedSite.hid : null

    const bodyData = { vendor_id: props.match.params.vendorId, site_id: props.match.params.siteId }

    const selectSite = siteNameList.reduce((r, c) =>
        c.vendor_id === parseInt(bodyData.vendor_id) && c.hid === bodyData.site_id ? c : r
        , null)


    const token = cookies.user === undefined ? undefined : cookies.user.token

    if (token === undefined) {
        props.history.replace(`/${route.login}`)
        return null
    }

    if (vendorState.isLoading) {
        console.log("site container api fetchingggggggggggg")
        // dispatch(Action.getvendorfromapi({ vendor_id, token }))
        dispatch(Action.getSiteListFromApi({ vendor_id: bodyData.vendor_id, site_id, token }))
    }
    // dispatch(Action.getGlobalHomeStatusData({ vendor_id, site_id, token }))
    return (
        <div className={`container-fluid ${media.mobile ? "px-0" : "px-4"}`}>
            <SiteNavbar {...props} selectSite={selectSite} />
            <div className="d-flex flex-row flex-wrap flex-md-nowrap">
                <div className="flex-grow-1">
                    <LeftSidebar
                        online={218} offline={12} siteChoose={true} active={selectSite === null ? false : selectSite.isOnline} efficiency={100} capacity={170.00}
                        siteName={selectSite === null ? null : selectSite.site_name}
                    />
                </div>
                <div className="w-100 pb-3" style={{ overflow: 'hidden' }}>
                    <Switch>
                        <Route path={`${match.path}/:pageName`} component={SitePage} />
                        <Redirect to={`${match.path}/${route.profile}`} />
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
            return withPageLoading(ProfileContainer, props)
    }
}