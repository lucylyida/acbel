import {all} from 'redux-saga/effects'
import {fetchVendorWatcherSaga} from './vendorSaga'


 export function* rootSaga(){
    yield all([
        fetchVendorWatcherSaga(),
        // fetchVendorWatcher(),
    ])
    console.log('hello is sagass')
}
