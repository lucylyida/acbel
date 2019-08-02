import React from "react"
import { Route, Link, Switch, Redirect } from "react-router-dom"
import * as route from "../../../config/route.config"
import GlobalMapContainer from "./GlobalMapContainer"
import GlobalListContainer from "./GlobalListContainer"
import GlobalNavbar from "../../app/components/GlobalNavbar"

const GlobalContainer = props => {
    const { match } = props
    return (
        <div>
            <GlobalNavbar {...props} />
            <div className="p-3">
                <Switch>
                    <Route path={`${match.path}/:pageName`} component={GlobalPage} />
                    <Redirect to={`${match.path}/${route.map}`} />
                </Switch>
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