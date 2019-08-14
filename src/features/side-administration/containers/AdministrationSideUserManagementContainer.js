import React from "react"
import moment from 'moment'
import { Route, Link, Switch, Redirect, } from "react-router-dom"
import { withMedia } from 'react-media-query-hoc'
import { fsc, numberFormat } from '../../../helper/fontColorHelper'

const MaintenanceSideCalendarContainer = props => {
    const { media, match } = props

    return (
        <div className={`container-fluid py-2 ${media.mobile ? "px-1" : "px-4"}`}>
            user Management
        </div>
    )
}

export default withMedia(MaintenanceSideCalendarContainer)