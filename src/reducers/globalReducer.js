import Action from '../action/action'

const initialState = {

    isLoading: true,
    
    globalHomeStatusData:[],
    globalHomeStatusDataWithId:[],


}

const globalReducer = (state=initialState,action)=>{
    switch(action.type){
        case Action.GET_GLOBAL_HOME_STATUS_DATA_SUCCESS : {
            return({
                ...state,
                globalHomeStatusData:action.payload,
                globalHomeStatusDataWithId:action.payload,
                isLoading:false,
            })
        }
        case Action.CLEAR_STATE:
                return {...initialState}

        default: return state

    }
}

export default globalReducer