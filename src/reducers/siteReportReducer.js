import Action from '../action/action'
import * as api from "../network-sec/api"

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
            window.location.href = `${api.BASE_URL}${action.payload.file}` 
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