import React from "react"
import moment from 'moment'
import { Route, Link, Switch, Redirect, } from "react-router-dom"
import { withMedia } from 'react-media-query-hoc'
import { fsc, numberFormat } from '../../../helper/fontColorHelper'
import UserProfileView from "../components/UserProfileView"
import querystring from "query-string"

const MaintenanceSideProfileContainer = props => {
    const { media, match, location } = props
    const edit = querystring.parse(location.search).e
    return (
        <div className={`container-fluid py-2 ${media.mobile ? "px-1" : "px-4"}`}>
            { edit==="1" ? <UserProfileView {...props} edit /> : <UserProfileView {...props} /> }
        </div>
    )
}

export default withMedia(MaintenanceSideProfileContainer)