import Action from '../action/action'

const initialState = {
    isLoading: true,
    siteProfileDataRaw: [],
}

const siteProfileDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.GET_SITE_PROFILE_DATA_SUCCESS: {
            // !action.payload.success && alert(action.payload.message) 
            return ({
                ...state,
                siteProfileDataRaw: action.payload.payload,

                isLoading: false,
            })
        }
        case Action.CLEAR_STATE:
        return {...initialState}
        
        default: return state
    }
}

export default siteProfileDataReducer