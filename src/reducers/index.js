import {combineReducers} from 'redux'
import vendorReducer from './vendorReducer'
import accountReducer from "./accountReducer"
import { weatherCountryReducer } from "./weatherReducer"
import inverterReducer from './inverterReducer'

const allReducers = combineReducers({
    vendorReducer,
    accountReducer,
    weatherCountryReducer,
    inverterReducer

})

export default allReducers