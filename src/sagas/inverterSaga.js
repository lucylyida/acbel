import ActionType from '../action/action'
import * as Action from "../action"
import { call, put, takeEvery, take, all, fork } from 'redux-saga/effects'
import * as api from "../network-sec/api"

function* fetchVendorInverterList() {
    const [inverter, panel, panelInfo] = yield all([
        call(fetch, api.FETCH_VENDOR_INVERTER_SITES),
        call(fetch, api.FETCH_VENDOR_PANEL_SITES),
        call(fetch, api.FETCH_PANEL_INFO)

    ])
    const inverters = yield inverter.json().then(data => data.payload)
    const panels = yield panel.json().then(data => data.payload)
    const panelInfos = yield panelInfo.json().then(data => data.payload)
    yield put(Action.getVendorInverterSitesSuccess({ inverters, panels, panelInfos }))
}

export function* fetchInverterWatcherSaga() {
    yield all([
        takeEvery(ActionType.GET_VENDOR_INVERTER_SITES, fetchVendorInverterList),
    ])
}
// function* fetchVendorInverterList() {
//     try {
//         const vendorInverters = yield fetch(api.FETCH_VENDOR_INVERTER_SITES)
//             .then(response => response.json())
//             .then(data => data.payload)
//         yield put(Action.getVendorInverterSitesSuccess(vendorInverters))
//     } catch (error) {
//         yield put({ type: 'FETCH_FAIL', error })
//     }
// }



