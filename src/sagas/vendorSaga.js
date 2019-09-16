import ActionType from '../action/action'
import * as Action from "../action"
import { call, put, takeEvery, take } from 'redux-saga/effects'
import * as api from "../network-sec/api"


function* fetchVendor() {
    try {
        //get vendorlist api endpoint
        const vendors = yield fetch(api.FETCH_VENDOR_LIST)
            .then(response => response.json())
            .then(data => data.payload)
        yield put({ type: ActionType.GET_VENDOR_SUCCESS, payload: vendors })
    } catch (error) {
        yield put({ type: 'FETCH_FAIL', error })
    }
}

function* fetchSiteList() {
    try {
        //get vendorlist api endpoint
        const sites = yield fetch(api.FETCH_VENDOR_SITES)
            .then(response => response.json())
            .then(data => data.payload)
        yield put(Action.getSiteListFromApiSuccess(sites))
    } catch (error) {
        yield put({ type: 'FETCH_FAIL', error })
    }
}

function* fetchVendorSiteData(action) {
    const body = action.payload
    try {
        const vendorSiteData = yield fetch(api.FETCH_VENDOR_SITE(body.vendor_id, body.site_id))
        .then(response => response.json())
        .then(data => data.payload )
        yield put(Action.getVendorSiteDataSuccess(vendorSiteData))  
    }catch (error) {
        yield put({ type: 'FETCH_FAIL', error })
    }
}

export function* fetchVendorWatcherSaga() {
    yield takeEvery(ActionType.GET_VENDOR_FROM_API, fetchVendor)
    yield takeEvery(ActionType.GET_SITES_FROM_API, fetchSiteList)
    yield takeEvery(ActionType.GET_VENDOR_SITE_DATA, fetchVendorSiteData)
}




