import React from "react"
import moment from 'moment'
import { Route, Link, Switch, Redirect, } from "react-router-dom"
import { withMedia } from 'react-media-query-hoc'
import { fsc, numberFormat } from '../../../helper/fontColorHelper'
import ComparasionNavbar from "../../app/components/ComprisonNavbar"
import LeftSidebar from "../../app/components/LeftSidebar";
import SiteComprisonInputView from "../components/SiteComparisonInputView"
import MapComprisonView from "../components/MapComparisonView"
import ChartComparisonView from "../components/ChartComparisonView"
import * as route from "../../../config/route.config"
import querystring from "query-string"

const ComparasionSideContainer = props => {
    const { media, match } = props

    return (
        <div className={`container-fluid py-2 ${media.mobile ? "px-1" : "px-4"}`}>
            <ComparasionNavbar {...props} />
            <div className="d-flex flex-row flex-wrap flex-md-nowrap" style={{ overflow: "hidden" }}>

                <div className="">
                    <LeftSidebar online={218} offine={12} siteChoose={true} active={true} efficiency={100} capacity={170.00} />
                </div>

                <div className={`flex-grow-1 d-flex  ${media.tablet ? "d-flex" : "flex-column"} `}>
                    <div className="px-1" style={{ minWidth: 400 }} >
                        <SiteComprisonInputView {...props} />
                    </div>

                    <div className="px-1 flex-grow-1" >
                        <ComparionPage {...props} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withMedia(ComparasionSideContainer)

const ComparionPage = props => {
    const search = props.location.search
    const result = querystring.parse(search).cr
    switch (result) {
        case '1':
            return <ChartComparisonView {...props} />
        default:
            return <MapComprisonView {...props} />
    }
}


{/* <div className={`container-fluid py-2 ${media.mobile ? "px-1" : "px-4"}`}>
    <ComparasionNavbar {...props} />
    <div className="d-flex flex-row flex-wrap flex-md-nowrap" style={{ overflow: "hidden" }}>

        <div className="">
            <LeftSidebar online={218} offine={12} siteChoose={true} active={true} efficiency={100} capacity={170.00} />
        </div>

        <div className="flex-grow-1 d-flex">
            <div className="px-1" style={{ minWidth: 520 }} >
                <SiteComprisonInputView {...props} />
            </div>

            <div className="px-1 flex-grow-1" >
                <ComparionPage {...props} />
            </div>
        </div>
    </div>
</div> */}
