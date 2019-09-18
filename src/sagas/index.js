import { all } from 'redux-saga/effects'
import { fetchVendorWatcherSaga } from './vendorSaga'
import { fetchLoginWatcherSaga } from "./loginSaga"
import { fetchWeatherWatcherSaga } from "./weatherSaga"
import { fetchInverterWatcherSaga } from './inverterSaga'
import { fetchGlobalHomeStatusDataWatcherSaga } from './globalSaga'
import { fetchSiteProfileDataWatcherSaga } from './siteProfileSaga'
import { fetchSiteReportDataWatcherSaga } from './SiteReportSaga'
export function* rootSaga() {
    yield all([
        fetchVendorWatcherSaga(),
        fetchLoginWatcherSaga(),
        fetchWeatherWatcherSaga(),
        fetchInverterWatcherSaga(),
        fetchGlobalHomeStatusDataWatcherSaga(),
        fetchSiteProfileDataWatcherSaga(),
        fetchSiteReportDataWatcherSaga(),
        // fetchVendorWatcher(),
    ])
    console.log('hello is sagass')
}
