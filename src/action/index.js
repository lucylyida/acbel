import Action from './action'

export const getvendorfromapi = () => {
    return {
        type: Action.GET_VENDOR_FROM_API
    }
}

export const getVendorSuccess = (data) => {
    // console.log("vendor success action", data)
    return {
        type: Action.GET_VENDOR_SUCCESS,
        payload: data
    }
}

export const getLoginFromApi = (loginData) => {
    return {
        type: Action.GET_LOGIN_API,
        payload: loginData
    }
}

export const getLoginFromApiSuccess = (loginData) => {
    return {
        type: Action.GET_LOGIN_API_SUCCESS,
        payload: loginData
    }
}

export const getSiteListFromApi = () => {
    return {
        type: Action.GET_SITES_FROM_API,
    }
}

export const getSiteListFromApiSuccess = (sites) => {
    return {
        type: Action.GET_SITES_FROM_API_SUCCESS,
        payload: sites
    }
}

export const getweathercountry=()=>{
    return{
        type:Action.GET_WEATHER_COUNTRY
    }
}

// @lucy
export const getVendorInverterSites=()=>{
    return{
        type:Action.GET_VENDOR_INVERTER_SITES
    }
}
export const getVendorInverterSitesSuccess=(data)=>{
    return{
        type:Action.GET_VENDOR_INVERTER_SITES_SUCCESS,
        payload:data
       
    }
}

export const globalHandleSelectFilter = filterData => {
    return {
        type : Action.GLOBAL_HANDLE_SELECT_FILTER,
        payload: filterData
    }
}