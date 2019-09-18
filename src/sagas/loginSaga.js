import ActionType from '../action/action'
import * as Action from "../action"
import * as api from "../network-sec/api"

import { call, put, takeEvery, take } from 'redux-saga/effects'

function* fetchLogin(action) {
    const payload = action.payload
    try {
        //get login data from api
        const loginData = yield fetch(api.LOGIN, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then(data => data.payload)
            
        if (loginData === null) 
            alert("username and password mismatch!")
        yield put(Action.getLoginFromApiSuccess(loginData))
        
    } catch (error) {
        console.log({ error })
        // yield put({ type: 'FETCH_FAIL', error })
    }
}

export function* fetchLoginWatcherSaga() {
    yield takeEvery(ActionType.GET_LOGIN_API, fetchLogin)
}




