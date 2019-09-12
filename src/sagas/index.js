import { all } from 'redux-saga/effects'
import { fetchVendorWatcherSaga } from './vendorSaga'
import { fetchLoginWatcherSaga } from "./loginSaga"
import { fetchWeatherWatcherSaga } from "./weatherSaga"


export function* rootSaga() {
    yield all([
        fetchVendorWatcherSaga(),
        fetchLoginWatcherSaga(),
        fetchWeatherWatcherSaga(),
        // fetchVendorWatcher(),
    ])
    console.log('hello is sagass')
}
