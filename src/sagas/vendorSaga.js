import ActionType from '../action/action'
import * as Action from "../action"
import { call, put, takeEvery, all } from 'redux-saga/effects'
import * as api from "../network-sec/api"

function* fetchVendor(action) {
    const TokenHeader = { headers: { 'Authorization': 'Bearer ' + action.payload.token }, }
    
    try {
        const [vendor, site, vendorSite,globalStatus] = yield all([
           
            call(fetch, action.payload.vendor_id === null ? api.FETCH_VENDOR_LIST : api.FETCH_VENDOR(action.payload.vendor_id),
                { headers: { 'Authorization': 'Bearer ' + action.payload.token }, }),

            call(fetch, action.payload.site_id !== null
                ? api.FETCH_VENDOR_SITE(action.payload.vendor_id, action.payload.site_id)
                : action.payload.vendor_id === null
                    ? api.FETCH_VENDOR_SITES
                    : api.FETCH_VENDOR_SITE_LIST(action.payload.vendor_id),
                TokenHeader),

            call(fetch, api.FETCH_VENDOR_SITE(action.payload.vendor_id, action.payload.site_id),
                { headers: { 'Authorization': 'Bearer ' + action.payload.token }, }),

            call(fetch, api.FETCH_GLOBAL_HOME_STATUS_DATA(action.payload.vendor_id, action.payload.site_id),
             { headers: { 'Authorization': 'Bearer ' + action.payload.token } }) , 
                
        ])

        const vendors = yield vendor.json().then(data => data.payload)
        const vendorArray = Array.isArray(vendors) ? vendors : [vendors]

        const sites = yield site.json().then(data => data.payload)
        const vendorSiteData = yield vendorSite.json().then(data => data)
        const globalStatusData = yield globalStatus.json().then(data => data)
        
        yield put({ type: ActionType.GET_VENDOR_SUCCESS, payload: vendorArray })
        yield put(Action.getSiteListFromApiSuccess(sites))
        yield put(Action.getVendorSiteDataSuccess(vendorSiteData))
        yield put(Action.getGlobalHomeStatusDataSuccess(globalStatusData))
        // console.log({vendors,sites,vendorSiteData})
    } catch (error) {
        yield put({ type: 'FETCH_FAIL', error })
    }
}
export function* fetchVendorWatcherSaga() {
    yield takeEvery(ActionType.GET_SITES_FROM_API, fetchVendor)
    // yield takeEvery(ActionType.GET_VENDOR_FROM_API, fetchVendor)
    // yield takeEvery(ActionType.GET_SITES_FROM_API, fetchSiteList)
    // yield takeEvery(ActionType.GET_VENDOR_SITE_DATA, fetchVendorSiteData)
}


// function* fetchVendor(action) {
//     // call in global saga
//     try {
//         //get vendorlist api endpoint
//         const vendors = yield fetch(action.payload.vendor_id === null ? api.FETCH_VENDOR_LIST : api.FETCH_VENDOR(action.payload.vendor_id),
//             { headers: { 'Authorization': 'Bearer ' + action.payload.token }, }
//         )
//             .then(response => response.json())
//             .then(data => data.payload)
//         const vendorArray = Array.isArray(vendors) ? vendors : [vendors]
//         // console.log(vendorArray)
//         yield put({ type: ActionType.GET_VENDOR_SUCCESS, payload: vendorArray })
//     } catch (error) {
//         yield put({ type: 'FETCH_FAIL', error })
//     }
// }

// function* fetchSiteList(action) {
//     // call in global saga
//     try {
//         //get vendorlist api endpoint
//         const sites = yield fetch(
//             action.payload.site_id !== null
//                 ? api.FETCH_VENDOR_SITE(action.payload.vendor_id, action.payload.site_id)
//                 : action.payload.vendor_id === null
//                     ? api.FETCH_VENDOR_SITES
//                     : api.FETCH_VENDOR_SITE_LIST(action.payload.vendor_id),
//             { headers: { 'Authorization': 'Bearer ' + action.payload.token }, }
//         )
//             .then(response => response.json())
//             .then(data => data.payload)
//         yield put(Action.getSiteListFromApiSuccess(sites))
//     } catch (error) {
//         yield put({ type: 'FETCH_FAIL', error })
//     }
// }

// function* fetchVendorSiteData(action) {
//     const body = action.payload
//     try {
//         const vendorSiteData = yield fetch(api.FETCH_VENDOR_SITE(body.vendor_id, body.site_id),
//             { headers: { 'Authorization': 'Bearer ' + body.token }, }
//         )
//             .then(response => response.json())
//             .then(data => data.payload)
//         yield put(Action.getVendorSiteDataSuccess(vendorSiteData))
//     } catch (error) {
//         yield put({ type: 'FETCH_FAIL', error })
//     }
// }
// export function* fetchVendorWatcherSaga() {
//     yield takeEvery(ActionType.GET_VENDOR_FROM_API, fetchVendor)
//     yield takeEvery(ActionType.GET_SITES_FROM_API, fetchSiteList)
//     yield takeEvery(ActionType.GET_VENDOR_SITE_DATA, fetchVendorSiteData)
// }






