import Action from './action'

export const getvendorfromapi = (data) => {
    return {
        type: Action.GET_VENDOR_FROM_API,
        payload: data
    }
}

export const getVendorSuccess = (data) => {
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

export const getSiteListFromApi = (data) => {
    return {
        type: Action.GET_SITES_FROM_API,
        payload: data
    }
}

export const getSiteListFromApiSuccess = (sites) => {
    return {
        type: Action.GET_SITES_FROM_API_SUCCESS,
        payload: sites
    }
}

export const getweathercountry = (data) => {
    return {
        type: Action.GET_WEATHER_COUNTRY,
        payload: data
    }
}
export const getweathercountrySuccess = (data) => {
    return {
        type: Action.GET_WEATHER_COUNTRY_SUCCESS,
        payload: data
    }
}
// @lucy
export const getVendorInverterSites = () => {
    return {
        type: Action.GET_VENDOR_INVERTER_SITES
    }
}
export const getVendorInverterSitesSuccess = (data) => {
    return {
        type: Action.GET_VENDOR_INVERTER_SITES_SUCCESS,
        payload: data

    }
}
export const getGlobalHomeStatusData = (data) => {
    return {
        type: Action.GET_GLOBAL_HOME_STATUS_DATA,
        payload: data
    }
}
export const getGlobalHomeStatusDataSuccess = (data) => {
    return {
        type: Action.GET_GLOBAL_HOME_STATUS_DATA_SUCCESS,
        payload: data,
    }
}
export const getSiteProfileData = (data) => {
    return {
        type: Action.GET_SITE_PROFILE_DATA,
        payload: data,
    }
}
export const getSiteProfileDataSuccess = (data) => {
    return {
        type: Action.GET_SITE_PROFILE_DATA_SUCCESS,
        payload: data,
    }
}
export const getSiteReportData =(data)=>{
    return{
        type:Action.GET_SITE_REPORT_DATA,
        payload: data
    }
}
export const getSiteReportDataSuccess =(data)=>{
    return{
        type:Action.GET_SITE_REPORT_DATA_SUCCESS,
        payload:data
    }
}


// @mmh
export const getVendorSiteData = (data) => {
    return {
        type: Action.GET_VENDOR_SITE_DATA,
        payload: data,
    }
}

export const getVendorSiteDataSuccess = (data) => {
    return {
        type: Action.GET_VENDOR_SITE_DATA_SUCCESS,
        payload: data,
    }
}

export const globalHandleSelectFilter = filterData => {
    return {
        type: Action.GLOBAL_HANDLE_SELECT_FILTER,
        payload: filterData
    }
}

export const reportHandleChanged = data => {
    return {
        type: Action.REPORT_HANDLE_CHANGED,
        payload: data
    }
}