import ActionType from '../action/action'

const initialState = {
    
   
    weatherCurrentList:[],
    weatherForecastList:[],

    isLoading: true
}
export const weatherCountryReducer = (state = initialState, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case ActionType.GET_WEATHER_COUNTRY_SUCCESS:
            return ({ ...state,  weatherCurrentList: [action.payload.currentWeather],weatherForecastList:[action.payload.forecastWeather], isLoading: false })

        case ActionType.CLEAR_STATE:
                return {...initialState}
                
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