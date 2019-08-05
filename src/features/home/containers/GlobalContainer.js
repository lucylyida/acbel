import React from "react"
import { Route, Link, Switch, Redirect } from "react-router-dom"
import * as route from "../../../config/route.config"
import GlobalMapContainer from "./GlobalMapContainer"
import GlobalListContainer from "./GlobalListContainer"
import GlobalNavbar from "../../app/components/GlobalNavbar"
import { enc } from "../../../network-sec/cypher"
import HomeStatusView from "../components/HomeStatusView";
import LeftSidebar from "../../app/components/LeftSidebar";
import HomefilterView from "../components/HomeFilterView";

const GlobalContainer = props => {
    const { match, location } = props
    const queryData = {
        siteId: 1,
        siteName: "Organic Farmer's Association",
        city: "Hualien City",
        country: "Taiwan"
    }
    const queryDataEnc = enc(queryData)
    const leftSidebarOpen = true
    return (
        <div className="container-fluid pt-2">
            <GlobalNavbar {...props} />
            <div className="p-3 d-flex flex-row flex-wrap flex-sm-nowrap">
                {
                    !leftSidebarOpen ?
                        <div className="pr-4">
                            <LeftSidebar
                                online={218} offine={12} siteChoose={true} active={true} efficiency={100} capacity={170.00}
                                siteName={"Organic Farmer's Association"}
                            />
                        </div>
                        : null
                }     
                <div className="w-100">           
                    <HomeStatusView />
                    <HomefilterView />
                    <Switch>
                        <Route path={`${match.path}/:pageName`} component={GlobalPage} />
                        <Redirect to={`${match.path}/${route.map}${location.search}?${route.had}=${queryDataEnc}`} />
                    </Switch>
                </div>
            </div>

        </div>
    )
}

export default GlobalContainer

const GlobalPage = props => {
    const pageName = props.match.params.pageName
    switch (pageName) {
        case route.map:
            return <GlobalMapContainer {...props} />
        case route.list:
            return <GlobalListContainer {...props} />
        default:
            return <GlobalMapContainer {...props} />
    }
}
