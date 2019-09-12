import Action from '../action/action'
const initialState ={
    vendorNameList:[],
    isLoading:true
}

const vendorReducer = (state= initialState ,action)=> {
    switch(action.type){
        case  Action.GET_VENDOR_SUCCESS :
          return ({...state,vendorNameList:action.payload, isLoading: false })
          default: return state
    }
}
// ...state, vendorList: [...action.payload],

export default vendorReducer;