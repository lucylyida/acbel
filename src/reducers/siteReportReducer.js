import Action from '../action/action'

const initialState = {

    isLoading: true,

    // SiteReportDataRaw:null,
    SiteReportData:null
    
}

const siteReportReducer = (state=initialState,action)=>{
    // console.log(action.payload)
    switch(action.type){
        case Action.GET_SITE_REPORT_DATA_SUCCESS : {
            return({
                ...state,
                // SiteReportDataRaw:action.payload,
                SiteReportData:action.payload.file,
                isLoading:false,
            })
        }
        default: return state

    }
}

export default siteReportReducer