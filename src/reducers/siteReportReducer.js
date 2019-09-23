import Action from '../action/action'

const initialState = {

    isLoading: true,

    // SiteReportData: null,

    selectedVendor: null,

    selectedSite: null,

    selectedDate: new Date(),

    selectedDeviceType: null,

    selectedReportType: null,

}

const siteReportReducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.GET_SITE_REPORT_DATA_SUCCESS: {         

            action.payload.success ?
                window.location.href = `${action.payload.payload}`
                : alert(action.payload.message)

            return ({
                ...state,
                // SiteReportData: action.payload.payload,
                isLoading: false,
            })
        }
        case Action.REPORT_HANDLE_CHANGED: {
            // console.log("notedd>> ", action.payload)
            return ({
                ...state,
                ...action.payload
            })
        }
        case Action.CLEAR_STATE:
            return { ...initialState }

        default: return state

    }
}

export default siteReportReducer