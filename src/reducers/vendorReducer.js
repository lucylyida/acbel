import Action from '../action/action'
//@nayhtet
const initialState = {
    vendorListRaw: [],
    siteListRaw: [],

    vendorNameList: [],
    siteNameList: [],

    countryListRaw: [],
    countryNameList: [],

    isLoading: true,

    selectedVendor: null,
    selectedCountry: null,
    selectedCity: null,
    selectedSite: null,

    vendorSiteData: [],


}

//@nayhtet
const vendorReducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.GET_VENDOR_SUCCESS: {
            return ({
                ...state,
                vendorListRaw: action.payload,
                vendorNameList: action.payload,
                isLoading: false
            })
        }
        case Action.GET_SITES_FROM_API_SUCCESS: {
            const countryListRaw = action.payload
                .map(v => ({ name: v.country }))
                .filter((it, i, ar) => ar.reduce((r1, c1, i1) => c1.name === it.name ? i1 : r1, -1) === i)
            const countryNameList = [...countryListRaw]

            const cityListRaw = action.payload
                .map(v => ({ name: v.city, country: v.country }))
                .filter((it, i, ar) => ar.reduce((r1, c1, i1) => c1.name === it.name ? i1 : r1, -1) === i)
            const cityNameList = [...cityListRaw]

            return ({
                ...state,
                siteListRaw: action.payload,
                siteNameList: action.payload,
                countryListRaw: countryListRaw,
                countryNameList: countryNameList,
                cityListRaw,
                cityNameList,
                isLoading: false
            })
        }
        case Action.GLOBAL_HANDLE_SELECT_FILTER: {
            const {
                selectedVendor = state.selectedVendor,
                selectedCountry = state.selectedCountry,
                selectedCity = state.selectedCity,
                selectedSite = state.selectedSite

            } = action.payload

            const countryNameList = state.siteListRaw
                .filter(v => selectedVendor ? v.vendor_id === selectedVendor.id : true) //filter vendor
                .filter(v => selectedSite ? v.hid === selectedSite.hid : true) // filter site
                .filter(v => selectedCountry ? v.country === selectedCountry.name : true) // filter country
                .filter(v => selectedCity ? v.city === selectedCity.name : true) // filter country
                .map(v => ({ name: v.country })) //change format
                .filter((it, i, ar) => ar.reduce((r1, c1, i1) => c1.name === it.name ? i1 : r1, -1) === i)  // remove duplicate    
            const cityNameList = state.siteListRaw
                .filter(v => selectedVendor ? v.vendor_id === selectedVendor.id : true) //filter vendor
                .filter(v => selectedSite ? v.hid === selectedSite.hid : true) // filter site
                .filter(v => selectedCountry ? v.country === selectedCountry.name : true) // filter country
                .filter(v => selectedCity ? v.city === selectedCity.name : true) // filter country
                .map(v => ({ name: v.city, country: v.country }))
                .filter((it, i, ar) => ar.reduce((r1, c1, i1) => c1.name === it.name ? i1 : r1, -1) === i)
            const siteNameList = state.siteListRaw
                .filter(v => selectedVendor ? v.vendor_id === selectedVendor.id : true) //filter vendor
                .filter(v => selectedSite ? v.hid === selectedSite.hid : true) // filter site
                .filter(v => selectedCountry ? v.country === selectedCountry.name : true) // filter country
                .filter(v => selectedCity ? v.city === selectedCity.name : true) // filter country
            const vendorNameList = state.siteListRaw
                .filter(v => selectedVendor ? v.vendor_id === selectedVendor.id : true) //filter vendor
                .filter(v => selectedSite ? v.hid === selectedSite.hid : true) // filter site
                .filter(v => selectedCountry ? v.country === selectedCountry.name : true) // filter country
                .filter(v => selectedCity ? v.city === selectedCity.name : true) // filter country
                .filter((v, i, a) => a.reduce((r, c, i1) => c.vendor_id === v.vendor_id ? i1 : r, -1) === i)
                .map(v => state.vendorListRaw.reduce((r, c) => c.id === v.vendor_id ? c : r, null)) // get the real vendor value 

            const allNull = !(action.payload.selectedVendor ||
                action.payload.selectedCountry ||
                action.payload.selectedCity ||
                action.payload.selectedSite) // check all null or not, this mean this is not select action (just remove) if all selected values are null
                
            return ({
                ...state,
                selectedVendor: !allNull && vendorNameList.length === 1 ? vendorNameList[0] : selectedVendor,
                selectedCountry: !allNull && countryNameList.length === 1 ? countryNameList[0] : selectedCountry,
                selectedCity: !allNull && cityNameList.length === 1 ? cityNameList[0] : selectedCity,
                selectedSite: !allNull && siteNameList.length === 1 ? siteNameList[0] : selectedSite,
                vendorNameList,
                siteNameList,
                cityNameList,
                countryNameList,
            })
        }
        // @mmh
        case Action.GET_VENDOR_SITE_DATA_SUCCESS: {
            return ({
                ...state,
                vendorSiteData: action.payload,
                isLoading: false
            })
        }
        default: return state
    }
}
// ...state, vendorList: [...action.payload],

export default vendorReducer;