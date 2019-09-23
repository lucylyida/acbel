import ActionType from '../action/action'
//@lucy
const initialState = {

    // vendorInverterSiteRaw: [],
    vendorInverterNameList: [],

    // vendorPanelSiteRaw: [],
    vendorPanelNameList: [],

    // vendorPanelInfoRaw: [],
    vendorPanelInfoNameList: [],

    isLoading: true,

    selectedInverters: []

}

const inverterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_VENDOR_INVERTER_SITES_SUCCESS: {
            
            // !action.payload.success && alert(action.payload.message) 
            
            const panelInfoList = action.payload.payload.panelInfos.filter(v => v.vendor_id === 2 && v.site_id === "1")
            const panelList = action.payload.payload.panels.filter(v => v.vendor_id === 2 && v.site_id === "1")
            const inverterList = action.payload.payload.inverters.filter(v => v.vendor_id === 2 && v.site_id === "1")
                .map(v => ({ ...v, panels: panelList.filter(c => v.inv_dint === c.inverter_id) }))
            return ({
                ...state,
                // vendorInverterSiteRaw: inverterList,
                vendorInverterNameList: inverterList,
                // vendorPanelSiteRaw: panelList,
                vendorPanelNameList: panelList,
                // vendorPanelInfoRaw: panelInfoList,
                vendorPanelInfoNameList: panelInfoList,
                isLoading: false,
            })
        }
        case ActionType.GLOBAL_HANDLE_SELECT_FILTER: {
            const { selectedInverter } = action.payload
            const { selectedInverters } = state
            const tempArr = selectedInverter === null
                ? []
                : selectedInverters.length < 2 && selectedInverters.filter(c => c === selectedInverter).length === 0
                    ? [...selectedInverters, selectedInverter]
                    : selectedInverters.filter(c => c !== selectedInverter)
            return ({
                ...state,
                selectedInverters: tempArr
            })

        }
        case ActionType.CLEAR_STATE:
                return {...initialState}

        default: return state
    }
}

export default inverterReducer
