import ActionType from '../action/action'

const initialState = {
    loginLoading: false,
    loginDataRaw: null,
    loginError: ""
}

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_LOGIN_API_SUCCESS:
            if (action.payload === null) {
                return ({ ...state, loginLoading: false })
            }
            else if (action.payload === 'error') {
                return  initialState;
            }
            else {
                return ({
                    ...state,
                    loginDataRaw: action.payload,
                    loginLoading: false,
                })
            }
        case ActionType.GET_LOGIN_API:
            return ({
                ...state,
                loginLoading: true,
            })
        case ActionType.CLEAR_STATE:
            return {...initialState}
        // case ActionType.GET_LOGOUT: return initialState;
        default: return state
    }
}

export default accountReducer;