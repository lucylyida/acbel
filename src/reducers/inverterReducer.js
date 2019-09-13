import ActionType from '../action/action'
//@lucy
const initialState = {
   
    vendorInverterSiteRaw:[],
    vendorInverterNameList:[],

    vendorPanelSiteRaw:[],
    vendorPanelNameList:[],

    vendorPanelInfoRaw:[],
    vendorPanelInfoNameList:[],

    isLoading: true,

}

const inverterReducer =(state = initialState, action)=>{
    switch (action.type) {
         case ActionType.GET_VENDOR_INVERTER_SITES_SUCCESS: {
            const panelInfoList = action.payload.panelInfos.filter(v=> v.vendor_id===2 && v.site_id==="1")
            const panelList = action.payload.panels.filter(v=> v.vendor_id===2 && v.site_id==="1")
            const inverterList = action.payload.inverters.filter(v=> v.vendor_id===2 && v.site_id==="1")
                .map( v => ({...v, panels: panelList.filter( c => v.inv_dint===c.inverter_id)   }))
           
            console.log({panelInfoList})
            return ({
                ...state,
                vendorInverterSiteRaw: inverterList,
                vendorInverterNameList: inverterList,
                vendorPanelSiteRaw: panelList,
                vendorPanelNameList: panelList, 
                vendorPanelInfoRaw:panelInfoList,
                vendorPanelInfoNameList:panelInfoList,
                isLoading: false
            })
        }
         default: return state
    }
}

export default inverterReducer
