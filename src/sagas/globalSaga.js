import ActionType from '../action/action'
import * as Action from "../action"
import { call, put, takeEvery, take } from 'redux-saga/effects'
import * as api from "../network-sec/api"

function* fetchGlobalHomeStatusData(){
    try {
        const globalhomestatusdata = yield fetch(api.FETCH_GLOBAL_HOME_STATUS_DATA)
            .then(response => response.json())
            .then(data => data.payload)
        yield put(Action.getGlobalHomeStatusDataSuccess(globalhomestatusdata))
    } catch (error) {
        yield put({ type: 'FETCH_FAIL', error })
    }
}

export function* fetchGlobalHomeStatusDataWatcherSaga() {
  yield takeEvery(ActionType.GET_GLOBAL_HOME_STATUS_DATA,fetchGlobalHomeStatusData)
}
