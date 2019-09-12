import React from "react"
import { Route, Link, Switch, Redirect } from "react-router-dom"
import * as route from "../../../config/route.config"
import { withMedia } from "react-media-query-hoc"
import { fsc } from "../../../helper/fontColorHelper"
import GlobalMapContainer from "./GlobalMapContainer"
import GlobalListContainer from "./GlobalListContainer"
import GlobalNavbar from "../../app/components/GlobalNavbar"
import { enc } from "../../../network-sec/cypher"
import HomeStatusView from "../components/HomeStatusView";
import LeftSidebar from "../../app/components/LeftSidebar";
import HomefilterView from "../components/HomeFilterView";

import { useSelector, useDispatch } from 'react-redux'
import { getvendorfromapi, getSiteListFromApi } from '../../../action'


const GlobalContainer = props => {
    const { match, location, media } = props
    const queryData = {
        siteId: 1,
        siteName: "Organic Farmer's Association",
        city: "Hualien City",
        country: "Taiwan"
    }
    const queryDataEnc = enc(queryData)

    const state = useSelector(state => state.vendorReducer)
    const dispatch = useDispatch()
    
    if(state.isLoading) {
        dispatch(getvendorfromapi())
        dispatch(getSiteListFromApi())
        // return null
    }
    const vendorNameList = state.vendorNameList //!state.vendorNameList ?[] : state.vendorNameList.map(v => ({ value: v.vendor_name, label: v.vendor_name, id:v.id}))
    const siteNameList = state.siteNameList
    const countryNameList = state.countryNameList
    const cityNameList = state.cityNameList

    return (
        <div className={`container-fluid py-2 ${media.mobile ? "px-1" : "px-4"}`}>
            <GlobalNavbar {...props} />
            <div className="d-flex flex-row flex-wrap flex-md-nowrap">
                <div className="flex-grow-1">
                    <LeftSidebar 
                        online={218} 
                        offline={12} 
                        siteChoose={true} 
                        active={true} 
                        efficiency={100} 
                        capacity={170.00} 
                    />
                </div>
                <div className="w-100 pb-2">
                    <HomeStatusView />
                    <HomefilterView 
                        vendorNameList ={ vendorNameList} 
                        siteNameList = { siteNameList }
                        countryNameList = { countryNameList }
                        cityNameList = { cityNameList }
                    />
                    <Switch>
                        <Route path={`${match.path}/:pageName`} component={GlobalPage} />
                        <Redirect to={`${match.path}/${route.map}`} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default withMedia(GlobalContainer)

const GlobalPage = props => {
    const pageName = props.match.params.pageName
    console.log(pageName)

    switch (pageName) {
        case route.map:
            return <GlobalMapContainer {...props} />
        case route.list:
            return <GlobalListContainer {...props} />
        default:
            return <GlobalMapContainer {...props} />
    }
}
