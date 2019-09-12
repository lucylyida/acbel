import Action from '../action/action'
import { call, put, takeEvery ,take} from 'redux-saga/effects'

function* fetchVendor() {
    try {
        //get vendorlist api endpoint
        const vendors = yield fetch("http://192.168.100.6:3333/vendors") 
            .then(response => response.json())
            .then(data => data.payload)
        yield put({ type: Action.GET_VENDOR_SUCCESS, payload: vendors })
    } catch (error) {
        yield put({ type: 'FETCH_FAIL', error })
    }
}


export function* fetchVendorWatcherSaga() {
    yield takeEvery(Action.GET_VENDOR_FROM_API, fetchVendor)
  
     
}




