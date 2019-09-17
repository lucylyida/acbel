import Action from '../action/action'

const initialState = {
    weatherCountryRaw: [],
   

    weatherCurrentList:[],
    weatherForecastList:[],

    isLoading: true
}
export const weatherCountryReducer = (state = initialState, action) => {

    switch (action.type) {
        case Action.GET_WEATHER_COUNTRY_SUCCESS:
            return ({ ...state, weatherCountryRaw: action.payload, weatherCurrentList: [action.payload.currentWeather],weatherForecastList:[action.payload.forecastWeather], isLoading: false })
        default: return state
    }
}

// export const weatherCityReducer = (state = { weatherCityRaw: [], isLoading: true }, action) => {
//     // const vendorOfSite = action.payload
//     switch (action.type) {
//         case Action.GET_WEATHER_CITY_SUCCESS:
//             return ({ ...state, isLoading: false })
//         default: return state
//     }
// }