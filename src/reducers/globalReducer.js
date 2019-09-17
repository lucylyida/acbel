import Action from '../action/action'

const initialState = {

    isLoading: true,
    
    globalHomeStatusData:[]


}

const globalReducer = (state=initialState,action)=>{
    switch(action.type){
        case Action.GET_GLOBAL_HOME_STATUS_DATA_SUCCESS : {
            return({
                ...state,
                globalHomeStatusData:action.payload,
                isLoading:false,
            })
        }
        default: return state

    }
}

export default globalReducer