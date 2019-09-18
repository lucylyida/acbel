import ActionType from '../action/action'
import * as Action from "../action"
import { call, put, takeEvery, take, all } from 'redux-saga/effects'
import * as api from "../network-sec/api"
import moment from "moment"

function* fetchSiteReportData(action) {
    const data = action.payload
    const paramData = { 
        vendorId: data.selectedVendor.id,
        siteId: data.selectedSite.hid,
        deviceType: data.selectedDeviceType.value,
        date: moment(data.selectedDate).format("YYYY-MM-DD")
    }
    // console.log(paramData)
    try {
        const SiteReportData = yield fetch(api.FETCH_SITE_REPORT(paramData))
            .then(response => response.json())
            .then(data => data.payload)
        yield put(Action.getSiteReportDataSuccess(SiteReportData))
    } catch (error) {
        yield put({ type: 'FETCH_FAIL', error })
    }
}

export function* fetchSiteReportDataWatcherSaga() {
    yield takeEvery(ActionType.GET_SITE_REPORT_DATA, fetchSiteReportData)
}
