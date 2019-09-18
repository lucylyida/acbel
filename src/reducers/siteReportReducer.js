import Action from '../action/action'

const initialState = {

    isLoading: true,

    SiteReportData:null
    
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
        default: return state

    }
}

export default siteReportReducer