import { all } from 'redux-saga/effects'
import { fetchVendorWatcherSaga } from './vendorSaga'
import { fetchLoginWatcherSaga } from "./loginSaga"
import { fetchWeatherWatcherSaga } from "./weatherSaga"
import {fetchInverterWatcherSaga} from './inverterSaga'

export function* rootSaga() {
    yield all([
        fetchVendorWatcherSaga(),
        fetchLoginWatcherSaga(),
        fetchWeatherWatcherSaga(),
        fetchInverterWatcherSaga(),
        // fetchVendorWatcher(),
    ])
    console.log('hello is sagass')
}
