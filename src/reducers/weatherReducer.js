import Action from '../action/action'

const initialState = {
    weatherCountryRaw: [],
    weatherlist: [],
    isLoading: true
}
export const weatherCountryReducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.GET_WEATHER_COUNTRY_SUCCESS:
            return ({ ...state, weatherCountryRaw: action.payload, weatherlist: action.payload, isLoading: false })
        default: return state
    }
}

export const weatherCityReducer = (state = { weatherCityRaw: [], isLoading: true }, action) => {
    // const vendorOfSite = action.payload
    switch (action.type) {
        case Action.GET_WEATHER_CITY_SUCCESS:
            return ({ ...state, isLoading: false })
        default: return state
    }
}