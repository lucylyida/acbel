import ActionType from '../action/action'
import * as Action from "../action"
import { call, put, takeEvery, take, all } from 'redux-saga/effects'
import * as api from "../network-sec/api"

function* fetchSiteReportData() {
    // const body = action.payload
    try {
        const SiteReportData = yield fetch(api.FETCH_SITE_REPORT)
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
