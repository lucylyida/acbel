import Action from '../action/action'
const initialState ={

}

const vendorReducer = (state=[],action)=>{
    switch(action.type){
        case "GET_VENDOR_SUCCESS" :
          return ({...state, vendorList: [...action.payload]})
          default: return state
    }
}

export default vendorReducer;