import Action from '../action/action'
const initialState = {
    vendorListRaw: [],
    siteListRaw: [],

    vendorNameList: [],
    siteNameList: [],

    countryListRaw: [],
    countryNameList: [],

    isLoading: true
}

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
            // console.log("siteList", action.payload)
            const countryListRaw = action.payload.map(v => ({name: v.country})).filter((it, i, ar) => ar.reduce((r1,c1, i1)=>c1.name===it.name ? i1 : r1 ,-1)===i)
            const countryNameList = [...countryListRaw]
            
            const cityListRaw = action.payload.map(v => ({name: v.city})).filter((it, i, ar) => ar.reduce((r1,c1, i1)=>c1.name===it.name ? i1 : r1 ,-1)===i)
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
        default: return state
    }
}
// ...state, vendorList: [...action.payload],

export default vendorReducer;