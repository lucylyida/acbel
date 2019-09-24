import ActionType from '../action/action'
import * as Action from "../action"
import { call, put, takeEvery, take, all, fork } from 'redux-saga/effects'
import * as api from "../network-sec/api"

function* fetchDashboardData(action) {
    // try {
    //     const dashboardData = yield fetch(api.FETCH_DASHBOARD_DATA(action.payload.vendor_id, action.payload.site_id),
    //         { headers: { 'Authorization': 'Bearer ' + action.payload.token }, }
    //     )
    //         .then(response => response.json())
    //         .then(data => data)
    //     yield put(Action.getDashboardDataSuccess(dashboardData))
    // } catch (error) {
    //     yield put({ type: 'FETCH_FAIL', error })
    // }
    const TokenHeader = { headers: { 'Authorization': 'Bearer ' + action.payload.token }, }
    try {
        const [
            dashboardLiveData,
            dashboardPowerOutputTrend,
            dashboardEfficiencyTrend,
            dashboardRadiationTrend
        ] = yield all([
            call(fetch, api.FETCH_DASHBOARD_DATA(action.payload.vendor_id, action.payload.site_id), TokenHeader),
            call(fetch, api.FETCH_DASHBOARD_POWER_OUTPUT_TREND_DATA(action.payload.vendor_id, action.payload.site_id), TokenHeader),
            call(fetch, api.FETCH_DASHBOARD_EFFICIENCY_TREND_DATA(action.payload.vendor_id, action.payload.site_id), TokenHeader),
            call(fetch, api.FETCH_DASHBOARD_RADIATION_TREND_DATA(action.payload.vendor_id, action.payload.site_id), TokenHeader)
        ])
        const dashboardData = yield dashboardLiveData.json().then(data => data)
        const dashboardPowerOutputTrendData = yield dashboardPowerOutputTrend.json().then(data => data)
        const dashboardEfficiencyTrendData = yield dashboardEfficiencyTrend.json().then(data => data)
        const dashboardRadiationTrendData = yield dashboardRadiationTrend.json().then(data => data)
        yield put(Action.getDashboardDataSuccess({
            dashboardData, dashboardPowerOutputTrendData, dashboardEfficiencyTrendData, dashboardRadiationTrendData
        }))
    } catch (error) {
        yield put({ type: 'FETCH_FAIL', error })
    }
}

export function* fetchDashboardDataWatcherSaga() {
    yield takeEvery(ActionType.GET_DASHBOARD_DATA, fetchDashboardData)
}