import React, {  useEffect } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import * as route from "../../../config/route.config"
import { withMedia } from "react-media-query-hoc"

import GlobalMapContainer from "./GlobalMapContainer"
import GlobalListContainer from "./GlobalListContainer"
import GlobalNavbar from "../../app/components/GlobalNavbar"
import { enc } from "../../../network-sec/cypher"
import HomeStatusView from "../components/HomeStatusView";
import LeftSidebar from "../../app/components/LeftSidebar";
import HomefilterView from "../components/HomeFilterView";

import { useSelector, useDispatch } from 'react-redux'
import * as Action from '../../../action'

import { useCookies } from 'react-cookie';

const GlobalContainer = props => {
    const { match,/* location,*/ media } = props
    const [cookies] = useCookies(['user']);
    const queryData = {
        siteId: 1,
        siteName: "Organic Farmer's Association",
        city: "Hualien City",
        country: "Taiwan"
    }

    // const queryDataEnc = enc(queryData)

    const vendorState = useSelector(state => state.vendorReducer)
    const globalHomeStatusDataState = useSelector(state => state.globalReducer)

    const dispatch = useDispatch()

    const {
        vendorNameList,
        siteNameList,
        countryNameList,
        cityNameList,
        selectedVendor,
        selectedCountry,
        selectedCity,
        selectedSite,
    } = vendorState

    const vendor_id = selectedSite !== null
        ? selectedSite.vendor_id
        : selectedVendor !== null
            ? selectedVendor.id
            : cookies.user !== undefined ? cookies.user.vendor_id : undefined

    const token = cookies.user === undefined ? undefined : cookies.user.token

    const site_id = selectedSite !== null ? parseInt(selectedSite.hid) : null

    const money_unit = cookies.user === undefined ? null : cookies.user.money

    // console.log("!!!!!!!!!!!!!! >>>> ", vendorState.isLoading)
    // if (selectedVendor === null) {
    if (vendorState.isLoading  /* || globalHomeStatusDataState.isLoading */) {
        // console.log(vendor_id, site_id)
        // console.log({ selectedVendor, selectedSite })      
        // dispatch(Action.getvendorfromapi({ vendor_id, token }))
        // dispatch(Action.getSiteListFromApi({ vendor_id, site_id, token }))
        
        dispatch(Action.getGlobalHomeStatusData({ vendor_id, site_id, token }))
        // return null
    }
    // }

    /*
    if (selectedVendor === null) {
        if (vendorState.isLoading || globalHomeStatusDataState.isLoading) {
            dispatch(Action.getvendorfromapi(vendor_id))
            dispatch(Action.getSiteListFromApi(vendor_id))
            dispatch(Action.getGlobalHomeStatusData(vendor_id))
            // return null
        }
    } else {
        if (vendorState.isLoading || globalHomeStatusDataState.isLoading) {
            dispatch(Action.getvendorfromapi(vendor_id))
            dispatch(Action.getSiteListFromApi(vendor_id))
            dispatch(Action.getGlobalHomeStatusData(bodyData))
            // return null
        }
    }*/

    // if (globalHomeStatusDataState.globalHomeStatusData.length === 0) return null

    // if (vendorState.isLoading) {
    //     dispatch(Action.getGlobalHomeStatusData({ vendor_id, site_id, token }))
    // }

    useEffect(() => {
        dispatch(Action.getGlobalHomeStatusData({ vendor_id, site_id, token }))
        //  console.log('global container calling...')
    }, [selectedVendor, selectedSite])

    if (token === undefined) {
        props.history.replace(`/${route.login}`)
        return null
    }

    const homeStatusData = globalHomeStatusDataState.globalHomeStatusData

    return (
        <div className={`container-fluid py-2 ${media.mobile ? "px-1" : "px-4"}`}>
            {/* {
                vendorState.isLoading && (
                    <div className="text-center" style={{ position: "fixed", left: 0, top: "45%", right: 0, bottom: "45%", zIndex: 1 }}>
                        <span className="h3 font-weight-bold text-secondary">Loading...</span>
                    </div>
                )
            } */}
            <GlobalNavbar {...props} />
            <div className="d-flex flex-row flex-wrap flex-md-nowrap">
                <div className="flex-grow-1">
                    <LeftSidebar
                        online={homeStatusData.total_online_sites}
                        offline={homeStatusData.total_offline_sites}
                        siteChoose={true}
                        // active={true}
                        efficiency={100}
                        capacity={homeStatusData.total_capacity_kw}
                    />
                </div>
                <div className="w-100 pb-2">
                    <HomeStatusView data={homeStatusData} money_unit={money_unit} />
                    <HomefilterView
                        vendorNameList={vendorNameList}
                        siteNameList={siteNameList}
                        countryNameList={countryNameList}
                        cityNameList={cityNameList}
                        selectedVendor={selectedVendor}
                        selectedCountry={selectedCountry}
                        selectedCity={selectedCity}
                        selectedSite={selectedSite}
                        onVendorChange={d => dispatch(Action.globalHandleSelectFilter({ selectedVendor: d }))}
                        onCountryChange={d => dispatch(Action.globalHandleSelectFilter({ selectedCountry: d }))}
                        onCityChange={d => dispatch(Action.globalHandleSelectFilter({ selectedCity: d }))}
                        onSiteChange={d => dispatch(Action.globalHandleSelectFilter({ selectedSite: d }))}
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

    switch (pageName) {
        case route.map:
            return <GlobalMapContainer {...props} />
        case route.list:
            return <GlobalListContainer {...props} />
        default:
            return <GlobalMapContainer {...props} />
    }
}
