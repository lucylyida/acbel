import Action from '../action/action'

const initialState = {

    isLoading: true,
    
    globalHomeStatusData:[],
   


}

const globalReducer = (state=initialState,action)=>{
    switch(action.type){
        case Action.GET_GLOBAL_HOME_STATUS_DATA_SUCCESS : {
        //    !action.payload.success && alert(action.payload.message)  
                return({
                    ...state,
                    globalHomeStatusData:action.payload.payload,
                   
                    isLoading:false,
                })
         
        }
        case Action.CLEAR_STATE:
                return {...initialState}

        default: return state

    }
}

export default globalReducer