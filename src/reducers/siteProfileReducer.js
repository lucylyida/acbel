import Action from '../action/action'

const initialState = {
    isLoading: true,
    siteProfileDataRaw: [],
}

const siteProfileDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.GET_SITE_PROFILE_DATA_SUCCESS: {
            // console.log(action.payload)
            // console.log("======================")
            return ({
                ...state,
                siteProfileDataRaw: action.payload,

                isLoading: false,
            })
        }
        case Action.CLEAR_STATE:
        return {...initialState}
        
        default: return state
    }
}

export default siteProfileDataReducer