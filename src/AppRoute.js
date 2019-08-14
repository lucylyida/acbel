import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import queryString from "query-string"
import { enc, dec } from "./network-sec/cypher"
import GlobalContainer from "./features/home/containers/GlobalContainer"
import SiteContainer from "./features/home/containers/SiteContainer"
import MaintenanceSideContainer from "./features/side-maintenance/containers/MaintenanceSideContainer"
import ReportSideContainer from "./features/side-maintenance/containers/MaintenanceSideContainer"
import AdministrationSideContainer from "./features/side-administration/containers/AdministrationSideContainer"
import * as route from "./config/route.config"

const AppRoute = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={`/${route.global}`} component={GlobalContainer} />
                <Route path={`/${route.maintenance}`} component={MaintenanceSideContainer} />
                <Route path={`/${route.report}`} component={MaintenanceSideContainer} />
                <Route path={`/${route.administration}`} component={AdministrationSideContainer} />
                <Route path={`/${route.site}/:siteId`} component={SiteContainer} />
                <Redirect to={`/${route.global}`} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoute