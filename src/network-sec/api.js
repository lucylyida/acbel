
// export const   BASE_URL = "http://192.168.100.6:3333"
export const BASE_URL = "http://202.73.49.62:823"

// export const BASE_URL = "http://192.168.100.22:3333"

export const LOGIN = `${BASE_URL}/auth/login`

export const FETCH_VENDOR_LIST = `${BASE_URL}/vendors`

export const FETCH_VENDOR_SITES = `${BASE_URL}/vendors/sites`

export const FETCH_VENDOR = (vendorId) => `${BASE_URL}/vendors/${vendorId}`

export const FETCH_VENDOR_SITE_LIST = (vendorId) => `${BASE_URL}/vendors/${vendorId}/sites`

export const FETCH_VENDOR_SITE = (vendorId, siteId) => `${BASE_URL}/vendors/${vendorId}/sites/${siteId}`

// @lucy
export const FETCH_VENDOR_INVERTER_SITES = `${BASE_URL}/vendors/2/sites/1/inverters`
export const FETCH_VENDOR_PANEL_SITES = `${BASE_URL}/vendors/2/sites/1/panels`
export const FETCH_PANEL_INFO = `${BASE_URL}/vendors/panelInfo/2/sites/1`

export const FETCH_GLOBAL_HOME_STATUS_DATA = `${BASE_URL}/global`

// const apiKey ='access_key=ac450033bed7ef50c46c591214020163'
// export const WEATHER_URL = `http://api.weatherstack.com/current?${apiKey}`

const apiKey = '86585144f307f9c2e145b653008bdb43'
export const WEATHER_URL = city => `http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=${city}`

export const WEATHER_FORECAST_URL = city => `http://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&q=${city}`