import Action from '../action/action'
import {call,put,takeEvery} from 'redux-saga/effects'

 function* fetchVendor(){
    const vendors = yield call("http://192.168.100.6:3333/vendors")
    yield put({ type:'GET_VENDOR_SUCCESS', payload:vendors.data.payload })
}
 export function* fetchVendorWatcherSaga (){
     console.log('isss fetcher watcher',2)
    yield takeEvery(Action.GET_VENDOR_FROM_API,fetchVendor)
}
