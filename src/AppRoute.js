import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import queryString from "query-string"
import { enc, dec } from "./network-sec/cypher"
import GlobalContainer from "./features/home/containers/GlobalContainer"
import SiteContainer from "./features/home/containers/SiteContainer"
import MaintenanceSideContainer from "./features/side-maintenance/containers/MaintenanceSideContainer"
import ReportSideContainer from "./features/side-report/containers/ReportSideContainer"
import AdministrationSideContainer from "./features/side-administration/containers/AdministrationSideContainer"
import ComprisonSideContainer from "./features/side-comparasion/containers/ComparisonSideContainer"
import LoginContainer from "./features/login/containers/LoginContainer"

import * as route from "./config/route.config"

const AppRoute = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={`/${route.global}`} component={GlobalContainer} />
                <Route path={`/${route.comparison}`} component={ComprisonSideContainer} />
                <Route path={`/${route.report}`} component={ReportSideContainer} />
                <Route path={`/${route.maintenance}/:pageName`} component={MaintenanceSideContainer} />
                <Route path={`/${route.administration}/:pageName`} component={AdministrationSideContainer} />
                <Route path={`/${route.site}/:siteId`} component={SiteContainer} />
                <Route path={`/${route.login}`} component={LoginContainer} />
                <Redirect to={`/${route.login}`} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoute