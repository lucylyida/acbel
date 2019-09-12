import {combineReducers} from 'redux'
import vendorReducer from './vendorReducer'
import accountReducer from "./accountReducer"
import { weatherCountryReducer } from "./weatherReducer"

const allReducers = combineReducers({
    vendorReducer,
    accountReducer,
    weatherCountryReducer,

})

export default allReducers