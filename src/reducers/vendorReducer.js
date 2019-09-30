// import Action from '../action/action'
import Action from '../action/action'
import equal from "deep-equal"
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
            // console.log("abcd, ",Array.isArray(action.payload))
            const vv = Array.isArray(action.payload) ? action.payload : [action.payload]
            // console.log("++++++++++++++++++++VEndor,", vv)
            return ({
                ...state,
                vendorListRaw: vv,
                vendorNameList: vv.sort((a, b) => a.vendor_name.localeCompare(b.vendor_name)),
                isLoading: false
            })
        }
        case Action.GET_SITES_FROM_API_SUCCESS: {
            // console.log("------------------SIte")
            // console.log("payload, ", action.payload)
            const vv = Array.isArray(action.payload) ? action.payload : [action.payload]
            const countryListRaw = vv
                .map(v => ({ name: v.country }))
                .filter((it, i, ar) => ar.reduce((r1, c1, i1) => c1.name === it.name ? i1 : r1, -1) === i)
            const countryNameList = [...countryListRaw]
            // console.log("-----------------------------SIte")
            const cityListRaw = vv
                .map(v => ({ name: v.city, country: v.country }))
                .filter((it, i, ar) => ar.reduce((r1, c1, i1) => c1.name === it.name ? i1 : r1, -1) === i)
            const cityNameList = [...cityListRaw]
            // console.log("---------------------------------------------->>SIte")

            return ({
                ...state,
                siteListRaw: vv,
                siteNameList: vv.sort((a, b) => a.site_name.localeCompare(b.site_name)),
                countryListRaw: countryListRaw,
                countryNameList: countryNameList,
                cityListRaw,
                cityNameList,
                isLoading: false
            })
        }

        case Action.GLOBAL_HANDLE_SELECT_FILTER: {
            // console.log("@@@@@@@@@@@@@@@@@@@@@@ 222")
            const {
                selectedVendor = state.selectedVendor,
                selectedCountry = state.selectedCountry,
                selectedCity = state.selectedCity,
                selectedSite = state.selectedSite
            } = action.payload

            if (action.payload.selectedVendor === null) { return initialState }

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
                .filter(v => selectedSite ? (v.hid === selectedSite.hid && selectedSite.vendor_id === v.vendor_id) : true) // filter site
            // .filter(v => selectedCountry ? v.country === selectedCountry.name : true) // filter country
            // .filter(v => selectedCity ? v.city === selectedCity.name : true) // filter country  
            // console.log("12,", state.vendorListRaw)        
            const vendorNameList = state.siteListRaw
                .filter(v => selectedVendor ? v.vendor_id === selectedVendor.id : true) //filter vendor
                .filter(v => selectedSite ? v.hid === selectedSite.hid : true) // filter site
                // .filter(v => selectedCountry ? v.country === selectedCountry.name : true) // filter country
                // .filter(v => selectedCity ? v.city === selectedCity.name : true) // filter country
                .filter((v, i, a) => a.reduce((r, c, i1) => c.vendor_id === v.vendor_id ? i1 : r, -1) === i)
                .map(v => state.vendorListRaw.reduce((r, c) => c.id === v.vendor_id ? c : r, null)) // get the real vendor value 

            const allNull = !(action.payload.selectedVendor ||
                // action.payload.selectedCountry ||
                // action.payload.selectedCity ||
                action.payload.selectedSite) // check all null or not, this mean this is not select action (just remove) if all selected values are null

            // console.log(selectedSite !== null
            //     ? vendorNameList.filter(dd => dd.id === selectedSite.vendor_id)[0]
            //     : !allNull && vendorNameList.length === 1
            //         ? vendorNameList[0]
            //         : selectedVendor)
            // console.log("state, ", )
            return ({
                ...state,
                selectedVendor: selectedSite !== null
                    ? vendorNameList.filter(dd => dd.id === selectedSite.vendor_id)[0]
                    : !allNull && vendorNameList.length === 1
                        ? vendorNameList[0]
                        : selectedVendor,

                selectedCountry: !allNull && countryNameList.length === 1 ? countryNameList[0] : selectedCountry,
                selectedCity: !allNull && cityNameList.length === 1 ? cityNameList[0] : selectedCity,
                selectedSite: !allNull && siteNameList.length === 1 ? siteNameList[0] : selectedSite,
                vendorNameList,
                siteNameList,
                cityNameList,
                countryNameList,
                isLoading: true //action.payload.selectedVendor!==null ? true : false,
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

        case Action.CLEAR_STATE:
            return initialState

        default: return state
    }
}
// ...state, vendorList: [...action.payload],

export default vendorReducer;