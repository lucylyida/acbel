import ActionType from '../action/action'
import * as Action from "../action"
import { call, put, takeEvery, take, all } from 'redux-saga/effects'
import * as api from "../network-sec/api"

function* fetchGlobalHomeStatusData(action) {
    const body = action.payload
    try {
        // const globalhomestatusdata = yield fetch(api.FETCH_GLOBAL_HOME_STATUS_DATA(body.vendor_id, body.site_id),
        //     { headers: { 'Authorization': 'Bearer ' + action.payload.token }, })
        //     .then(response => response.json())
        //     // .then(data => console.log(data))
        //     .then(data => data)
        // console.log({ payload: action.payload, globalhomestatusdata})
        // yield put(Action.getGlobalHomeStatusDataSuccess(globalhomestatusdata))
        // ===========================================================================================================================

        // console.log("GET ---------------->>")
        const [vendor, site, globalStatus] = yield all([
            call(fetch, action.payload.vendor_id === null ? api.FETCH_VENDOR_LIST : api.FETCH_VENDOR(action.payload.vendor_id),
                { headers: { 'Authorization': 'Bearer ' + action.payload.token }, }),

            call(fetch, 
                action.payload.site_id !== null
                ? api.FETCH_VENDOR_SITE(action.payload.vendor_id, action.payload.site_id)
                :
                 action.payload.vendor_id === null
                    ? api.FETCH_VENDOR_SITES
                    : api.FETCH_VENDOR_SITE_LIST(action.payload.vendor_id),
                { headers: { 'Authorization': 'Bearer ' + action.payload.token }, }),

            call(fetch, api.FETCH_GLOBAL_HOME_STATUS_DATA(body.vendor_id, body.site_id), { headers: { 'Authorization': 'Bearer ' + action.payload.token } })
        ])
        // console.log("----------output time",vendor,site,globalStatus)

        const vendorsListData = yield vendor.json().then(data => data.payload)
        const siteListData = yield site.json().then(data => data.payload)
        const globalStatusData = yield globalStatus.json().then(data => data)

        // console.log("d12345678", vendorsListData, siteListData, globalStatusData)

        yield put(Action.getVendorSuccess(vendorsListData))
        yield put(Action.getSiteListFromApiSuccess(siteListData))
        yield put(Action.getGlobalHomeStatusDataSuccess(globalStatusData))
    } catch (error) {
        yield put({ type: 'FETCH_FAIL', error })
    }
}

export function* fetchGlobalHomeStatusDataWatcherSaga() {
    yield takeEvery(ActionType.GET_GLOBAL_HOME_STATUS_DATA, fetchGlobalHomeStatusData)
}
