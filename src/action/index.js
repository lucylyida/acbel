import Action from './action'

export const getvendorfromapi= ()=>{
    return{
        type:Action.GET_VENDOR_FROM_API 
    }
}

export const getVendorSuccess = (data) => {
        console.log("vendor success action",data)
        return{
            type:Action.GET_VENDOR_SUCCESS,
            payload:data
        }
    }