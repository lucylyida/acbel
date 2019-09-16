import Action from '../action/action'
import { WEATHER_URL } from '../network-sec/api'
import { call, put, takeEvery, take } from 'redux-saga/effects'

function* fetchWeatherCountry(action) {
    console.log(action.payload)
    const country = yield fetch(WEATHER_URL + `&query=${action.payload}`)
        .then(response => response.json())
        .then(data => data.current)

    yield put({ type: Action.GET_WEATHER_COUNTRY_SUCCESS, payload: country })

}


// function* fetchWeatherCity() {
//     const city = yield fetch(WEATHER_URL + "&query=city")
//         .then(response => response.json())
//         .then(data => data)
//     yield (put({ type: Action.GET_WEATHER_CITY_SUCCESS, payload: city }))
// }


export function* fetchWeatherWatcherSaga() {
    yield takeEvery(Action.GET_WEATHER_COUNTRY, fetchWeatherCountry)
    // yield takeEvery(Action.GET_WEATHER_CITY, fetchWeatherCity)
}
