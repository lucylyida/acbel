import ActionType from '../action/action'
import * as Action from "../action"
import { call, put, takeEvery ,take} from 'redux-saga/effects'

function* fetchVendor() {
    try {
        //get vendorlist api endpoint
        const vendors = yield fetch("http://192.168.100.6:3333/vendors") 
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
        const sites = yield fetch("http://192.168.100.6:3333/vendors/sites") 
            .then(response => response.json())
            .then(data => data.payload)
        yield put(Action.getSiteListFromApiSuccess(sites))
    } catch (error) {
        yield put({ type: 'FETCH_FAIL', error })
    }
}


export function* fetchVendorWatcherSaga() {
    yield takeEvery(ActionType.GET_VENDOR_FROM_API, fetchVendor)    
    yield takeEvery(ActionType.GET_SITES_FROM_API, fetchSiteList)     
}




