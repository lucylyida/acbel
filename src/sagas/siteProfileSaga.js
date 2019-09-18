import ActionType from '../action/action'
import * as Action from "../action"
import { call, put, takeEvery, take, all, fork } from 'redux-saga/effects'
import * as api from "../network-sec/api"

function* fetchSiteProfileData(action) {
    try{
        const siteProfileData = yield fetch(api.FETCH_SITE_PROFILE_DATA(action.payload.vendor_id,action.payload.site_id))
        .then(response => response.json())
        .then(data => data.payload)
        yield put(Action.getSiteProfileDataSuccess(siteProfileData))
    }catch(error){
        yield put({ type: 'FETCH_FAIL', error })
    }  
}

export function* fetchSiteProfileDataWatcherSaga() {
    yield takeEvery(ActionType.GET_SITE_PROFILE_DATA, fetchSiteProfileData)
}