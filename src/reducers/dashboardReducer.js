import Action from '../action/action'

const initialState = {
    isLoading: true,
    dashboardDataRaw: null,
    dashboardPowerOutputTrendDataRaw: [],
    dashboardEfficiencyTrendDataRaw: [],
    dashboardRadiationTrendDataRaw: []
}

const dashboardDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.GET_DASHBOARD_DATA_SUCCESS: {
            // !action.payload.success && alert(action.payload.message)
            const {
                dashboardData,
                dashboardPowerOutputTrendData,
                dashboardEfficiencyTrendData,
                dashboardRadiationTrendData
            } = action.payload
            return ({
                ...state,
                dashboardDataRaw: dashboardData.payload,
                dashboardPowerOutputTrendDataRaw: dashboardPowerOutputTrendData.payload,
                dashboardEfficiencyTrendDataRaw: dashboardEfficiencyTrendData.payload,
                dashboardRadiationTrendDataRaw: dashboardRadiationTrendData.payload,
                isLoading: false,
            })
        }
        case Action.CLEAR_STATE: return { ...initialState }

        default: return state
    }
}

export default dashboardDataReducer