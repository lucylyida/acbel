import ActionType from '../action/action'

const initialState = {
    loginLoading: false,
    loginDataRaw: null,
    loginError: ""
}

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_LOGIN_API_SUCCESS:
            return ({ ...state, 
                loginDataRaw: action.payload, 
                loginLoading: false,
            })
        case ActionType.GET_LOGIN_API:
            return ({ ...state, 
                loginLoading: true,
            })
        default: return state
    }
}

export default accountReducer;