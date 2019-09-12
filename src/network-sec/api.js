
// export const   BASE_URL = "http://192.168.100.6:3333"
export const   BASE_URL = "http://202.73.49.62:823"

export const LOGIN = `${BASE_URL}/auth/login`

export const FETCH_VENDOR_LIST = `${BASE_URL}/vendors`

export const FETCH_VENDOR_SITES = `${BASE_URL}/vendors/sites`

export const FETCH_VENDOR = (vendorId) => `${BASE_URL}/vendors/${vendorId}`

export const FETCH_VENDOR_SITE_LIST = (vendorId) => `${BASE_URL}/vendors/${vendorId}/sites`

export const FETCH_VENDOR_SITE = (vendorId, siteId) => `${BASE_URL}/vendors/${vendorId}/sites/${siteId}`

const apiKey = 'access_key=ac450033bed7ef50c46c591214020163'

export const WEATHER_URL = `http://api.weatherstack.com/current?${apiKey}`