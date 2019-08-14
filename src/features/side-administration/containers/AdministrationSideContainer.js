import React from "react"
import moment from 'moment'
import { Route, Link, Switch, Redirect, } from "react-router-dom"
import { withMedia } from 'react-media-query-hoc'
import { fsc, numberFormat } from '../../../helper/fontColorHelper'
import AdministrationNavbar from "../../app/components/AdministrationNavbar"
import LeftSidebar from "../../app/components/LeftSidebar";
<<<<<<< HEAD
import MaintenanceSideProfileContainer from "./AdministrationSideProfileContainer"

import AdministrationSideUserManagementContainer from "./AdministrationSideUserManagementContainer"

=======
import AdministrationSideProfileContainer from "./AdministrationSideProfileContainer"
import AdministrationSideUserManagementContainer from "./AdministrationSideUserManagementContainer"
>>>>>>> e0d797ff1b76bd6a6b789c2b60ab8726660d0de1
import * as route from "../../../config/route.config"

const AdministrationSideContainer = props => {

    const { media, match } = props

    return (
        <div className={`container-fluid py-2 ${media.mobile ? "px-1" : "px-4"}`}>
            <AdministrationNavbar {...props} />

            <div className="d-flex flex-row flex-wrap flex-md-nowrap">
                <div className="flex-grow-1">
                    <LeftSidebar
                        online={218} offine={12} siteChoose={true} active={true} efficiency={100} capacity={170.00}
                        siteName={"Organic Farmer's Association"}
                    />
                </div>
                <div className="w-100 pb-2">
                    <Switch>
                        <Route path={`${match.path}/:pageName`} component={AdminstrationPage} />
                        <Redirect to={`${match.path}/${route.userManagement}`} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default withMedia(AdministrationSideContainer)

const AdminstrationPage = props => {
    const pageName = props.match.params.pageName
    switch (pageName) {
        case route.profile:
            return <AdministrationSideProfileContainer {...props} />
        case route.userManagement:
<<<<<<< HEAD

            return <AdministrationSideUserManagementContainer {...props} />
        default:
            return <AdministrationSideUserManagementContainer {...props} />

=======
            return <AdministrationSideUserManagementContainer {...props} />
        default:
            return <AdministrationSideProfileContainer {...props} />
>>>>>>> e0d797ff1b76bd6a6b789c2b60ab8726660d0de1
    }
}