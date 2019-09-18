import Action from '../action/action'

const initialState = {

    isLoading: true,

    SiteReportData:null,

    selectedVendor: null,

    selectedSite: null,

    selectedDate: new Date(),

    selectedDeviceType: null,

    selectedReportType: null,
    
}

const siteReportReducer = (state=initialState,action)=>{
   
    switch(action.type){
        case Action.GET_SITE_REPORT_DATA_SUCCESS : {
            return({
                ...state,
                // SiteReportDataRaw:action.payload,
                SiteReportData:action.payload.file,
                isLoading:false,
            })
        }
        case Action.REPORT_HANDLE_CHANGED : {
            // console.log("notedd>> ", action.payload)
            return({
                ...state,
                ...action.payload
            })
        }
        default: return state

    }
}

export default siteReportReducer