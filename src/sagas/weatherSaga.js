import ActionType from '../action/action'
import * as Action from '../action'
import { WEATHER_URL } from '../network-sec/api'
import { call, put, takeEvery, take, all } from 'redux-saga/effects'
import * as api from '../network-sec/api'

// function* fetchWeatherCountry(action) {
//     const currentWeather = yield fetch(WEATHER_URL(action.payload))
//         .then(response => response.json())
//         .then(data => data)
//     yield put({ type: Action.GET_WEATHER_COUNTRY_SUCCESS, payload: currentWeather })
// }

function* fetchWeather(action) {
    const [cWeather, fWeather] = yield all([
        call(fetch, api.WEATHER_URL(action.payload.lat,action.payload.lng)),
        call(fetch, api.WEATHER_FORECAST_URL(action.payload.lat,action.payload.lng))
    ])
    const currentWeather = yield cWeather.json().then(data => data)
    const forecastWeather = yield fWeather.json().then(data => data)
    yield put(Action.getweathercountrySuccess({ currentWeather, forecastWeather }))
}

export function* fetchWeatherWatcherSaga() {
    yield takeEvery(ActionType.GET_WEATHER_COUNTRY, fetchWeather)

}
